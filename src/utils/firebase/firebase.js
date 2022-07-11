// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG3TDX7VshSoflk6nyRpnaBQ3vNJskF9g",
  authDomain: "shopping-cart-a547d.firebaseapp.com",
  projectId: "shopping-cart-a547d",
  storageBucket: "shopping-cart-a547d.appspot.com",
  messagingSenderId: "544535590255",
  appId: "1:544535590255:web:947401929330d37558e49a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot, userSnapshot.exists());
};
