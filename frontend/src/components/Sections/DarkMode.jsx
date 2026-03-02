import { useEffect, useState } from "react";
import LightButton from "/website/light-mode-button.png";
import DarkButton from "/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={theme === "light" ? LightButton : DarkButton}
        alt="Theme Button"
        className="w-12 cursor-pointer duration-300 transform hover:scale-110 drop-shadow-sm"
      />
    </div>
  );
};

export default DarkMode;
