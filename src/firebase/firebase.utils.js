import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyCKMK7VUfEDN9igowRtmnk6ibSnSwly2PE",
  authDomain: "crown-db-dc381.firebaseapp.com",
  databaseURL: "https://crown-db-dc381.firebaseio.com",
  projectId: "crown-db-dc381",
  storageBucket: "crown-db-dc381.appspot.com",
  messagingSenderId: "119901176250",
  appId: "1:119901176250:web:2d2079e3c84268425e1d83",
  measurementId: "G-9MFE5FG8GC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;