import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useUserContext } from "../context/UserContext";

export default function Dashboard() {
  const { users, deleteUser } = useUserContext();

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.headerRow}>
        <div className={styles.title}>User Dashboard</div>
        <Link to="/add-user" className={styles.addUserLink}>
          + Add User
        </Link>
      </div>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", color: "#b91c1c", fontWeight: 500 }}>
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className={styles.editBtn}>
                    Edit
                  </button>
                  <button className={styles.deleteBtn} onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
} 