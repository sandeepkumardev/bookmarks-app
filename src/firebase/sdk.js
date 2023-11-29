import { initializeApp } from "firebase/app";
import { child, getDatabase, push, ref, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const objName = "categories";

export function addCategoryDB(value) {
  const id = push(child(ref(db), objName)).key;

  set(ref(db, `${objName}/${id}`), {
    name: value,
  });

  return id;
}

export function addBookmarkDB(item) {
  const id = push(child(ref(db), `${objName}/${item.categoryId}`)).key;

  const updates = {};
  updates[`${objName}/${item.categoryId}/bookmarks/${id}`] = item;
  update(ref(db), updates);

  return id;
}
