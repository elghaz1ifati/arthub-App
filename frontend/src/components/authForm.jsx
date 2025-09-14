// src/AuthForm.js
import React, { useState } from 'react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert(`Logging in: ${formData.username}`);
    } else {
      alert(`Registering: ${formData.username} (${formData.email})`);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="glass-card shadow-lg p-4">
        <h2 className="text-center mb-4">{isLogin ? 'Welcome Back 🎨' : 'Join ArtHub ✨'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <hr className="my-4" />
        <div className="text-center">
          <button className="btn btn-link text-light" onClick={toggleForm}>
            {isLogin ? 'New to ArtHub? Register here' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
