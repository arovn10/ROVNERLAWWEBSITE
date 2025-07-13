'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ImageUpload from './ImageUpload';
import Image from 'next/image';

interface Lawyer {
  id: string;
  name: string;
  title: string | null;
  bio: string | null;
  education: string | null;
  experience: string | null;
  specialties: string | null;
  email: string | null;
  phone: string | null;
  order: number;
  active: boolean;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
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
    specialties: '',
    email: '',
    phone: '',
    order: 0,
    active: true,
    image: ''
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (lawyer) {
      setFormData(lawyer);
    }
  }, [lawyer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

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

      const result = await response.json();

      if (response.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(result.error || 'Failed to save lawyer');
      }
    } catch (error) {
      console.error('Error saving lawyer:', error);
      setError('Failed to save lawyer');
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
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = async (url: string) => {
    setFormData(prev => ({ ...prev, image: url }));
    
    // If we're editing an existing lawyer, update the image in the database
    if (lawyer?.id) {
      try {
        const response = await fetch(`/api/lawyers/${lawyer.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: url }),
        });

        if (!response.ok) {
          throw new Error('Failed to update lawyer image');
        }

        // Refresh the page to show the updated image
        router.refresh();
      } catch (error) {
        console.error('Error updating lawyer image:', error);
        alert('Failed to update lawyer image');
      }
    }
  };

  const handleDelete = async () => {
    if (!lawyer?.id) return;
    if (!confirm('Are you sure you want to delete this lawyer?')) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`/api/lawyers/${lawyer.id}`, { method: 'DELETE' });
      if (response.ok) {
        router.push('/admin/lawyers');
        router.refresh();
      } else {
        setError('Failed to delete lawyer');
      }
    } catch {
      setError('Failed to delete lawyer');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 bg-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto mt-8 border border-gray-100">
      <div className="flex flex-col items-center mb-8">
        {formData.image && (
          <Image
            src={formData.image}
            alt="Profile Preview"
            width={128}
            height={128}
            className="rounded-xl border border-gray-300 shadow-lg object-cover mb-4"
          />
        )}
        <div className="w-full flex justify-center">
          <ImageUpload
            currentImageUrl={formData.image}
            onImageUpload={handleImageUpload}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name || ''}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base"
            placeholder="Full Name"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title || ''}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base"
            placeholder="Attorney Title"
          />
        </div>
      </div>
      <div>
        <label htmlFor="bio" className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
        <textarea
          name="bio"
          id="bio"
          rows={4}
          value={formData.bio || ''}
          onChange={handleChange}
          className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base"
          placeholder="Short biography..."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="education" className="block text-sm font-semibold text-gray-700 mb-2">Education</label>
          <textarea
            name="education"
            id="education"
            rows={3}
            value={formData.education || ''}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base"
            placeholder="Education background..."
          />
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">Experience</label>
          <textarea
            name="experience"
            id="experience"
            rows={3}
            value={formData.experience || ''}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base"
            placeholder="Professional experience..."
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="specialties" className="block text-sm font-semibold text-gray-700 mb-2">Specialties</label>
          <input
            type="text"
            name="specialties"
            id="specialties"
            value={formData.specialties || ''}
            onChange={handleChange}
            className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base"
            placeholder="Comma-separated specialties"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email || ''}
              onChange={handleChange}
              className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone || ''}
              onChange={handleChange}
              className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-base"
              placeholder="Phone number"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-8">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-colors text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Lawyer'}
        </button>
        {formData.id && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-100 hover:bg-red-200 text-red-700 px-8 py-3 rounded-lg font-semibold shadow-md transition-colors text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            disabled={isSubmitting}
          >
            Delete
          </button>
        )}
      </div>
      {error && (
        <div className="rounded-lg bg-red-50 p-4 mt-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}
    </form>
  );
} 