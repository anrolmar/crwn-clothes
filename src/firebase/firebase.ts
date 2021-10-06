import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { ICollection } from '../shared/models/Shop';
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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth: firebase.User, additionalData: any) => {
  const userRef = fireStore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error: any) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async <T>(collectionKey: string, objectsToAdd: T) => {
  const collectionRef = fireStore.collection(collectionKey);

  if (Array.isArray(objectsToAdd)) {
    const batch = fireStore.batch();
    objectsToAdd.forEach((obj: T) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    return await batch.commit();
  }
};

export const convertCollectionsSnapshotToMap = (
  collections: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator: ICollection, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise<firebase.User | null>((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export default firebase;
