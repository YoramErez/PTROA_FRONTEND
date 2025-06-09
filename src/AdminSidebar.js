import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { MdDashboard, MdSearch, MdBarChart, MdLibraryBooks, MdMap, MdAudiotrack, MdVideocam, MdImage, MdDescription, MdReport, MdTrackChanges, MdPets, MdHistory, MdLogout } from 'react-icons/md';
import './AdminSidebar.css';
import nigmaLogo from './assets/Nigma-logo.webp';

const categories = [
  // { label: 'Dashboard', path: '/admin/dashboard', icon: <MdDashboard size={22} /> },
  { label: 'תופעות', path: '/admin/phenomena', icon: <MdPets size={22} /> },
  { label: 'תמונות', path: '/admin/images', icon: <MdImage size={22} /> },
  { label: 'וידאו', path: '/admin/videos', icon: <MdVideocam size={22} /> },
  { label: 'אודיו', path: '/admin/audio', icon: <MdAudiotrack size={22} /> },
  { label: 'מפות', path: '/admin/maps', icon: <MdMap size={22} /> },
  { label: 'פרסומים', path: '/admin/publications', icon: <MdLibraryBooks size={22} /> },
  { label: 'מסמכים', path: '/admin/documents', icon: <MdDescription size={22} /> },
  { label: 'דיווחים', path: '/admin/reports', icon: <MdReport size={22} /> },
  { label: 'סטטיסטיקה', path: '/admin/statistics', icon: <MdBarChart size={22} /> },
  { label: 'שאילתות', path: '/admin/queries', icon: <MdSearch size={22} /> },
  { label: 'יעדים', path: '/admin/targets', icon: <MdTrackChanges size={22} /> },
  { label: 'חוק צער בעלי חיים', path: '/admin/animal-law', icon: <MdPets size={22} /> },
];

export default function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // כאן אפשר להוסיף לוגיקה של ניקוי טוקנים/סשן אם צריך
    navigate('/admin-login');
  };

  return (
    <aside className="admin-sidebar">
      <Link to="/admin/dashboard" className="admin-sidebar-header">
        <span style={{fontSize: '2.7rem', fontWeight: 'bold'}}>NIGMA</span>
        <img src={nigmaLogo} alt="Nigma Logo" style={{height: 60, marginRight: 18, verticalAlign: 'middle'}} />
      </Link>
      <nav className="admin-sidebar-nav">
        <div className="admin-sidebar-section-title">קטגוריות</div>
        {categories.map(cat => (
          <NavLink
            key={cat.path}
            to={cat.path}
            className={({ isActive }) =>
              `admin-sidebar-link ${isActive ? 'active' : ''}`
            }
            end
          >
            {cat.icon}
            <span>{cat.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
} 