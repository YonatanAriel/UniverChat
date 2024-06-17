import { createContext, ReactNode, useState } from "react";
import { ContextValue } from "../types/contextValue";

export const Context = createContext<ContextValue | undefined>(undefined);

function ContextProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const contextValue: ContextValue = { name, setName, userId, setUserId };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider;
