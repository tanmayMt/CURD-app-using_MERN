import { useState } from 'react';
import axios from '../api/api.js';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
      <input name="email" placeholder="Email" onChange={handleChange} /><br/>
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      /><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
