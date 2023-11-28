import { createContext, useState } from "react";

export const AppStore = createContext();

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const addCategory = (value) => {
    setCategories([...categories, value]);
  };

  const addItems = (value) => {
    setItems([...items, value]);
  };

  return (
    <AppStore.Provider value={{ items, addItems, categories, addCategory }}>
      {children}
    </AppStore.Provider>
  );
};
