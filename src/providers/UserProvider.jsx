import {Children, createContext} from 'react';

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const {Children} = props;
  const contextName = 'UserProvider';
  return (
    <UserContext.Provider value={{ contextName }}>
      {Children}
    </UserContext.Provider>
  );
}
