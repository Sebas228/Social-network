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
  apiKey: "////",
  authDomain: "////",
  projectId: "////",
  storageBucket: "////",
  messagingSenderId: "////",
  appId: "////"
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