// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

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

const setPostsData = async () => {
  try {
    const db = getFirestore(firebaseApp)
    const querySnapshot = await getDocs(collection(db, 'posts'))
    let posts = []
    querySnapshot.forEach(doc => {
      posts.push({
        id: doc.id,
        emoji: doc.data().emoji,
        title: doc.data().title,
        text: doc.data().text,
        user: doc.data().user,
        createdDay: doc.data().createdDay,
      })
    })
    return posts
  }
  catch(e) {
    console.error('error:', e)
  }
}

const setUserData = async () => {
  try {
    const db = getFirestore(firebaseApp)
    const querySnapshot = await getDocs(collection(db, 'user'))
    let user = []
    querySnapshot.forEach(doc => {
      user.push({
        id: doc.id,
        name: doc.data().name,
      })
    })
    return user
  }
  catch(e) {
    console.error('error:', e)
  }
}

// const setData = async () => {
//   try {
//     const db = getFirestore(firebaseApp)
//     const querySnapshot = await getDocs(collection(db, 'posts'))
//     let posts = []
//     querySnapshot.forEach(doc => {
//       posts.push({
//         id: doc.id,
//         emoji: doc.data().emoji,
//         title: doc.data().title,
//         text: doc.data().text,
//         user: doc.data().user
//       })
//     })
//     return posts
//   }
//   catch(e) {
//     console.error('error:', e)
//   }
// }

// const addData = async (obj) => {
//   try {
//     const db = getFirestore(firebaseApp)
//     const docRef = await addDoc(collection(db, 'posts'), {
//       user: obj.user,
//       emoji: obj.emoji,
//       title: obj.title,
//       text: obj.text,
//     })
//   } catch(e) {
//     console.error('error:', e)
//   }
// }

const updateData = async (obj) => {
  try {
    const db = getFirestore(firebaseApp)
    const docRef = doc(db, 'posts', obj.id)
    await updateDoc(docRef, {
      emoji: obj.emoji,
      title: obj.title,
      text: obj.text
    })
  } catch(e) {
    console.error('error:', e)
  }
}

const deleteData = async (id) => {
  const db = getFirestore(firebaseApp)
  const docRef = doc(db, 'posts', id)
  await deleteDoc(docRef)
}

export default (context, inject) => {
  inject('firebase', firebaseApp)
  inject('setPostsData', setPostsData)
  inject('setUserData', setUserData)
  // inject('addData', addData)
  inject('updateData', updateData)
  inject('deleteData', deleteData)
}
