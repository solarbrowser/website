"use client";
import React, { useEffect, useState } from "react";

const getGridColors = (isDark: boolean) => ({
  color: isDark ? "#23272f" : "#e9ecef",
  opacity: isDark ? 0.13 : 0.09,
});

const GridBackground: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const { color, opacity } = getGridColors(isDark);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full z-[-1] pointer-events-none select-none"
      style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 94%, ${color} 94%, ${color} 100%),
          linear-gradient(90deg, transparent 94%, ${color} 94%, ${color} 100%)
        `,
        backgroundSize: "120px 120px",
        backgroundPosition: "center center",
        opacity,
        transition: "background-color 0.3s, opacity 0.3s",
      }}
    />
  );
};

export default GridBackground;
