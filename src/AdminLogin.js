import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin-panel');
  };

  return (
    <div className="admin-login-root" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a1623' }}>
      <form className="admin-login-form" onSubmit={handleSubmit} style={{ background: '#18283a', padding: 32, borderRadius: 12, boxShadow: '0 0 24px #00eaff33', minWidth: 320 }}>
        <h2 style={{ color: '#00eaff', marginBottom: 24, textAlign: 'center' }}>Admin Login</h2>
        <input
          type="email"
          placeholder="Email (דמה)"
          style={{ width: '100%', marginBottom: 16, padding: 12, borderRadius: 8, border: '1px solid #00eaff', background: '#101e2b', color: '#fff' }}
        />
        <input
          type="password"
          placeholder="Password (דמה)"
          style={{ width: '100%', marginBottom: 16, padding: 12, borderRadius: 8, border: '1px solid #00eaff', background: '#101e2b', color: '#fff' }}
        />
        <button
          type="submit"
          style={{ width: '100%', padding: 12, borderRadius: 8, background: '#00eaff', color: '#0a1623', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 0 8px #00eaff88' }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin; 