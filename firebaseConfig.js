import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCDdkCsoMY6idUZR8SHBTMb7TIXCS4grGo",
  authDomain: "gratis-1d2a0.firebaseapp.com",
  projectId: "gratis-1d2a0",
  storageBucket: "gratis-1d2a0.appspot.com",
  messagingSenderId: "176564361019",
  appId: "1:176564361019:web:57aac039ac381e3a42091e",
  measurementId: "G-D0MN2S909H",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

//Initialize database
export const db = getDatabase(app);
