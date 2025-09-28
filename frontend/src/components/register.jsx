import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Register() {
  const [formData, setFormData] = useState({
    userName: "",
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
        "http://localhost:8000/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      alert("✅ Registration successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("❌ Registration failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="glass-card shadow-lg p-4">
        <h2 className="text-center mb-4">Join ArtHub ✨</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

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

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
          <div className="text-center mt-3">
            <p>
              You have an account?{" "}
              <Link to="/login" className="text-decoration-none">
               <u>Login here</u> 
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
