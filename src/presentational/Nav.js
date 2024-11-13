import React, { useState } from "react";

export default function Nav({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative w-full overflow-hidden dark:bg-black">
      <div className={`${isOpen ? "inline-block" : "hidden"} `}>
        <a href="#contact" className="px-4 ">
          Contact
        </a>
        <a href="#about">About</a>
        {children}
      </div>
      <button className="hover:bg-none" onClick={showMenu}>
        <i className="block p-4 fa fa-bars hover:shadow-sm"></i>
      </button>
    </nav>
  );
}
