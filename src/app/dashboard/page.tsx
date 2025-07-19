'use client';
import { supabase } from '@/supabase-client';
import { useEffect, useState } from 'react';

type Client = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  text: string | null;
};

export default function Dashboard() {
  const [clientsList, setClientsList] = useState<Client[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const fetchClients = async () => {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      console.error('Error fetching clients:', error);
      return;
    }
    setClientsList(data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.from('clients').insert(formData);
    setClientsList((prev) => [...prev, formData]);
    if (error) {
      console.error('Error inserting client:', error);
    }
  };

  const updateClient = async (id: number, client: Client) => {
    const { data, error } = await supabase
      .from('clients')
      .update(client)
      .eq('id', id);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='border-2 border-gray-300 rounded-md p-2'
          type='text'
          name='name'
          placeholder='Name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className='border-2 border-gray-300 rounded-md p-2'
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className='border-2 border-gray-300 rounded-md p-2'
          type='text'
          name='phone'
          placeholder='Phone'
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <button className='bg-blue-500 text-white p-2 rounded-md' type='submit'>
          Submit
        </button>
      </form>
      <button onClick={fetchClients}>Fetch Clients</button>
      <pre>{JSON.stringify(clientsList, null, 2)}</pre>
    </div>
  );
}
