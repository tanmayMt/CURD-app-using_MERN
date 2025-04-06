// src/components/Auth.js
import { useState } from 'react';
import axios from '../api/api.js';

const Auth = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      await axios.post('/users/register', form);
      alert('✅ Registered Successfully');
    } catch (err) {
      console.error(err);
      alert('❌ Registration Failed');
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('/users/login', {
        email: form.email,
        password: form.password,
      });
      localStorage.setItem('token', res.data.token);
      alert('✅ Logged In');
    } catch (err) {
      console.error(err);
      alert('❌ Login Failed');
    }
  };

  return (
    <div>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
