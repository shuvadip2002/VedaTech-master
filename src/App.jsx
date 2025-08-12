import React from 'react';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Outfit, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, Helvetica, sans-serif',
    }}>
      <div>
        <img src="/logo.png" alt="VedaTech" style={{ width: 80, height: 80, display: 'block', margin: '0 auto 16px' }} />
        <h1 style={{ textAlign: 'center', margin: 0 }}>VedaTech</h1>
        <p style={{ textAlign: 'center', opacity: 0.8 }}>React + Vite starter is working.</p>
      </div>
    </div>
  );
}