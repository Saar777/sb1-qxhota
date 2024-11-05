import React from 'react';
import { FAQ } from '../../types';

interface FaqItemProps {
  faq: FAQ;
  onEdit: (faq: FAQ) => void;
  onDelete: (id: number) => void;
}

export default function FaqItem({ faq, onEdit, onDelete }: FaqItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{faq.question}</h3>
          <p className="text-sm text-gray-500 mt-1">{faq.answer}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(faq)}
            className="text-indigo-600 hover:text-indigo-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(faq.id)}
            className="text-red-600 hover:text-red-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}