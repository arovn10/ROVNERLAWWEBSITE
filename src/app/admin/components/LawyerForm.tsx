'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ImageUpload from './ImageUpload';
import Image from 'next/image';

interface Lawyer {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  education?: string;
  experience?: string;
  specialties?: string[] | null;
  email?: string;
  phone?: string;
  order: number;
  active: boolean;
  image?: string;
}

interface LawyerFormProps {
  lawyer?: Lawyer;
}

export default function LawyerForm({ lawyer }: LawyerFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<Lawyer>>({
    name: '',
    title: '',
    bio: '',
    education: '',
    experience: '',
    specialties: [],
    email: '',
    phone: '',
    order: 0,
    active: true,
    image: ''
  });

  useEffect(() => {
    if (lawyer) {
      setFormData(lawyer);
    }
  }, [lawyer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        lawyer ? `/api/lawyers/${lawyer.id}` : '/api/lawyers',
        {
          method: lawyer ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        alert('Failed to save lawyer');
      }
    } catch (error) {
      console.error('Error saving lawyer:', error);
      alert('Failed to save lawyer');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'specialties') {
      setFormData(prev => ({
        ...prev,
        specialties: value ? value.split(',').map(s => s.trim()) : []
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (url: string) => {
    setFormData(prev => ({ ...prev, image: url }));
  };

  // Convert specialties array to string for the input field
  const specialtiesString = Array.isArray(formData.specialties) 
    ? formData.specialties.join(', ')
    : '';

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto mt-8 border border-gray-200">
      <div className="flex flex-col items-center mb-6">
        {formData.image && (
          <Image
            src={formData.image}
            alt="Profile Preview"
            width={96}
            height={96}
            className="rounded-full border border-gray-300 shadow-md object-cover mb-2"
          />
        )}
        <ImageUpload
          currentImageUrl={formData.image}
          onImageUpload={handleImageUpload}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name || ''}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title || ''}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email || ''}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
          <input
            type="number"
            name="order"
            id="order"
            value={formData.order || 0}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
          />
        </div>
        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            name="active"
            id="active"
            checked={formData.active}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <label htmlFor="active" className="ml-2 block text-sm text-gray-900">Active</label>
        </div>
      </div>
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
        <textarea
          name="bio"
          id="bio"
          rows={4}
          value={formData.bio || ''}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Education</label>
          <textarea
            name="education"
            id="education"
            rows={3}
            value={formData.education || ''}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
          <textarea
            name="experience"
            id="experience"
            rows={3}
            value={formData.experience || ''}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="specialties" className="block text-sm font-medium text-gray-700 mb-1">Specialties (comma-separated)</label>
        <input
          type="text"
          name="specialties"
          id="specialties"
          value={specialtiesString}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
        />
      </div>
      <div className="flex justify-end space-x-3 mt-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
} 