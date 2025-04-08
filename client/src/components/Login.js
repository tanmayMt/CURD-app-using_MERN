import { useState } from 'react';
import axios from '../api/api.js';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    try {
      const res = await axios.post('/users/login', form);
      localStorage.setItem('token', '435435435mfghfh');
      // localStorage.setItem('token', res.data.token);
      alert('✅ Logged In');
    } catch (err) {
      console.error(err);
      alert('❌ Login Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      autoComplete="on"
      style={{
        maxWidth: '400px',
        margin: '60px auto',
        padding: '35px',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        borderRadius: '15px',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Segoe UI, sans-serif',
        color: 'white'
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#FFD700', marginBottom: '20px' }}>
        ✨ Login to Your Account ✨
      </h2>

      <input
        name="email"
        type="email"
        placeholder="📧 Email"
        value={form.email}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        name="password"
        type="password"
        placeholder="🔒 Password"
        value={form.password}
        onChange={handleChange}
        required
        autoComplete="current-password"
        style={inputStyle}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          ...buttonStyle,
          backgroundColor: loading ? '#888' : '#00c9a7',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Please Wait...' : '🚀 Login'}
      </button>

      <p style={{ textAlign: 'center', marginTop: '18px', fontSize: '14px', color: '#e0e0e0' }}>
        <b>Don't have an account?{' '}</b>
        <a href="/register" style={{ color: '#FFD700', textDecoration: 'underline' }}>
          <b>Register</b>
        </a>
      </p>
    </form>
  );
};

// Styles
const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  margin: '10px 0',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  boxSizing: 'border-box',
  outline: 'none',
  backgroundColor: '#f9f9f9',
  color: '#333'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  marginTop: '20px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#00c9a7',
  color: 'white',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  fontWeight: 'bold'
};

export default Login;
