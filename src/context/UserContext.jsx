import React, { createContext, useContext, useState } from "react";
import initialUsers from "../data/users.json";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState(
    initialUsers.map((u, i) => ({ ...u, role: i % 2 === 0 ? "Admin" : "User" }))
  );

  const addUser = (user) => {
    setUsers((prev) => [
      ...prev,
      { ...user, id: Date.now(), email: `${user.name.toLowerCase()}@demo.com` },
    ]);
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
} 