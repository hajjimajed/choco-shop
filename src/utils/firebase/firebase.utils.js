import { initializeApp } from 'firebase/app';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMZwjh72obem3HrGrctPJkwgRxfaK6mlU",
    authDomain: "choco-shop-3222e.firebaseapp.com",
    projectId: "choco-shop-3222e",
    storageBucket: "choco-shop-3222e.appspot.com",
    messagingSenderId: "665069641911",
    appId: "1:665069641911:web:4631b685726dc72bf7ed32"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})



export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)





export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformations = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformations
            })
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
}





export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);