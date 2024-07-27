import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCtXskBMEH2cnvnRYmB4fwTURc90mFV_Jg",
  authDomain: "myv-first.firebaseapp.com",
  projectId: "myv-first",
  storageBucket: "myv-first.appspot.com",
  messagingSenderId: "258217564979",
  appId: "1:258217564979:web:2f165445241767ad0c3c46",
  measurementId: "G-4XJX45FMTW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
);
