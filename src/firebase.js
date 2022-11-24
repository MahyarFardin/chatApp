import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyACIQ98agFCskwfiAMrq7ABOOyglpCCk9M",
  authDomain: "chat-78e1a.firebaseapp.com",
  projectId: "chat-78e1a",
  storageBucket: "chat-78e1a.appspot.com",
  messagingSenderId: "229621920828",
  appId: "1:229621920828:web:6ed22e3b03b26baeeabf39"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();


export const addData=async(data)=>{
  try {
	const col= await addDoc(collection(db,"users"),{...data});
  } catch (e) {
	console.error("Error adding document: ", e);
  }
}

export const getUserData=async(data)=>{
  const querySnapshot = await getDocs(collection(db, "users"))
  /* return querySnapshot.map(data=> console.log(data.data())) */
  querySnapshot.forEach((doc) => {
	if(doc.data().email===data.eamil && doc.data().password===data.password)
	  return true;
	  });
	return false
}

export const currentUser=auth.currentUser
