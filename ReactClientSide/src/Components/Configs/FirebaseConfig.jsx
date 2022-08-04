// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getDatabase, ref } from "firebase/database";

// Pred DB Initialize Firebase
const FirebaseConfig = {
// <INIT FIREBASE CONFIG HERE>
};

// (1) Chat DB Initialize Firebase

const app = initializeApp(FirebaseConfig);
const analytics = getAnalytics(app);

export const FireBaseDB = getFirestore(app);
 const RealTimeDB = getDatabase(app);

export const getRealTimeDBRef = (path) => {
  return ref(RealTimeDB, path);
};
