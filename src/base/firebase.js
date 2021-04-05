import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBCIKNoma98I2yj2BJs_INxjVAEFqlFbUI",
  authDomain: "we-partner-up-226cf.firebaseapp.com",
  projectId: "we-partner-up-226cf",
  storageBucket: "we-partner-up-226cf.appspot.com",
  messagingSenderId: "819304566885",
  appId: "1:819304566885:web:a7134b9cc59d68d5c9768c",
  measurementId: "G-E2K0SB59W6",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
