import React, { useState, useEffect } from 'react';
import { FAQ } from '../../types';
import { faqSchema } from '../../utils/validation';
import { z } from 'zod';

type FaqInput = Omit<FAQ, 'id'> & { id?: number };

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (faq: FaqInput) => void;
  faq?: FAQ;
}

export default function FaqModal({ isOpen, onClose, onSave, faq }: FaqModalProps) {
  const [formData, setFormData] = useState<FaqInput>({
    question: '',
    answer: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (faq) {
      setFormData(faq);
      setErrors({});
    }
  }, [faq]);

  const validateForm = () => {
    try {
      faqSchema.parse(formData);
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
          {faq ? 'Edit FAQ' : 'Add New FAQ'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Question
            </label>
            <input
              type="text"
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              className={`w-full rounded-lg border ${
                errors.question ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
            />
            {errors.question && (
              <p className="mt-1 text-sm text-red-500">{errors.question}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Answer
            </label>
            <textarea
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              className={`w-full rounded-lg border ${
                errors.answer ? 'border-red-500' : 'border-gray-300'
              } shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
              rows={4}
            />
            {errors.answer && (
              <p className="mt-1 text-sm text-red-500">{errors.answer}</p>
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