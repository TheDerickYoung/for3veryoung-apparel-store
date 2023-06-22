import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1FnZuPjo11GHRICUFb7OLjtqTsytKDD0",
  authDomain: "for3ver-young-apparel-db.firebaseapp.com",
  projectId: "for3ver-young-apparel-db",
  storageBucket: "for3ver-young-apparel-db.appspot.com",
  messagingSenderId: "419797380339",
  appId: "1:419797380339:web:6ca91e535d7e44a9e11b86",
  measurementId: "G-FMJ9FCR0B6",
};

const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`error creating the user`, error.message);
    }
  }

  return userDocRef;
};
