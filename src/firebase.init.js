import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6OBslLZSPk89Os4A6FVg3kjbl8_O_STk",
  authDomain: "todo-auvee.firebaseapp.com",
  projectId: "todo-auvee",
  storageBucket: "todo-auvee.appspot.com",
  messagingSenderId: "1014090747629",
  appId: "1:1014090747629:web:a6adc88bbbdbf4854dc6e4",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
