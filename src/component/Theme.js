import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Theme = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
        height: "100vh", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
      }}
    >
      <p>The current theme is {isDarkTheme ? "Dark" : "Light"}.</p>
    </div>
  );
};

export default Theme;
