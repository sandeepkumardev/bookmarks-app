import { createContext, useState } from "react";

export const AppStore = createContext();

export const StoreProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [categories, setCategories] = useState([]);

  const addBookmark = (value) => {
    setBookmarks([...bookmarks, value]);
  };

  const addCategory = (value) => {
    setCategories([...categories, value]);
  };

  console.log(bookmarks, categories);

  return (
    <AppStore.Provider
      value={{ bookmarks, categories, addBookmark, addCategory }}
    >
      {children}
    </AppStore.Provider>
  );
};
