import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { IAuthUser } from '../shared/models';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC3_5-7qSZL6-hQokGZ9f6Xdlndlvm8HLk',
  authDomain: 'crwn-db-3af0b.firebaseapp.com',
  projectId: 'crwn-db-3af0b',
  storageBucket: 'crwn-db-3af0b.appspot.com',
  messagingSenderId: '543802503486',
  appId: '1:543802503486:web:6b3d268b274767a3ba7c6f',
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const authUserConverter = {
  toFirestore(authUser: IAuthUser): firebase.firestore.DocumentData {
    return authUser;
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ): IAuthUser {
    return snapshot.data(options) as IAuthUser;
  },
};
export const createUserProfileDocument = async (userAuth: firebase.User, additionalData: any) => {
  if (!userAuth) return;

  const userRef = fireStore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.withConverter(authUserConverter).get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.withConverter(authUserConverter).set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error: any) {
      console.log('Error creating user', error.message);
    }
  }

  return snapShot;
};

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export default firebase;