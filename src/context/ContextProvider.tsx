import { createContext, ReactNode, useState } from "react";
import { ContextValue } from "../types/contextValue";
import { useLocalStorage } from "@uidotdev/usehooks";

export const Context = createContext<ContextValue | undefined>(undefined);

function ContextProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useLocalStorage<string>("univerChatUserId");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const contextValue: ContextValue = {
    userName,
    setUserName,
    userId,
    setUserId,
    isLoggedIn,
    setIsLoggedIn,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider;
