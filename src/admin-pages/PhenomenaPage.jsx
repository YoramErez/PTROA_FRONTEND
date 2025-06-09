import React, { useState } from 'react';
import '../styles/Categories.css';

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
    <div className="page-container">
      {/* Header + Create Button */}
      <div className="page-header">
        <h1 className="page-title">תופעה: {phenomenon.name}</h1>
      </div>

      {/* Modal for creating phenomenon */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2 className="modal-title">צור תופעה חדשה</h2>
            <input
              type="text"
              placeholder="שם התופעה"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              className="modal-input"
            />
            <div className="modal-buttons">
              <button
                className="modal-button modal-button-primary"
                onClick={() => { setShowModal(false); setNewName(''); }}
              >
                אישור
              </button>
              <button
                className="modal-button modal-button-secondary"
                onClick={() => setShowModal(false)}
              >
                ביטול
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="main-content">
        {/* Main content */}
        <div className="content-wrapper">
          {/* Description + Statistics side by side */}
          <div className="description-section">
            <div className="description-container">
              <div className="description-content">
                <div className="description-title-block">אפיון תופעה</div>
                <textarea
                  className="description-textarea no-top-radius"
                  placeholder="כאן ייכנס הסבר ארוך על התופעה..."
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                  dir="rtl"
                />
              </div>
              {/* בלוק מידע על תאריכים */}
              <div className="info-block">
                <div className="info-item">
                  <span>עודכן בתאריך:</span>
                  <span className="info-value">{updatedAt}</span>
                  <span>בשעה</span>
                  <span className="info-value">{updatedTime}</span>
                  <span>ע"י</span>
                  <span className="info-value">{updatedBy}</span>
                </div>
                <div className="info-item">
                  <span>נוסף בתאריך:</span>
                  <span className="info-value">{createdAt}</span>
                  <span>בשעה</span>
                  <span className="info-value">{createdTime}</span>
                  <span>ע"י</span>
                  <span className="info-value">{createdBy}</span>
                </div>
              </div>
            </div>
            <div style={{width: '250px', minWidth: '180px'}}>
              <div className="statistics-title-block">סטטיסטיקה</div>
              <div className="statistics-content-block">
                <ul className="statistics-list">
                  {categories.map(cat => (
                    <li key={cat.key} className="statistics-item">
                      <span className="statistics-label">{cat.label}</span>
                      <span className="statistics-value">{statistics[cat.key] ?? 0}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tabs + Tab content block */}
          <div style={{marginTop: '1rem'}}>
            <div className="relations-title-block">קשרים</div>
            <div className="relations-content-block">
              {/* Tabs */}
              <div className="tabs-container">
                {categories.map(cat => (
                  <button
                    key={cat.key}
                    className={`tab-button ${activeTab === cat.key ? 'active' : ''}`}
                    onClick={() => setActiveTab(cat.key)}
                  >
                    {cat.label}
                    {statistics[cat.key] !== undefined && (
                      <span className="tab-count">({statistics[cat.key]})</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="tab-content">
                {(phenomenon.related[activeTab] && phenomenon.related[activeTab].length > 0) ? (
                  <ul className="tab-list">
                    {phenomenon.related[activeTab].map(item => (
                      <li key={item.id} className="tab-list-item">
                        <span className="tab-list-title">{item.title}</span>
                        <span className="tab-list-id">(ID: {item.id})</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="empty-tab-message">אין רשומות להצגה בקטגוריה זו.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 