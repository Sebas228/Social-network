import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD985hh9V40kXC57q44SH-YTWKpAF0Sf9o",
  authDomain: "socialnetworktest-9263f.firebaseapp.com",
  projectId: "socialnetworktest-9263f",
  storageBucket: "socialnetworktest-9263f.appspot.com",
  messagingSenderId: "263040647736",
  appId: "1:263040647736:web:db78b670795002a8755ccd"
};

const app = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

export {
  app,
  googleAuthProvider,
  githubAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut
};