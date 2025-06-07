import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleFirstStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <img src="/logo192.png" alt="לוגו הארגון" className="logo" />
      {step === 1 && (
        <form onSubmit={handleFirstStep}>
          <input
            type="text"
            placeholder="שם משתמש"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="סיסמה"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">שלח!</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSendCode}>
          <input
            type="tel"
            placeholder="מספר טלפון"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <button type="submit">שלח קוד</button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="הזן קוד שקיבלת"
            value={otp}
            onChange={e => setOtp(e.target.value)}
          />
          <button type="submit">אמת</button>
        </form>
      )}
    </div>
  );
}

export default Login; 