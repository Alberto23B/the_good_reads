// TODO: PASSARE DA USESTATE A USEREDUCER
// (PERCHè SENNO' NON POSSO MODIFICARE LO STATO DA SWITCHLIST)

import { createContext, useState } from "react";
export const DisplayContext = createContext(null);
export const setDisplayContext = createContext(null);

export function DisplayContextProvider({ children }) {
  const [display, setDisplay] = useState("icon");

  return (
    <DisplayContext.Provider value={display}>
      <setDisplayContext.Provider value={setDisplay}>
        {children}
      </setDisplayContext.Provider>
    </DisplayContext.Provider>
  );
}
