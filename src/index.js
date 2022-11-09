import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/aith';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9FRM4Vrw93N0NMoCy4rD4LKGJYhnLWl8",
  authDomain: "sustainablefashion-4eb3e.firebaseapp.com",
  projectId: "sustainablefashion-4eb3e",
  storageBucket: "sustainablefashion-4eb3e.appspot.com",
  messagingSenderId: "20822039141",
  appId: "1:20822039141:web:685437a27eeb37aa97048c",
  measurementId: "G-BRJR0CJ14Z"
};

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, user ->{
  if(user != null){
    console.log('logged in!');
  }
  }
}

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
