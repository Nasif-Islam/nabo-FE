import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Nasif",
    name: "Nasif Islam",
    avatar_url: "https://avatars.githubusercontent.com/u/178942734?v=4",
  });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
