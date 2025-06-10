'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  currentImageUrl?: string | null;
  onImageUpload: (url: string) => void;
}

export default function ImageUpload({ currentImageUrl, onImageUpload }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImageUrl || null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a preview URL
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    // Upload to S3
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      onImageUpload(data.url);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
      setPreviewUrl(currentImageUrl || null);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {previewUrl && (
        <div className="relative w-48 h-48">
          <Image
            src={previewUrl}
            alt="Preview"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      
      <div className="flex items-center space-x-4">
        <label className="relative cursor-pointer bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          {isUploading ? 'Uploading...' : 'Upload Image'}
          <input
            type="file"
            className="sr-only"
            accept="image/*"
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </label>
        {previewUrl && (
          <button
            type="button"
            onClick={() => {
              setPreviewUrl(null);
              onImageUpload('');
            }}
            className="text-sm text-red-600 hover:text-red-900"
          >
            Remove Image
          </button>
        )}
      </div>
    </div>
  );
} 