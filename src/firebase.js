import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAL0j0G0lrvTlMterngGzP2nFFgfqoGxtQ",
    authDomain: "clock-it-76b4a.firebaseapp.com",
    databaseURL: "https://clock-it-76b4a.firebaseio.com",
    projectId: "clock-it-76b4a",
    storageBucket: "clock-it-76b4a.appspot.com",
    messagingSenderId: "700887206013",
    appId: "1:700887206013:web:3e3bc678797ce088afc914",
    measurementId: "G-TREWCGHQ98"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;