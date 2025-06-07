import React, { useState } from 'react';
import './Login.css';
import bgImg from './assets/blue-back.webp';
import logoImg from './assets/logo.webp';

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
    <div
      className="login-container"
      style={{
        background: `url(${bgImg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img src={logoImg} alt="לוגו הארגון" className="main-logo-bg" />
      <div className="login-content-over-logo">
        <div className="nigma-title">NIGMA</div>
        <div className="login-frame">
          <div className="login-note">בשלב זה המערכת פתוחה. אין צורך להזין נתונים.</div>
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
      </div>
    </div>
  );
}

export default Login; 