import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN22hllEQSsLcCq4lTVJFahsRkh7YBVRE",
  authDomain: "asadoslagu.firebaseapp.com",
  projectId: "asadoslagu",
  storageBucket: "asadoslagu.appspot.com",
  messagingSenderId: "1028685078206",
  appId: "1:1028685078206:web:5682fb647bb00a048208ef",
  measurementId: "G-VW8FMN2WY9",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
