export type ContextValue = {
  userName: string;
  setUserName: (value: string) => void;
  token: string | null;
  setToken: (value: string | null) => void;
  userId: number | string | null;
  setUserId: (value: number | string | null) => void;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (value: boolean) => void;
};
