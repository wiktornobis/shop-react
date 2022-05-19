
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
        apiKey: "AIzaSyAmA6E-CIewmJ46I0L8aeTVJqE_HXg7e2Y",
        authDomain: "shop-react-d0bd9.firebaseapp.com",
        databaseURL: "https://shop-react-d0bd9-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "shop-react-d0bd9",
        storageBucket: "shop-react-d0bd9.appspot.com",
        messagingSenderId: "984357274882",
        appId: "1:984357274882:web:a9f618ff3f2cd27fcc2e1b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)