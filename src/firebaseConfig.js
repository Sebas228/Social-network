import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD985hh9V40kXC57q44SH-YTWKpAF0Sf9o",
  authDomain: "socialnetworktest-9263f.firebaseapp.com",
  projectId: "socialnetworktest-9263f",
  storageBucket: "socialnetworktest-9263f.appspot.com",
  messagingSenderId: "263040647736",
  appId: "1:263040647736:web:db78b670795002a8755ccd"
};

const app = firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export {
  app,
  googleAuthProvider,
  githubAuthProvider
};