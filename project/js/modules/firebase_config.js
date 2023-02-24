
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "<%= process.env.FIREBASE_API_KEY %>",
  authDomain: "webbaseapp-9ce9f.firebaseapp.com",
  databaseURL: "https://webbaseapp-9ce9f-default-rtdb.firebaseio.com",
  projectId: "webbaseapp-9ce9f",
  storageBucket: "webbaseapp-9ce9f.appspot.com",
  messagingSenderId: "750592046255",
  appId: "1:750592046255:web:4f69da4df742edf2bf905a",
  measurementId: "G-3V8SWSK9ZT"
};
const app = initializeApp(firebaseConfig);



export const auth = getAuth();
export const provider = new GoogleAuthProvider();



 
  