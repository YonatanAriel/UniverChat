import { createContext, ReactNode, useEffect, useState } from "react";
import { ContextValue } from "../types/contextValue";
import { useLocalStorage } from "@uidotdev/usehooks";

export const Context = createContext<ContextValue | undefined>(undefined);

function ContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useLocalStorage<string | null>("univerChatToken");
  const [userId, setUserId] = useLocalStorage<number | string | null>(
    "univerChatUserId"
  );
  const [userName, setUserName] = useLocalStorage<string | null>(
    "univerChatUserName"
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(
    token ? true : false
  );

  // const [messages, setMesages] = useState([]);

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
