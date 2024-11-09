import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");
  /* This is the function help use to get users data */
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Errors :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <UserContext.Provider value={{ users, theme, toggleTheme, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
