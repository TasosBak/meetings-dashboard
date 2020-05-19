import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDTjmobTertUZbAxhQ3Z0mTXuMVwvXcJfo",
  authDomain: "dashboard-3a215.firebaseapp.com",
  databaseURL: "https://dashboard-3a215.firebaseio.com",
  projectId: "dashboard-3a215",
  storageBucket: "dashboard-3a215.appspot.com",
  messagingSenderId: "634574291162",
  appId: "1:634574291162:web:98e12c63b32682da5165e3",
  measurementId: "G-G9P38RX2KE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
