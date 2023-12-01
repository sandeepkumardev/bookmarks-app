import { createContext, useEffect, useState } from "react";
import { addBookmarkDB, addCategoryDB, db, objName } from "../firebase/sdk";
import { onValue, ref } from "firebase/database";

export const AppStore = createContext();

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addCategory = (value) => {
    addCategoryDB(value);
  };

  const addBookmark = (value) => {
    addBookmarkDB(value);
  };

  // to get real-time data
  useEffect(() => {
    onValue(ref(db, objName), (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setItems([]);
        return;
      }

      const dataArr = Object.keys(data).map((key) => ({
        ...data[key],
        id: key,
      }));
      setItems(dataArr);
    });
  }, []);

  return (
    <AppStore.Provider value={{ items, addBookmark, addCategory }}>
      {children}
    </AppStore.Provider>
  );
};
