import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhhTkPZGRmiuAlOwfhpI53lEBpC1xCgiw",
  authDomain: "myshop-acd25.firebaseapp.com",
  projectId: "myshop-acd25",
  storageBucket: "myshop-acd25.appspot.com",
  messagingSenderId: "718650835402",
  appId: "1:718650835402:web:c70b2423f36589a972cf33",
  measurementId: "G-106JT35YGZ",
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const timeOfCreation = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        timeOfCreation,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
