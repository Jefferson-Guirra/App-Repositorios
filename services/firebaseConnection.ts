import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyB4RsRpxkWAp_v7FCehkKpC6jCPK1wLM5I',
  authDomain: 'boardapp-c4717.firebaseapp.com',
  projectId: 'boardapp-c4717',
  storageBucket: 'boardapp-c4717.appspot.com',
  messagingSenderId: '684889718903',
  appId: '1:684889718903:web:2eac20d14b0dcd93e24672',
  measurementId: 'G-Y51QLFWK8R'
}

// Initialize Firebase
/*if(!firebase.getApps.length){
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
}*/

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
