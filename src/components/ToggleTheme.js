import React from "react";
import { ThemeDispatchContext, ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect } from "react";

export default function ToggleTheme() {
  const dispatch = useContext(ThemeDispatchContext);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "light") {
      localStorage.setItem("theme", theme);
      document.querySelector("body")?.classList.remove("dark");
    } else if (theme === "dark") {
      localStorage.setItem("theme", theme);
      document.querySelector("body")?.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleChange = (e) => {
    dispatch({ type: `to${e.target.value}` });
  };

  return (
    <>
      <label htmlFor="theme" className="pl-4">
        Theme:
      </label>
      <select
        className="ml-2 mr-4 dark:bg-cadet"
        id="theme"
        onChange={handleChange}
      >
        <option key={1} selected={theme === "light"} value={"Light"}>
          Light
        </option>
        <option key={2} selected={theme === "dark"} value={"Dark"}>
          Dark
        </option>
      </select>
    </>
  );
}
