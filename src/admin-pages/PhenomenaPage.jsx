import React, { useState } from 'react';

const statistics = {
  images: 20,
  video: 17,
  audio: 243,
  maps: 19,
  publications: 6,
  documents: 48,
  reports: 66,
  summaries: 121,
  targets: 35
};

const phenomenon = {
  name: 'קרבות כלבים',
  description: 'כאן ייכנס הסבר ארוך על התופעה...',
  related: {
    images: [{ id: 1, title: "תמונה א'" }, { id: 2, title: "תמונה ב'" }],
    video: [{ id: 1, title: 'תיעוד סתר' }],
    audio: [],
    maps: [],
    publications: [],
    documents: [],
    reports: [],
    summaries: [],
    targets: []
  }
};

const categories = [
  { key: 'images', label: 'תמונות' },
  { key: 'video', label: 'וידאו' },
  { key: 'audio', label: 'אודיו' },
  { key: 'maps', label: 'מפות' },
  { key: 'publications', label: 'פרסומים' },
  { key: 'documents', label: 'מסמכים' },
  { key: 'reports', label: 'דיווחים' },
  { key: 'summaries', label: 'דוחות' },
  { key: 'targets', label: 'יעדים' },
];

export default function PhenomenaPage() {
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [desc, setDesc] = useState(phenomenon.description);
  const [activeTab, setActiveTab] = useState('images');

  // נתוני דמה למטה
  const createdAt = '2024-06-09';
  const createdTime = '14:32';
  const createdBy = 'admin';
  const updatedAt = '2024-06-10';
  const updatedTime = '09:17';
  const updatedBy = 'editor';

  return (
    <div className="min-h-screen p-8 text-white">
      {/* Header + Create Button */}
      <div className="flex items-center mb-6">
        <h1 className="w-full text-3xl font-bold text-cyan-400 drop-shadow-lg text-right pr-4" dir="rtl" style={{letterSpacing: '1px'}}>תופעה: {phenomenon.name}</h1>
      </div>

      {/* Modal for creating phenomenon */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#18283a] p-8 rounded-2xl shadow-lg min-w-[320px] flex flex-col gap-4 border border-cyan-400">
            <h2 className="text-xl text-cyan-400 font-bold mb-2">צור תופעה חדשה</h2>
            <input
              type="text"
              placeholder="שם התופעה"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              className="p-3 rounded-lg border border-cyan-400 bg-[#101e2b] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <div className="flex gap-2 mt-4">
              <button
                className="bg-cyan-400 text-[#101e2b] font-bold rounded-lg p-3 hover:bg-cyan-300 transition flex-1"
                onClick={() => { setShowModal(false); setNewName(''); }}
              >
                אישור
              </button>
              <button
                className="bg-gray-600 text-white font-bold rounded-lg p-3 hover:bg-gray-500 transition flex-1"
                onClick={() => setShowModal(false)}
              >
                ביטול
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-start gap-[10px] h-full">
        {/* Main content */}
        <div className="flex-1">
          {/* Description + Statistics side by side */}
          <div className="mb-6 flex flex-col md:flex-row items-stretch gap-[10px] h-full">
            <div className="flex-1 md:w-full h-full flex flex-col justify-between">
              <div className="flex-1 flex flex-col">
                <label className="block text-cyan-300 font-semibold mb-2 text-lg text-right mr-4" dir="rtl">הסבר על התופעה:</label>
                <textarea
                  className="w-full min-h-[400px] max-h-[1000px] p-6 rounded-2xl border-2 border-cyan-400 bg-[#16202b] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-y text-lg shadow-lg text-right"
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  dir="rtl"
                />
              </div>
              {/* בלוק מידע על תאריכים */}
              <div className="mt-2 mb-0 flex flex-col md:flex-row gap-2">
                <div className="flex-1 bg-[#16202b] border border-cyan-400 rounded-xl px-4 py-2 text-xs text-cyan-200 flex flex-row items-center gap-2 text-right" dir="rtl">
                  <span>נוסף בתאריך:</span>
                  <span className="font-bold text-white">{createdAt}</span>
                  <span>בשעה</span>
                  <span className="font-bold text-white">{createdTime}</span>
                  <span>ע"י</span>
                  <span className="font-bold text-white">{createdBy}</span>
                </div>
                <div className="flex-1 bg-[#16202b] border border-cyan-400 rounded-xl px-4 py-2 text-xs text-cyan-200 flex flex-row items-center gap-2 text-right" dir="rtl">
                  <span>עודכן בתאריך:</span>
                  <span className="font-bold text-white">{updatedAt}</span>
                  <span>בשעה</span>
                  <span className="font-bold text-white">{updatedTime}</span>
                  <span>ע"י</span>
                  <span className="font-bold text-white">{updatedBy}</span>
                </div>
              </div>
            </div>
            <div className="md:w-64 bg-[#16202b] rounded-2xl p-6 border border-cyan-400 shadow-lg h-full text-right flex flex-col justify-between items-stretch">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 border-b-2 border-cyan-400 pb-2">סטטיסטיקה</h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat.key} className="flex justify-between items-center text-lg">
                    <span className="text-cyan-100">{cat.label}</span>
                    <span className="font-bold text-cyan-300">{statistics[cat.key] ?? 0}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tabs + Tab content block */}
          <div className="bg-[#18283a] border-2 border-cyan-400 rounded-2xl p-6 shadow-lg mt-6 min-h-[600px]">
            {/* Tabs */}
            <div className="border-b-2 border-cyan-400 flex gap-0 overflow-x-auto" dir="rtl">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={
                    "px-5 py-2 font-bold transition border-2 border-cyan-400 bg-[#16202b] text-cyan-200 hover:bg-cyan-800 hover:text-white shadow border-b-0 rounded-t-lg rounded-b-none rounded-bl-none rounded-br-none " +
                    (activeTab === cat.key
                      ? "bg-cyan-900 bg-[#0a1623] text-white border-b-0 border-b-cyan-300 shadow-lg z-10"
                      : "border-b-2 border-b-cyan-400")
                  }
                  style={{marginLeft: 0, marginRight: 0}}
                  onClick={() => setActiveTab(cat.key)}
                >
                  {cat.label}
                  {statistics[cat.key] !== undefined && (
                    <span className="ml-2 text-xs text-cyan-700 font-bold">({statistics[cat.key]})</span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div>
              {(phenomenon.related[activeTab] && phenomenon.related[activeTab].length > 0) ? (
                <ul className="divide-y divide-cyan-900 text-right" dir="rtl">
                  {phenomenon.related[activeTab].map(item => (
                    <li key={item.id} className="flex items-center py-4 px-2">
                      <span className="font-bold text-cyan-300 mr-2">{item.title}</span>
                      <span className="text-sm text-gray-400 mr-4">(ID: {item.id})</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-gray-400 text-center py-8">אין רשומות להצגה בקטגוריה זו.</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden bg-cyan-900"></div>
    </div>
  );
} 