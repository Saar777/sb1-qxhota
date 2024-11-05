import React, { useState, useEffect } from 'react';
import { BannerItem } from '../../types';
import { bannerItemSchema } from '../../utils/validation';
import { z } from 'zod';

type BannerItemInput = Omit<BannerItem, 'id'> & { id?: number };

interface BannerItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: BannerItemInput) => void;
  item?: BannerItem;
}

export default function BannerItemModal({ isOpen, onClose, onSave, item }: BannerItemModalProps) {
  const [formData, setFormData] = useState<BannerItemInput>({
    title: '',
    image: '',
    author: '',
    link: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (item) {
      setFormData(item);
      setErrors({});
    }
  }, [item]);

  const validateForm = () => {
    try {
      bannerItemSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {item ? 'Edit Item' : 'Add New Item'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full rounded-lg border ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">{errors.title}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className={`w-full rounded-lg border ${
                errors.image ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
            />
            {errors.image && (
              <p className="mt-1 text-sm text-red-500">{errors.image}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Author
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className={`w-full rounded-lg border ${
                errors.author ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
            />
            {errors.author && (
              <p className="mt-1 text-sm text-red-500">{errors.author}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link
            </label>
            <input
              type="text"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              className={`w-full rounded-lg border ${
                errors.link ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
            />
            {errors.link && (
              <p className="mt-1 text-sm text-red-500">{errors.link}</p>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}