import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      alert("✅ Login successful!");
      console.log(res.data);

      // You could save token/user in localStorage here if backend returns it
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("❌ Login failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="glass-card shadow-lg p-4">
        <h2 className="text-center mb-4">Welcome Back 🎨</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>

          {/* ✅ Register link */}
          <div className="text-center mt-3">
            <p>
              Don’t have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                <u>Register here</u>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
