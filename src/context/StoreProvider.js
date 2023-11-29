import { createContext, useEffect, useState } from "react";
import { addBookmarkDB, addCategoryDB, db, objName } from "../firebase/sdk";
import { onValue, ref } from "firebase/database";

export const AppStore = createContext();

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  // console.log(items);

  const addCategory = (value) => {
    const id = addCategoryDB(value);
    setCategories([...categories, { id, name: value }]);
  };

  const addBookmark = (value) => {
    const id = addBookmarkDB(value);
    setItems([...items, { id, ...value }]);
  };

  // useEffect(() => {
  //   onValue(ref(db, objName), (snapshot) => {
  //     const data = snapshot.val();
  //     const dataArr = Object.keys(data).map((key) => ({
  //       ...data[key],
  //       id: key,
  //     }));
  //     setItems(dataArr);
  //   });
  // }, []);

  return (
    <AppStore.Provider value={{ items, addBookmark, categories, addCategory }}>
      {children}
    </AppStore.Provider>
  );
};
