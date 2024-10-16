import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../types/api/user";

type loginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: (loginUser & { isAdmin: boolean }) | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType);

export const LoginUserProvider = (props: {children: ReactNode}) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);


  return (
    <LoginUserContext.Provider value={{loginUser, setLoginUser}}>
      {children}
    </LoginUserContext.Provider>
  );
}
