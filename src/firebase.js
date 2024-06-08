import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHgmlDrOSK5mxpyLsGMj62vocggtkciRc",
  authDomain: "ms2projektna.firebaseapp.com",
  projectId: "ms2projektna",
  storageBucket: "ms2projektna.appspot.com",
  messagingSenderId: "847238140822",
  appId: "1:847238140822:web:d7f7b79c7252041a3043b7",
  measurementId: "G-KG0G7G34DP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
