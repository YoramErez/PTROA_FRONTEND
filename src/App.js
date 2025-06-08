import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import './App.css';
import './MainScreen.css';
import CategoryScreen from './CategoryScreen';
import { MdFolder, MdImage, MdVideocam, MdAudiotrack, MdDescription, MdLibraryBooks, MdMap, MdReport, MdBarChart, MdTrackChanges } from 'react-icons/md';
import bgImg from './assets/blue-back.webp';
import logoImg from './assets/logo.webp';
import AdminLogin from './AdminLogin';
import AdminLayout from './AdminLayout';
import TailwindTest from './TailwindTest';
import UserLogin from './UserLogin';

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

// נתוני דמה לדוגמה
const dummyItems = {
  publications: [
    { id: 'pub1', title: 'כתבה על סחר בבעלי חיים', summary: 'תקציר מהבינה המלאכותית...' },
    { id: 'pub2', title: 'חשיפת רשת קרבות כלבים', summary: 'AI: רשת קרבות כלבים נחשפה בדרום הארץ...' },
  ],
  images: [
    { id: 'img1', title: 'תמונה מזירת האירוע', summary: 'תמונה שצולמה בזירת האירוע.' },
  ],
  // ... אפשר להוסיף נתוני דמה לכל קטגוריה
};

function MainScreen({ onLogout }) {
  const navigate = useNavigate();
  return (
    <div
      className="main-root"
      style={{
        background: `url(${bgImg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img src={logoImg} alt="לוגו הארגון" className="main-logo-bg" />
      <header className="main-header">
        <span className="system-name">NIGMA</span>
        <span className="page-title">מסך ראשי</span>
        {onLogout && (
          <button
            onClick={onLogout}
            style={{ marginRight: 24, background: '#00eaff', color: '#0a1623', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 8px #00eaff88' }}
          >
            התנתק
          </button>
        )}
      </header>
      <div className="categories-grid">
        {categories.map(cat => (
          <div
            className="category-card"
            key={cat.key}
            onClick={() => navigate(`/category/${cat.key}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className="category-icon">{cat.icon}</div>
            <div className="category-label">{cat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Placeholder components for admin categories
const Placeholder = ({ title }) => (
  <div className="text-2xl text-[#00eaff] text-center mt-20">{title}</div>
);

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<UserLogin onLogin={() => setUserLoggedIn(true)} />} />
        <Route
          path="/"
          element={
            userLoggedIn ? (
              <MainScreen onLogout={() => setUserLoggedIn(false)} />
            ) : (
              <UserLogin onLogin={() => setUserLoggedIn(true)} />
            )
          }
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Placeholder title="Dashboard" />} />
          <Route path="/admin/phenomena" element={<Placeholder title="תופעות" />} />
          <Route path="/admin/images" element={<Placeholder title="תמונות" />} />
          <Route path="/admin/videos" element={<Placeholder title="וידאו" />} />
          <Route path="/admin/audio" element={<Placeholder title="אודיו" />} />
          <Route path="/admin/maps" element={<Placeholder title="מפות" />} />
          <Route path="/admin/publications" element={<Placeholder title="פרסומים" />} />
          <Route path="/admin/documents" element={<Placeholder title="מסמכים" />} />
          <Route path="/admin/reports" element={<Placeholder title="דיווחים" />} />
          <Route path="/admin/statistics" element={<Placeholder title="סטטיסטיקה" />} />
          <Route path="/admin/queries" element={<Placeholder title="שאילתות" />} />
          <Route path="/admin/targets" element={<Placeholder title="יעדים" />} />
          <Route path="/admin/animal-law" element={<Placeholder title="חוק צער בעלי חיים" />} />
          <Route path="/admin/user-management" element={<Placeholder title="ניהול משתמשים" />} />
          <Route path="/admin/audit-log" element={<Placeholder title="יומן פעילות" />} />
          <Route path="/admin/settings" element={<Placeholder title="הגדרות מערכת" />} />
        </Route>
        {categories.map(cat => (
          <Route
            key={cat.key}
            path={`/category/${cat.key}`}
            element={
              <CategoryScreen
                title={cat.label}
                icon={cat.icon}
                items={dummyItems[cat.key] || []}
              />
            }
          />
        ))}
        <Route path="/test" element={<TailwindTest />} />
      </Routes>
    </Router>
  );
}

export default App;
