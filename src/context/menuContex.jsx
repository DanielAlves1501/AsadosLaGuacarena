import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

const GlobalProvider = ({ children, value }) => {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
export default GlobalProvider;
