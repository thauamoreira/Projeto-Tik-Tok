import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCx98twXiEN9vWVm7GKPRhejW44P7co1Qc",
  authDomain: "tiktok---jornada-5cc61.firebaseapp.com",
  projectId: "tiktok---jornada-5cc61",
  storageBucket: "tiktok---jornada-5cc61.appspot.com",
  messagingSenderId: "310119919731",
  appId: "1:310119919731:web:b5b3fda3e72a82e4b03a06",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
