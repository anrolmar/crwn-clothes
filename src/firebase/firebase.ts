import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC3_5-7qSZL6-hQokGZ9f6Xdlndlvm8HLk',
  authDomain: 'crwn-db-3af0b.firebaseapp.com',
  projectId: 'crwn-db-3af0b',
  storageBucket: 'crwn-db-3af0b.appspot.com',
  messagingSenderId: '543802503486',
  appId: '1:543802503486:web:6b3d268b274767a3ba7c6f',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
