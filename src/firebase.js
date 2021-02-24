import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2BpT8PIPODJKTw6MIyRQ6KrLj8nD50iU",
  authDomain: "facebook-messenger-clone-9ed5a.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-9ed5a.firebaseio.com",
  projectId: "facebook-messenger-clone-9ed5a",
  storageBucket: "facebook-messenger-clone-9ed5a.appspot.com",
  messagingSenderId: "917765847499",
  appId: "1:917765847499:web:c8e459cbf24e6c54f09e4e",
  measurementId: "G-3QNED4RJQE",
});
const db = firebaseApp.firestore();
export default db;
