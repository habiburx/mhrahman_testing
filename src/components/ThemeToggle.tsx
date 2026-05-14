"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@once-ui-system/core";
import { HiSun, HiMoon } from "react-icons/hi2";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, [theme]);

  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="theme-toggle-btn"
      style={{
        color: isDark ? "#ffffff" : "#000000",
        transform: hovered ? "rotate(20deg)" : "rotate(0deg)",
      }}
    >
      {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
    </button>
  );
};
