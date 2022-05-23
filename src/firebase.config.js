import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFlEvIbXfGUIHFdVF6S1DBCySuhZ2zGKU",
  authDomain: "restaurantapp-fc06a.firebaseapp.com",
  databaseURL:
    "https://restaurantapp-fc06a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "restaurantapp-fc06a",
  storageBucket: "restaurantapp-fc06a.appspot.com",
  messagingSenderId: "925803587519",
  appId: "1:925803587519:web:501b66c5260775daf1a30a",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
