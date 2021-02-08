import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPYkYjvBHPI-XJJmW1q7yaahuZ7m9VgCE",
    authDomain: "twitter-clone-42654.firebaseapp.com",
    databaseURL: "https://twitter-clone-42654.firebaseio.com",
    projectId: "twitter-clone-42654",
    storageBucket: "twitter-clone-42654.appspot.com",
    messagingSenderId: "506910212934",
    appId: "1:506910212934:web:906f04a9562bf6296a5b47",
    measurementId: "G-8E8F9D8FQE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;