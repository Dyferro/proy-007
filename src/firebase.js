// Import the functions you need from the SDKs you need
import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaj7ibHVYRjGx_XcVomjkVLLjiE-JRDpo",
  authDomain: "crud-firestone-87ba2.firebaseapp.com",
  projectId: "crud-firestone-87ba2",
  storageBucket: "crud-firestone-87ba2.appspot.com",
  messagingSenderId: "659303484857",
  appId: "1:659303484857:web:a8bfe9b9272b5aebacba68",
};

// Initialize Firebase
app.initializeApp(firebaseConfig);
//Initialize database
const db = app.firestore();

const auth = app.auth();

export { db, auth };
