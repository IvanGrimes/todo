import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const authRef = () => firebase.auth();
export const authPersistance = firebase.auth.Auth.Persistence.SESSION;
export const provider = new firebase.auth.EmailAuthProvider();
