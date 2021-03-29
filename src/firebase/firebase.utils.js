import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from './config';

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
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
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

// export const addCollectionsAndDocuments = async (
// 	collectionKey,
// 	objectsToAdd
// ) => {
// 	const collectionRef = firestore.collection(collectionKey);

// 	const batch = firestore.batch();
// 	objectsToAdd.forEach((obj) => {
// 		const newDocRef = collectionRef.doc();
// 		batch.set(newDocRef, obj);
// 	});
// 	return await batch.commit();
// };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
