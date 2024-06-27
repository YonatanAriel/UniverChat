export type ContextValue = {
  userName: string;
  setUserName: (value: string) => void;
  userId: string;
  setUserId: (value: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};
