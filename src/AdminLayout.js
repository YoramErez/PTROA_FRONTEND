import React from 'react';
import TopBar from './components/TopBar';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';
import bgImg from './assets/blue-back.webp';
import logoImg from './assets/logo.webp';

export default function AdminLayout() {
  return (
    <div 
      className="flex min-h-screen"
      style={{
        background: `url(${bgImg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 234, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 234, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <img 
        src={logoImg} 
        alt="לוגו הארגון" 
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '1200px',
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <AdminSidebar />
      <main className="flex-1 ml-80 p-8 relative z-10">
        <TopBar />
        <Outlet />
      </main>
    </div>
  );
} 