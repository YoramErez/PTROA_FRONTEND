import React from 'react';
import { MdAdd, MdDelete, MdSearch } from 'react-icons/md';

export default function TopBar({ onCreate, onDelete, onSearch }) {
  return (
    <div className="w-full flex flex-row-reverse items-center justify-end gap-4 px-6 py-3 bg-[#101e2b] border-b-2 border-cyan-400 shadow text-right" dir="rtl">
      <button
        className="bg-cyan-400 hover:bg-cyan-300 text-[#101e2b] font-bold rounded-xl px-4 py-2 flex items-center gap-2 transition shadow"
        onClick={onCreate}
        title="הוסף רשומה"
      >
        <MdAdd size={22} /> הוסף רשומה
      </button>
      <button
        className="bg-red-500 hover:bg-red-400 text-white font-bold rounded-xl px-4 py-2 flex items-center gap-2 transition shadow"
        onClick={onDelete}
        title="מחק רשומה"
      >
        <MdDelete size={22} /> מחק רשומה
      </button>
      <button
        className="bg-[#18283a] hover:bg-cyan-800 text-cyan-300 font-bold rounded-xl px-4 py-2 flex items-center gap-2 transition shadow border border-cyan-400"
        onClick={onSearch}
        title="חיפוש"
      >
        <MdSearch size={22} /> חיפוש
      </button>
    </div>
  );
} 