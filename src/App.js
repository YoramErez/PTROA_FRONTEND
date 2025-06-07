import React, { useState } from 'react';
import Login from './Login';
import './App.css';
import './MainScreen.css';

const categories = [
  { key: 'cases', label: 'תיקי תופעה', icon: '📁' },
  { key: 'images', label: 'תמונות', icon: '🖼️' },
  { key: 'video', label: 'וידאו', icon: '🎥' },
  { key: 'audio', label: 'אודיו', icon: '🎧' },
  { key: 'docs', label: 'מסמכים', icon: '📄' },
  { key: 'publications', label: 'פרסומים', icon: '📰' },
  { key: 'maps', label: 'מפות', icon: '🗺️' },
  { key: 'reports', label: 'דיווחים', icon: '📝' },
  { key: 'stats', label: 'סטטיסטיקה', icon: '📊' },
  { key: 'targets', label: 'יעדים', icon: '🎯' },
];

function MainScreen() {
  return (
    <div className="main-root">
      <header className="main-header">
        <span className="system-name">NIGMA</span>
        <span className="page-title">מסך ראשי</span>
      </header>
      <div className="categories-grid">
        {categories.map(cat => (
          <div className="category-card" key={cat.key}>
            <div className="category-icon">{cat.icon}</div>
            <div className="category-label">{cat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? <MainScreen /> : <Login onLogin={() => setLoggedIn(true)} />;
}

export default App;
