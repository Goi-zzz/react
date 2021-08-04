import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD8EEOYDkIrPP92AS17JE7-9XXd6ZdQmWw",
    authDomain: "net-ninja-f7d57.firebaseapp.com",
    projectId: "net-ninja-f7d57",
    storageBucket: "net-ninja-f7d57.appspot.com",
    messagingSenderId: "495121450376",
    appId: "1:495121450376:web:f1229960d19cda2766e63d",
    measurementId: "G-TE2GLX5P4G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().setting({ timestampsInSnapshots: true });

  export default firebase