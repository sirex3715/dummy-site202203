import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqj4z-oQh7KjOdZiQ-pjB-JCKdaTuBfNw",
  authDomain: "dummy-site01.firebaseapp.com",
  projectId: "dummy-site01",
  storageBucket: "dummy-site01.appspot.com",
  messagingSenderId: "219319330451",
  appId: "1:219319330451:web:1738fcaac97e1b218d0f66"
};
  
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const registerUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert("登録完了");
    return user;
  })
  .catch((error) => {
    alert("登録失敗");
    return error;
    // ..
  });
}