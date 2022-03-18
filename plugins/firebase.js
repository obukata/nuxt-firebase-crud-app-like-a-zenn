// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpBOu6XsGjSo5vwsc32ick6BJIqoCdUmk",
  authDomain: "wiki-34743.firebaseapp.com",
  projectId: "wiki-34743",
  storageBucket: "wiki-34743.appspot.com",
  messagingSenderId: "788080340913",
  appId: "1:788080340913:web:95ae43da3ebf01f6935790"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export default (context, inject) => {
  inject('firebase', firebaseApp)
}
