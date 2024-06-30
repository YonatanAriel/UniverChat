export type ContextValue = {
  userName: string;
  setUserName: (value: string) => void;
  localUserId: string;
  setLocalUserId: (value: string) => void;
  token: string;
  setToken: (value: string) => void;
  userSQLId: number | null;
  setUserSQLId: (value: number) => void;
};
