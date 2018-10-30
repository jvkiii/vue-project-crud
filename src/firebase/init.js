
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAOr1PNz2UlJpoWe2VNBVdOZthuR7uGcJc",
  authDomain: "project-crud-61f19.firebaseapp.com",
  databaseURL: "https://project-crud-61f19.firebaseio.com",
  projectId: "project-crud-61f19",
  storageBucket: "project-crud-61f19.appspot.com",
  messagingSenderId: "868076009108"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots:true });

//export firestor database
export default firebaseApp.firestore();