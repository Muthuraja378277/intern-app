import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCW0ABdIQcIe2WwKteKGdSQnhsBRH72N9M",
  authDomain: "intern-9789e.firebaseapp.com",
  projectId: "intern-9789e",
  storageBucket: "intern-9789e.appspot.com",
  messagingSenderId: "1053914027152",
  appId: "1:1053914027152:web:0017c56696d59630acb415",
  measurementId: "G-902C9RWE9D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();  
export{auth,provider}  