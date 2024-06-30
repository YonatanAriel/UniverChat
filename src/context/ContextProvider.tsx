import { createContext, ReactNode, useState } from "react";
import { ContextValue } from "../types/contextValue";
import { useLocalStorage } from "@uidotdev/usehooks";

export const Context = createContext<ContextValue | undefined>(undefined);

function ContextProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState("");
  const [token, setToken] = useLocalStorage<string>("univerChatToken");
  const [localUserId, setLocalUserId] =
    useLocalStorage<string>("univerChatUserId");
  const [userSQLId, setUserSQLId] = useState<number | null>(null);

  const contextValue: ContextValue = {
    userName,
    setUserName,
    localUserId,
    setLocalUserId,
    token,
    setToken,
    userSQLId,
    setUserSQLId,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ContextProvider;
