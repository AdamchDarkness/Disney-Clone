import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-nVi1-iWptPBBr7IP09V7Y8k_nS050mA",
  authDomain: "disney-clone-9e5ad.firebaseapp.com",
  projectId: "disney-clone-9e5ad",
  storageBucket: "disney-clone-9e5ad.appspot.com",
  messagingSenderId: "303811660727",
  appId: "1:303811660727:web:086766fc72d5dcd25ef632",
  measurementId: "G-4555RTV1L5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
