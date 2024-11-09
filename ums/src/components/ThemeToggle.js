import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(UserContext);
  return (
    <button
      className={`px-4 py-2 border rounded transition duration-200 my-4 ${
        theme === "light"
          ? "bg-gray-900  hover:bg-gray-600 text-white"
          : "bg-white  hover:bg-gray-300 text-black"
      }`}
      onClick={toggleTheme}
    >
      Choose {theme === "light" ? "Dark" : "Light"} theme
    </button>
  );
}

export default ThemeToggle;
