import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaIATBrYgslKccOeaS_pp09ukflOETbrI",
  authDomain: "barbarashop-d8171.firebaseapp.com",
  databaseURL: "https://barbarashop-d8171.firebaseio.com",
  projectId: "barbarashop-d8171",
  storageBucket: "barbarashop-d8171.appspot.com",
  messagingSenderId: "165804808986",
  appId: "1:165804808986:web:c5c0765d444b7a258daaa3",
  measurementId: "G-BJXD8JLV1X",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage().ref();

export { storage, firebase as default };
