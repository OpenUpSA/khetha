import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/messaging';


const config = {
  apiKey: 'AIzaSyBBydomvh0MuYTfntlrrA53blEr-7o7fgY',
  authDomain: 'temp-dev-3e04c.firebaseapp.com',
  databaseURL: 'https://temp-dev-3e04c.firebaseio.com',
  projectId: 'temp-dev-3e04c',
  storageBucket: 'temp-dev-3e04c.appspot.com',
  messagingSenderId: '855378002350',
};


const isClient = typeof window !== 'undefined';

if (isClient) {
  firebase.initializeApp(config);
}


export const fireStore = isClient ? firebase.firestore() : {};
export const auth = isClient ? firebase.auth() : {};
export const messaging = isClient ? firebase.messaging() : {};
