import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from  'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkzc_ZvJ9k0mYjEJHDbqTKSIpFoDiE1U8",
    authDomain: "crwn-clothing-db-ecf5d.firebaseapp.com",
    projectId: "crwn-clothing-db-ecf5d",
    storageBucket: "crwn-clothing-db-ecf5d.appspot.com",
    messagingSenderId: "418790394384",
    appId: "1:418790394384:web:4e0ac9510402d8a5399895"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt : "select_account",
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

 export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db,"users",userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
     try {
     await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
     } catch (error) {
      console.log("Error creating the user ", error.message);
     }
    }
    console.log(userSnapshot);
    return userDocRef;
  }