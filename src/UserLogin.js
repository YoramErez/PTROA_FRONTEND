import React, { useState } from 'react';

export default function UserLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1623]">
      <form onSubmit={handleSubmit} className="bg-[#18283a] p-8 rounded-2xl shadow-lg flex flex-col gap-6 min-w-[320px] border border-cyan-400">
        <h2 className="text-2xl text-cyan-400 font-bold text-center mb-2">כניסת משתמש</h2>
        <input
          type="text"
          placeholder="שם משתמש"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="p-3 rounded-lg border border-cyan-400 bg-[#101e2b] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="password"
          placeholder="סיסמה"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-3 rounded-lg border border-cyan-400 bg-[#101e2b] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button type="submit" className="bg-cyan-400 text-[#0a1623] font-bold rounded-lg p-3 mt-2 hover:bg-cyan-300 transition">התחבר</button>
      </form>
    </div>
  );
} 