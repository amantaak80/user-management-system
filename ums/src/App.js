import React from "react";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import UserTable from "./components/UserTable";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="flex flex-col items-center">
        <ThemeToggle />
        <UserTable />
      </div>
    </UserProvider>
  );
}

export default App;
