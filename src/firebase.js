import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM2TB77tHspIITyyIz1_3vSFoNDJ86uE4",

  authDomain: "netflix-cloned-pr.firebaseapp.com",
  projectId: "netflix-cloned-pr",
  storageBucket: "netflix-cloned-pr.appspot.com",
  messagingSenderId: "545399712479",
  appId: "1:545399712479:web:1f854bbb8587527e5c576a",
  measurementId: "G-VBB24L4NCQ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth };
export default db;
