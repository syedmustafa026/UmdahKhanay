import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl7a5mY0cYtu63cj1VeTqJQQbYgj3aOhk",
  authDomain: "umdahkhanay.firebaseapp.com",
  projectId: "umdahkhanay",
  storageBucket: "umdahkhanay.appspot.com",
  messagingSenderId: "891644361650",
  appId: "1:891644361650:web:004c41a3e1d8a17a79c2ab"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

