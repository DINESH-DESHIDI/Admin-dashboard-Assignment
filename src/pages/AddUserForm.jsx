import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddUserForm.module.css";
import { useUserContext } from "../context/UserContext";

export default function AddUserForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { addUser } = useUserContext();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (!role.trim()) {
      setError("Role is required");
      return;
    }
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    addUser({ name, role, email });
    setSuccess(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formCard} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={styles.title}>Add User</h2>
        {error && <div className={styles.error}>{error}</div>}
        {success && <div style={{ color: '#16a34a', background: '#dcfce7', borderRadius: '0.375rem', padding: '0.5rem 1rem', textAlign: 'center', marginBottom: '0.5rem', fontWeight: 500 }}>User added successfully!</div>}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Role</label>
          <input
            type="text"
            className={styles.input}
            value={role}
            onChange={e => setRole(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </form>
    </div>
  );
} 