import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDneoeGOxccwNwT6BraQWnpjoqNHq0iPT0",
	authDomain: "crwn-clothing-81b3e.firebaseapp.com",
	projectId: "crwn-clothing-81b3e",
	storageBucket: "crwn-clothing-81b3e.appspot.com",
	messagingSenderId: "1065891218449",
	appId: "1:1065891218449:web:5c1c4465c9a75d95f89db0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Create Auth Provider
const provider = new GoogleAuthProvider();

// Set Custom Parameters
provider.setCustomParameters({
	prompt: "select_account", // Forces user to select account when they interact with the provider
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	// doc( database, collection, unique identifier )
	const userDocRef = doc(db, "users", userAuth.uid);

	// Create a snpashot of the users info when they sign in
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log("Error creating the user", error);
		}
	}

	return userDocRef;
};
