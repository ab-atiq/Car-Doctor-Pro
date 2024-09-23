"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { SunIcon } from "./Sun";
import { MoonIcon } from "./Moon";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        onClick={toggleTheme}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <MoonIcon className={`${className} text-white`} />
          ) : (
            <SunIcon className={`${className} text-white`} />
          )
        }
      ></Switch>
      <div className="hidden md:block">
        {theme === "light" ? "Light mode" : "Dark mode"}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
