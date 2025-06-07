import React, { useState } from 'react';
import Login from './Login';
import './App.css';
import './MainScreen.css';
import { MdFolder, MdImage, MdVideocam, MdAudiotrack, MdDescription, MdLibraryBooks, MdMap, MdReport, MdBarChart, MdTrackChanges } from 'react-icons/md';

const categories = [
  { key: 'cases', label: 'תיקי תופעה', icon: <MdFolder /> },
  { key: 'images', label: 'תמונות', icon: <MdImage /> },
  { key: 'video', label: 'וידאו', icon: <MdVideocam /> },
  { key: 'audio', label: 'אודיו', icon: <MdAudiotrack /> },
  { key: 'docs', label: 'מסמכים', icon: <MdDescription /> },
  { key: 'publications', label: 'פרסומים', icon: <MdLibraryBooks /> },
  { key: 'maps', label: 'מפות', icon: <MdMap /> },
  { key: 'reports', label: 'דיווחים', icon: <MdReport /> },
  { key: 'stats', label: 'סטטיסטיקה', icon: <MdBarChart /> },
  { key: 'targets', label: 'יעדים', icon: <MdTrackChanges /> },
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
