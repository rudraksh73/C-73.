import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB4dj37J5jo_ABKaL83VSwq-dtNXsVxylw",
  authDomain: "e-ride-stage-df8e1.firebaseapp.com",
  projectId: "e-ride-stage-df8e1",
  storageBucket: "e-ride-stage-df8e1.appspot.com",
  messagingSenderId: "380843877588",
  appId: "1:380843877588:web:facb3bb3a489cfcd544741"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
