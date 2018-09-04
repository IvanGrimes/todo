import firebase from 'firebase';
import config from './config';

const firebaseInstance = firebase.initializeApp(config);

export default firebaseInstance;
