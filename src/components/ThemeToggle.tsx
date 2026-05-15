"use client";

import { useTheme } from "@once-ui-system/core";
import type React from "react";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("light");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  const isDark = currentTheme === "dark";
  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    setCurrentTheme(nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
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
