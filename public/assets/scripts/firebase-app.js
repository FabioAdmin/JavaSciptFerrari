import firebaseConfig from "../../../firebase.json";
import firebase from "firebase/app";
import "firebase/auth";

if (firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default firebase;
