import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRBSI49LiZ9J-QozljPvx3NT8OWaEJopU",
    authDomain: "labfirebase-86f6c.firebaseapp.com",
    projectId: "labfirebase-86f6c",
    storageBucket: "labfirebase-86f6c.appspot.com",
    messagingSenderId: "421299921384",
    appId: "1:421299921384:web:d302c656c758f0174cc45d"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;