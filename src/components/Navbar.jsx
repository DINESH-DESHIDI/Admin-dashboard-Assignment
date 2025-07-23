import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Fullstack Dashboard</div>
      <div className={styles.navLinks}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${'active'}` : styles.link} end>Login</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? `${styles.link} ${'active'}` : styles.link}>Dashboard</NavLink>
        <NavLink to="/add-user" className={({ isActive }) => isActive ? `${styles.link} ${'active'}` : styles.link}>Add User</NavLink>
      </div>
    </nav>
  );
} 