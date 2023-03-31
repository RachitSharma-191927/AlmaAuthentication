import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2SbV-m4h1tPy_b-WNY2mRDROscp2gamg",
  authDomain: "federatedlogin-9ba55.firebaseapp.com",
  projectId: "federatedlogin-9ba55",
  storageBucket: "federatedlogin-9ba55.appspot.com",
  messagingSenderId: "271328610656",
  appId: "1:271328610656:web:f1999cdd33652d6b47f605",
  measurementId: "G-6FPY0Z6Q0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
