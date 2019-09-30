import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyATefatcs3T7BlkpoGmtqxOCE4F4BgiR3w",
  authDomain: "crwn-db-6fd51.firebaseapp.com",
  databaseURL: "https://crwn-db-6fd51.firebaseio.com",
  projectId: "crwn-db-6fd51",
  storageBucket: "crwn-db-6fd51.appspot.com",
  messagingSenderId: "1089320036298",
  appId: "1:1089320036298:web:9b5926488538512999d133",
  measurementId: "G-MBBJ7WLV66"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {

    const { displayName, email, providerData } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        providerData,
        createdAt,
        ...additionalData
      });

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;