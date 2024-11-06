import React from "react";
import list from "../img/list_view.svg";
import icons from "../img/icons_view.svg";
import { useContext } from "react";
import { setDisplayContext, DisplayContext } from "../context/DisplayContext";

export default function SwitchList() {
  const display = useContext(DisplayContext);
  const setDisplay = useContext(setDisplayContext);

  const handleClick = () => {};

  return (
    <>
      <button
        className="w-24 px-4 m-2 text-white rounded-md h-fit bg-zinc-600"
        onClick={handleClick}
      >
        <img
          className="h-6 m-auto"
          src={display === "icons" ? icons : list}
          alt="result view toggle"
        />
      </button>
    </>
  );
}
