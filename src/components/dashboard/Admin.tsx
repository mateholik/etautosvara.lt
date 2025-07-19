'use client';
import { supabase } from '@/supabase-client';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import AuthenticatedImage from '@/components/AuthenticatedImage';

type Client = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  text: string | null;
  image_url: string | null;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  text: string;
  image: File | null;
};

export default function Admin() {
  const [clientsList, setClientsList] = useState<Client[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    text: '',
    image: null,
  });
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClientsList(data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
      showMessage('error', 'Klaida gaunant klientų sąrašą');
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', text: '', image: null });
    setEditingClient(null);
    setShowForm(false);
    setImagePreview(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      showMessage('error', 'Prašome pasirinkti nuotrauką');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showMessage('error', 'Nuotrauka per didelė. Maksimalus dydis: 5MB');
      return;
    }

    setFormData({ ...formData, image: file });

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const uploadImage = async (
    file: File,
    clientId?: number
  ): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;
      const filePath = `cars/${fileName}`;

      setUploadProgress(10);

      const { error: uploadError } = await supabase.storage
        .from('cars')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) throw uploadError;

      setUploadProgress(100);

      // Return the file path instead of public URL (for private bucket)
      return filePath;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const deleteImage = async (imagePath: string) => {
    try {
      // If it's a full URL, extract the file path, otherwise use as-is
      let filePath = imagePath;
      if (imagePath.includes('supabase')) {
        const url = new URL(imagePath);
        const pathParts = url.pathname.split('/');
        filePath = pathParts.slice(-2).join('/'); // Get 'cars/filename.ext'
      }

      const { error } = await supabase.storage.from('cars').remove([filePath]);

      if (error) {
        console.error('Error deleting image:', error);
        // Don't throw error as it's not critical
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      // Don't throw error as it's not critical
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      showMessage('error', 'Vardas ir el. paštas yra privalomi');
      return;
    }

    setIsLoading(true);
    setUploadProgress(0);

    try {
      let imageUrl: string | null = null;

      // Upload image if provided
      if (formData.image) {
        imageUrl = await uploadImage(formData.image);
      }

      if (editingClient) {
        // If updating and there's a new image, delete the old one
        if (formData.image && editingClient.image_url) {
          await deleteImage(editingClient.image_url);
        }

        // Update existing client
        const { error } = await supabase
          .from('clients')
          .update({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim() || null,
            text: formData.text.trim() || null,
            image_url: imageUrl || editingClient.image_url,
          })
          .eq('id', editingClient.id);

        if (error) throw error;

        showMessage('success', 'Klientas sėkmingai atnaujintas');
        setClientsList((prev) =>
          prev.map((client) =>
            client.id === editingClient.id
              ? {
                  ...client,
                  ...formData,
                  phone: formData.phone || null,
                  text: formData.text || null,
                  image_url: imageUrl || editingClient.image_url,
                }
              : client
          )
        );
      } else {
        // Add new client
        const { data, error } = await supabase
          .from('clients')
          .insert({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim() || null,
            text: formData.text.trim() || null,
            image_url: imageUrl,
          })
          .select()
          .single();

        if (error) throw error;

        showMessage('success', 'Klientas sėkmingai pridėtas');
        setClientsList((prev) => [data, ...prev]);
      }

      resetForm();
    } catch (error) {
      console.error('Error saving client:', error);
      showMessage(
        'error',
        editingClient
          ? 'Klaida atnaujinant klientą'
          : 'Klaida pridedant klientą'
      );
    } finally {
      setIsLoading(false);
      setUploadProgress(0);
    }
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setFormData({
      name: client.name,
      email: client.email,
      phone: client.phone || '',
      text: client.text || '',
      image: null,
    });
    // Don't set image preview for existing clients to avoid confusion
    setImagePreview(null);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setEditingClient(null);
    setFormData({ name: '', email: '', phone: '', text: '', image: null });
    setImagePreview(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    resetForm();
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        showMessage('error', 'Klaida atsijungiant');
      } else {
        showMessage('success', 'Sėkmingai atsijungėte');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      showMessage('error', 'Klaida atsijungiant');
    }
  };

  // Handle click outside modal
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      resetForm();
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className='min-h-screen bg-secondary p-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <div className='md:flex items-center justify-between space-y-4'>
            <div>
              <h1 className='text-3xl font-bold text-primary mb-2'>
                Administracijos skydelis
              </h1>
              <p className='text-muted'>
                Tvarkykite klientų duomenis ir peržiūrėkite kontaktų sąrašą
              </p>
            </div>
            <div className='flex items-center gap-3 shrink-0'>
              <Button variant='primary' onClick={handleAddNew}>
                + Pridėti klientą
              </Button>
              <Button
                variant='outline'
                onClick={handleLogout}
                className='text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 hover:text-red-700'
              >
                Atsijungti
              </Button>
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg border ${
              message.type === 'success'
                ? 'bg-green-50 border-green-200 text-green-700'
                : 'bg-red-50 border-red-200 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form Modal */}
        {showForm && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'
            onClick={handleClickOutside}
          >
            <div
              ref={modalRef}
              className='bg-white rounded-lg shadow-xl border border-border p-6 w-full max-w-md max-h-[90vh] overflow-y-auto'
            >
              <h2 className='text-xl font-semibold text-primary mb-4'>
                {editingClient ? 'Redaguoti klientą' : 'Pridėti naują klientą'}
              </h2>

              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-primary mb-2'
                  >
                    Vardas *
                  </label>
                  <input
                    id='name'
                    type='text'
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className='w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-primary placeholder:text-gray-500'
                    placeholder='Įveskite vardą'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-primary mb-2'
                  >
                    El. paštas *
                  </label>
                  <input
                    id='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className='w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-primary placeholder:text-gray-500'
                    placeholder='Įveskite el. paštą'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-primary mb-2'
                  >
                    Telefono numeris
                  </label>
                  <input
                    id='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className='w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-primary placeholder:text-gray-500'
                    placeholder='Įveskite telefono numerį'
                  />
                </div>

                <div>
                  <label
                    htmlFor='text'
                    className='block text-sm font-medium text-primary mb-2'
                  >
                    Aprašymas
                  </label>
                  <textarea
                    id='text'
                    value={formData.text}
                    onChange={(e) =>
                      setFormData({ ...formData, text: e.target.value })
                    }
                    className='w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none text-primary placeholder:text-gray-500'
                    placeholder='Įveskite aprašymą arba pastabas'
                    rows={4}
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label
                    htmlFor='image'
                    className='block text-sm font-medium text-primary mb-2'
                  >
                    Automobilio nuotrauka
                  </label>
                  <input
                    id='image'
                    type='file'
                    ref={fileInputRef}
                    accept='image/*'
                    onChange={handleImageChange}
                    className='w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white file:cursor-pointer hover:file:bg-red-700'
                  />
                  <p className='text-xs text-muted mt-1'>
                    Palaikomi formatai: JPG, PNG, WebP. Maksimalus dydis: 5MB
                  </p>

                  {/* Image Preview */}
                  {imagePreview && (
                    <div className='mt-3'>
                      <img
                        src={imagePreview}
                        alt='Nuotraukos peržiūra'
                        className='w-full h-32 object-cover rounded-lg border border-border'
                      />
                    </div>
                  )}

                  {/* Existing image for edit mode */}
                  {editingClient &&
                    editingClient.image_url &&
                    !imagePreview && (
                      <div className='mt-3'>
                        <p className='text-xs text-muted mb-2'>
                          Dabartinė nuotrauka:
                        </p>
                        <AuthenticatedImage
                          path={editingClient.image_url}
                          alt='Dabartinė nuotrauka'
                          className='w-full h-32 object-cover rounded-lg border border-border'
                        />
                      </div>
                    )}

                  {/* Upload Progress */}
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className='mt-3'>
                      <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div
                          className='bg-accent h-2 rounded-full transition-all duration-300'
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      <p className='text-xs text-muted mt-1'>
                        Įkeliama nuotrauka... {uploadProgress}%
                      </p>
                    </div>
                  )}
                </div>

                <div className='flex gap-3 pt-4'>
                  <Button
                    type='submit'
                    variant='primary'
                    isLoading={isLoading}
                    className='flex-1'
                  >
                    {editingClient ? 'Atnaujinti' : 'Pridėti'}
                  </Button>

                  <Button
                    type='button'
                    variant='outline'
                    onClick={handleCancel}
                    className='flex-1'
                  >
                    Atšaukti
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Clients List Section */}
        <div className='bg-white rounded-lg shadow-sm border border-border p-6'>
          <h2 className='text-xl font-semibold text-primary mb-6'>
            Klientų sąrašas ({clientsList.length})
          </h2>

          <div className='space-y-4'>
            {clientsList.length === 0 ? (
              <div className='text-center py-12 text-muted'>
                <p className='text-lg'>Klientų sąrašas tuščias</p>
                <p className='text-sm'>
                  Pridėkite pirmą klientą paspausdami mygtuką viršuje
                </p>
              </div>
            ) : (
              clientsList.map((client) => (
                <div
                  key={client.id}
                  className='p-6 border rounded-lg transition-all duration-200 border-border hover:border-accent/50 hover:shadow-md bg-white'
                >
                  <div className='md:flex items-start justify-between mb-4 space-y-8'>
                    <div className='flex-1 mb-0'>
                      <h3 className='text-lg font-semibold text-primary mb-3'>
                        {client.name}
                      </h3>
                      <div className='space-y-2'>
                        {/* Email */}
                        <div className='flex items-center space-x-2'>
                          <span className='text-accent'>✉️</span>
                          <span className='text-sm text-primary'>
                            {client.email}
                          </span>
                        </div>

                        {/* Phone */}
                        {client.phone && (
                          <div className='flex items-center space-x-2'>
                            <span className='text-accent'>📞</span>
                            <span className='text-sm text-primary'>
                              {client.phone}
                            </span>
                          </div>
                        )}

                        {/* Description */}
                        {client.text && (
                          <div className='mt-3 pt-3 border-t border-gray-100'>
                            <div className='flex items-start space-x-2'>
                              <span className='text-accent mt-0.5'>📝</span>
                              <div className='flex-1'>
                                <p className='text-sm font-medium text-muted mb-1'>
                                  Aprašymas:
                                </p>
                                <p className='text-sm text-primary leading-relaxed'>
                                  {client.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Date */}
                      <div className='mt-4 pt-3 border-t border-gray-100'>
                        <div className='flex items-center space-x-2'>
                          <span className='text-muted'>🕒</span>
                          <span className='text-xs text-muted'>
                            Pridėta:{' '}
                            {new Date(client.created_at).toLocaleDateString(
                              'lt-LT',
                              {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              }
                            )}
                          </span>
                        </div>
                      </div>
                      {/* Car Image */}
                      {client.image_url && (
                        <div className='md:w-1/2 mt-4'>
                          <AuthenticatedImage
                            path={client.image_url}
                            alt={`${client.name} automobilis`}
                            className='w-full max-w-xs h-32 object-cover rounded-lg border border-border'
                          />
                        </div>
                      )}
                    </div>

                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() => handleEdit(client)}
                      className='md:ml-4 text-accent hover:bg-accent hover:text-white shrink-0 self-start mt-4 md:mt-0'
                    >
                      ✏️ Redaguoti
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
