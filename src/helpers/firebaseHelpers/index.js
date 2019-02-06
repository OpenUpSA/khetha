import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging';
import firebaseConfig from '../../config/firebaseConfig.json';


const isClient = typeof window !== 'undefined';

if (isClient) {
  firebase.initializeApp(firebaseConfig);
}


const auth = isClient ? firebase.auth() : {};
const messaging = isClient ? firebase.messaging() : {};

export { auth, messaging };
export default { auth, messaging };
