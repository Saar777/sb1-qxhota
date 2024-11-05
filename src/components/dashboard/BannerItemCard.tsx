import React from 'react';
import { BannerItem } from '../../types';

interface BannerItemCardProps {
  item: BannerItem;
  onEdit: (item: BannerItem) => void;
  onDelete: (id: number) => void;
}

export default function BannerItemCard({ item, onEdit, onDelete }: BannerItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-start gap-4">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-20 h-28 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.author}</p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => onEdit(item)}
              className="text-indigo-600 hover:text-indigo-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="text-red-600 hover:text-red-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}