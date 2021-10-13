import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentiation = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentiation;