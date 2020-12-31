import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebase } from '@firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6xlYDAArRRZAWNpjJRhvhLpD3bOSqIsQ",
    authDomain: "note-application-b3c87.firebaseapp.com",
    projectId: "note-application-b3c87",
    storageBucket: "note-application-b3c87.appspot.com",
    messagingSenderId: "425204313953",
    appId: "1:425204313953:web:3ce6f97267bfc99ac2df20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA