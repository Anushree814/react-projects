import {initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAw4MXAe2BJ9XRXDF3cvC_w02PP18T6daw",
    authDomain: "git-search-c9868.firebaseapp.com",
    projectId: "git-search-c9868",
    storageBucket: "git-search-c9868.appspot.com",
    messagingSenderId: "660162896313",
    appId: "1:660162896313:web:0a30f72f02b1c71e4b5668",
    measurementId: "G-PDHZCL7K79"
}

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)

