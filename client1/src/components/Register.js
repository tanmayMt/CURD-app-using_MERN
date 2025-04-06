// src/components/Auth.js
import { useState } from 'react';
import axios from '../api/api.js';

const Register = () => {
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

  return (
    <div>
      <input name="username" placeholder="Username" onChange={handleChange} /><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/>
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      /><br/>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;

