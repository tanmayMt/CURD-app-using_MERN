import { useState } from 'react';
import axios from '../api/api.js';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/users/register', form);
      alert(`✅ ${res.data.message || 'Registered Successfully'}`);
      setForm({ username: '', email: '', password: '' });
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || '❌ Registration Failed';
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      autoComplete="on"
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '30px',
        backgroundColor: "blue",
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'darkorange' }}>🚀 Register</h2>

      <input
        name="username"
        placeholder="👤 Username"
        value={form.username}
        onChange={handleChange}
        required
        style={inputStyle}
      />

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
        autoComplete="new-password"
        style={inputStyle}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          ...buttonStyle,
          backgroundColor: loading ? '#ccc' : '#4CAF50',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Registering...' : 'Register'}
      </button>
        <p style={{ textAlign: 'center', marginTop: '18px', fontSize: '14px', color: '#e0e0e0' }}>
          <b>Already have an account?{' '}</b>
          <a href="/login" style={{ color: '#FFD700', textDecoration: 'underline' }}>
            <b>Login</b>
          </a>
        </p>
    </form>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '16px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  marginTop: '15px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#4CAF50',
  color: 'white',
  fontSize: '16px',
  transition: 'background-color 0.3s'
};

export default Register;
