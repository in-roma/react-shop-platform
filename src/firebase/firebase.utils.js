import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAnJs8mGn2n50RtFWeULPjv1O4yrDF4DAA',
	authDomain: 'react-shop-platform.firebaseapp.com',
	projectId: 'react-shop-platform',
	storageBucket: 'react-shop-platform.appspot.com',
	messagingSenderId: '1084155808521',
	appId: '1:1084155808521:web:ad40bb7d7c8961a94fa1d8',
};

firebase.initializeApp(config);
