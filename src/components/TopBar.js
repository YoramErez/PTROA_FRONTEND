import React from 'react';
import { MdAdd, MdDelete, MdSearch, MdPeople, MdHistory, MdSettings, MdLogout, MdDashboard, MdMoreVert } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './TopBar.css';
import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

function useCurrentTime() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return now;
}

export default function TopBar({ onCreate, onDelete, onSearch, onLogout }) {
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const settingsRef = useRef();
  const actionsRef = useRef();
  const [settingsMenuPos, setSettingsMenuPos] = useState({top: 0, right: 0, width: 0});
  const [actionsMenuPos, setActionsMenuPos] = useState({top: 0, right: 0, width: 0});
  const now = useCurrentTime();

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e) {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) setSettingsOpen(false);
      if (actionsRef.current && !actionsRef.current.contains(e.target)) setActionsOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Calculate menu position for portal
  useEffect(() => {
    if (settingsOpen && settingsRef.current) {
      const rect = settingsRef.current.getBoundingClientRect();
      setSettingsMenuPos({
        top: rect.bottom + window.scrollY,
        right: window.innerWidth - rect.right,
        width: rect.width
      });
    }
    if (actionsOpen && actionsRef.current) {
      const rect = actionsRef.current.getBoundingClientRect();
      setActionsMenuPos({
        top: rect.bottom + window.scrollY,
        right: window.innerWidth - rect.right,
        width: rect.width
      });
    }
  }, [settingsOpen, actionsOpen]);

  return (
    <div className="topbar-outer">
      <div className="w-full flex flex-row-reverse items-center gap-6 py-[1.35rem] bg-[#101e2b] border-b-[1px] border-[rgba(0,234,255,0.13)] shadow text-right pr-8 pl-8" dir="rtl">
        {/* תאריך ושעה */}
        <div className="mr-auto text-cyan-300 text-lg font-normal select-none flex items-center" style={{direction: 'ltr'}}>
          <span style={{display: 'inline-block', minWidth: 90, textAlign: 'center', fontFamily: 'monospace'}}>
            {now.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
          <span style={{margin: '0 1.2rem', fontWeight: 200, fontSize: '1.3em'}}>|</span>
          {now.toLocaleDateString('he-IL', { year: 'numeric', month: '2-digit', day: '2-digit' })}
        </div>
        {/* קבוצת כפתורים */}
        <div className="flex flex-row-reverse gap-6 pr-12">
          <button className="topbar-btn flex items-center gap-2" onClick={onSearch}>
            <MdSearch size={22} /> חיפוש
          </button>
          <div className="relative" ref={actionsRef}>
            <button className="topbar-btn flex items-center gap-2" onClick={() => setActionsOpen(v => !v)}>
              <MdMoreVert size={22} /> פעולות
            </button>
          </div>
          <div className="relative" ref={settingsRef}>
            <button className="topbar-btn flex items-center gap-2" onClick={() => setSettingsOpen(v => !v)}>
              <MdSettings size={22} /> הגדרות
            </button>
          </div>
        </div>
      </div>
      {/* Portals for dropdowns */}
      {settingsOpen && ReactDOM.createPortal(
        <div className="topbar-dropdown-menu" style={{position: 'absolute', top: settingsMenuPos.top, right: settingsMenuPos.right, minWidth: settingsMenuPos.width, zIndex: 20000}}>
          <button className="topbar-dropdown-item" onClick={() => {navigate('/admin/settings'); setSettingsOpen(false);}}>הגדרות מערכת</button>
          <button className="topbar-dropdown-item" onClick={() => {navigate('/admin/user-management'); setSettingsOpen(false);}}>ניהול משתמשים</button>
          <button className="topbar-dropdown-item" onClick={() => {navigate('/admin/dashboard'); setSettingsOpen(false);}}>דשבורד</button>
          <button className="topbar-dropdown-item" onClick={() => {onLogout && onLogout(); setSettingsOpen(false);}}>התנתק</button>
        </div>,
        document.body
      )}
      {actionsOpen && ReactDOM.createPortal(
        <div className="topbar-dropdown-menu" style={{position: 'absolute', top: actionsMenuPos.top, right: actionsMenuPos.right, minWidth: actionsMenuPos.width, zIndex: 20000}}>
          <button className="topbar-dropdown-item" onClick={() => {onCreate && onCreate(); setActionsOpen(false);}}>הוספת רשומה</button>
          <button className="topbar-dropdown-item" onClick={() => {onDelete && onDelete(); setActionsOpen(false);}}>מחיקת רשומה</button>
        </div>,
        document.body
      )}
    </div>
  );
} 