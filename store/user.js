export const state = () => ({
    authorized: false,
    currentUser: {}
  })
  
  export const getters = {
    // getters allow read only access to state
    getCurrentUser(state) {
      return state.currentUser
    },

    getAuthStatus(state) {
      return state.authorized
    }
  }
  
  export const mutations = {
    // mutations change state, and must be syncronous 
    toggleAuthStatus(state) {
      state.authorized = !state.authorized
    },

    setCurrentUser(state, user) {
      state.currentUser = user
    }
  }
  
  export const actions = {
    // actions are for api calls, actions execute mutations
    async loginUser(state) {
      // make request
        
    },

    async signUp(state) {
      // make request
        
    }
  }
