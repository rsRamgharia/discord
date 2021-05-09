import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKfIgF-KyxYw5I1ocny4dwEXZVHAINyac",
  authDomain: "discord-clone-6f31c.firebaseapp.com",
  projectId: "discord-clone-6f31c",
  storageBucket: "discord-clone-6f31c.appspot.com",
  messagingSenderId: "187771558005",
  appId: "1:187771558005:web:e4fecfa30bec00f7adc03c",
  measurementId: "G-EHJEYPHS8E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
