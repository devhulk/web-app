import {initializeApp} from 'firebase/app'
import firebase from 'firebase/compat/app'

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    // Do this:
    const { uid, email, emailVerified } = authUser
    state.user = { uid, email, emailVerified }
    console.log(state.user)
  }
}

export const actions = {
    onAuthStateChangedAction: (ctx, { authUser, claims }) => {
  if (!authUser) {
    // claims = null
    // Perform logout operations
    console.log('no authenticated user')
  } else {
    // Do something with the authUser and the claims object...
    console.log(authUser)
    ctx.commit('ON_AUTH_STATE_CHANGED_MUTATION', {authUser, claims})

  }
}
}

let firebaseConfig = {
        apiKey: process.env.googleAuthKey,
        authDomain: process.env.googleAuthDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: '675107999277',
        appId: process.env.appId,
        measurementId: ''
}

let app = null

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}

export default (ctx, inject) => {
    inject('firebase', firebase)
}
