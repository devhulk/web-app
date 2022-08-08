import {initializeApp} from 'firebase/app'
import firebase from 'firebase/compat/app'


let firebaseConfig = {
        apiKey: process.env.googleAuthKey,
        authDomain: process.env.googleAuthDomain,
        projectId: 'rehicle',
        storageBucket: 'rehicle.appspot.com',
        messagingSenderId: '675107999277',
        appId: '1:675107999277:web:18cb7546b037b92883b2a4',
        measurementId: ''
}

let app = null

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}

export default (ctx, inject) => {
    inject('firebase', firebase)
}