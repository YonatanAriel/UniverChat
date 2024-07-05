import { createContext, ReactNode, useEffect, useState } from "react";
import { ContextValue } from "../types/contextValue";
import { useLocalStorage } from "@uidotdev/usehooks";

export const Context = createContext<ContextValue | undefined>(undefined);

function ContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useLocalStorage<string | null>("univerChatToken");
  const [userId, setUserId] = useLocalStorage<number | string | null>(
    "univerChatUserId"
  );
  const [userName, setUserName] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(
    token ? true : false
  );

  useEffect(() => {
    const isTokenExist = !!token;
    setIsUserLoggedIn(isTokenExist);
  }, [token]);

  const contextValue: ContextValue = {
    userName,
    setUserName,
    userId,
    setUserId,
    token,
    setToken,
    isUserLoggedIn,
    setIsUserLoggedIn,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider;
