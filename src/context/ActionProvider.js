import { createContext, useState } from "react";

export const AppActions = createContext();

export const ActionProvider = ({ children }) => {
  const [isBmOpen, setIsBmOpen] = useState(false);
  const [isCtOpen, setIsCtOpen] = useState(false);

  const bmModalHandler = () => {
    setIsBmOpen(!isBmOpen);
  };

  const ctModalHandler = () => {
    setIsCtOpen(!isCtOpen);
  };

  return (
    <AppActions.Provider
      value={{ isBmOpen, bmModalHandler, isCtOpen, ctModalHandler }}
    >
      {children}
    </AppActions.Provider>
  );
};
