import React, { useContext } from "react";
import { SelectInputContext } from "../context/SelectInputContext";

export default function Header() {
  const isInputSelected = useContext(SelectInputContext);

  return (
    <header className="flex w-5/6 mx-auto mt-4 text-center">
      <div className="w-full">
        <h1
          className={`mb-8 font-semibold ${
            isInputSelected ? "resize-title" : ""
          } text-8xl font-lcd`}
        >
          The Good Reads
        </h1>
      </div>
    </header>
  );
}
