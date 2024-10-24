


import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6Iht4XJLHrZDQCVx9D43H7k-m5K5V_uo",
  authDomain: "fir-react-df1b7.firebaseapp.com",
  projectId: "fir-react-df1b7",
  storageBucket: "fir-react-df1b7.appspot.com",
  messagingSenderId: "887559571504",
  appId: "1:887559571504:web:cc1248ac40746bdaa645f5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);