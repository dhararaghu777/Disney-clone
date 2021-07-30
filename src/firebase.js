import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCS1QOEJ15gb5Dmg7Gg65I7xGzQsFz2e-M",
  authDomain: "disney-plus-a661e.firebaseapp.com",
  projectId: "disney-plus-a661e",
  storageBucket: "disney-plus-a661e.appspot.com",
  messagingSenderId: "414236774410",
  appId: "1:414236774410:web:8edae9b3f7d51f42f60ff3",
  measurementId: "G-6JJ1FFHF3R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
