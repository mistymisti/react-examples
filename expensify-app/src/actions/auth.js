import { firebase } from '../firebase/firebase';
import { googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    };
};