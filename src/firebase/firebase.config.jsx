// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:             process.env.REACT_APP_apiKey,
  authDomain:         process.env.REACT_APP_authDomain,
  projectId:          process.env.REACT_APP_projectID,
  storageBucket:      process.env.REACT_APP_storageBucket,
  messagingSenderId:  process.env.REACT_APP_messagingSenderID,
  appId:              process.env.REACT_APP_appId,


  apiKey: "AIzaSyDi5JaKxZWRiHXHajeQn681DzjACJro7N0",
  // authDomain: "e-learning-11264.firebaseapp.com",
  // projectId: "e-learning-11264",
  // storageBucket: "e-learning-11264.appspot.com",
  // messagingSenderId: "438242068415",
  // appId: "1:438242068415:web:1c56308acdde9d6b2d830a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;
