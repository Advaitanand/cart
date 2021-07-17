import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA2NRm_s_4w3bYCED0eA6Efo2--NEmdCgw",
  authDomain: "cart-8df55.firebaseapp.com",
  projectId: "cart-8df55",
  storageBucket: "cart-8df55.appspot.com",
  messagingSenderId: "1082215779833",
  appId: "1:1082215779833:web:cfd7994528f323d3570128"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


