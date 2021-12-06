
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAyUI5e0wedQXOWwdNrTY-4ufCt2i3N48Q",
    authDomain: "geetron-72a38.firebaseapp.com",
    projectId: "geetron-72a38",
    storageBucket: "geetron-72a38.appspot.com",
    messagingSenderId: "1080596568068",
    appId: "1:1080596568068:web:e380bf62d6433e05c17d51",
    measurementId: "G-0GWEWSF0B5"
  };
  
 firebase.initializeApp(firebaseConfig);

export  default firebase ;

