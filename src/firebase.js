import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDqZRTxf2FQ-SR3jvqUMwMBVvG1BsH7U_8",
    authDomain: "react-proj-ec7c7.firebaseapp.com",
    projectId: "react-proj-ec7c7",
    storageBucket: "react-proj-ec7c7.appspot.com",
    messagingSenderId: "781939124716",
    appId: "1:781939124716:web:8a22bb5d375df5304cb8c9"
})

export const auth = app.auth()
export default app