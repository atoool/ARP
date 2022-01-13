// // Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyAFCZnuGU2Ih6kiJgDAHk476wBLGDsvgmY",
//   authDomain: "flyer-e7026.firebaseapp.com",
//   projectId: "flyer-e7026",
//   storageBucket: "flyer-e7026.appspot.com",
//   messagingSenderId: "847156042878",
//   appId: "1:847156042878:web:28484de4fcc4be42004c2f",
// });

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default firebase;

// firebase.firestore().settings({ timestampsInSnapshots: true });

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFCZnuGU2Ih6kiJgDAHk476wBLGDsvgmY",
  authDomain: "flyer-e7026.firebaseapp.com",
  projectId: "flyer-e7026",
  storageBucket: "flyer-e7026.appspot.com",
  messagingSenderId: "847156042878",
  appId: "1:847156042878:web:28484de4fcc4be42004c2f",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { fullName, email } = userAuth;
    const userId = userAuth.uid;
    const createdAt = new Date();
    try {
      await userRef.set({
        fullName,
        userId,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Replace this with your own config details
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
