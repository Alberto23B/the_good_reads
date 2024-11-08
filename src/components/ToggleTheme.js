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
      throw Error("invalid theme");
    }
  }, [theme]);

  const handleChange = (e) => {
    dispatch({ type: `to${e.target.value}` });
  };

  return (
    <select onChange={handleChange} className="bg-slate-400 dark:bg-slate-600">
      <option key={1} value={"Light"}>
        Light
      </option>
      <option key={2} value={"Dark"}>
        Dark
      </option>
    </select>
  );
}
