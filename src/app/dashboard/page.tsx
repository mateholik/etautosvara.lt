'use client';
import { supabase } from '@/supabase-client';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/Button';

type Client = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  text: string | null;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  text: string;
};

export default function Dashboard() {
  const [clientsList, setClientsList] = useState<Client[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    text: '',
  });
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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
    setFormData({ name: '', email: '', phone: '', text: '' });
    setEditingClient(null);
    setShowForm(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      showMessage('error', 'Vardas ir el. paštas yra privalomi');
      return;
    }

    setIsLoading(true);

    try {
      if (editingClient) {
        // Update existing client
        const { error } = await supabase
          .from('clients')
          .update({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim() || null,
            text: formData.text.trim() || null,
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
    }
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setFormData({
      name: client.name,
      email: client.email,
      phone: client.phone || '',
      text: client.text || '',
    });
    setShowForm(true);
  };

  const handleAddNew = () => {
    setEditingClient(null);
    setFormData({ name: '', email: '', phone: '', text: '' });
    setShowForm(true);
  };

  const handleCancel = () => {
    resetForm();
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
            <Button
              variant='primary'
              onClick={handleAddNew}
              className='shrink-0'
            >
              + Pridėti klientą
            </Button>
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
                    <div className='flex-1'>
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
                    </div>

                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() => handleEdit(client)}
                      className='md:ml-4 text-accent hover:bg-accent hover:text-white shrink-0 self-start'
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
