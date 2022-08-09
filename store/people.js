export const state = () => ({
    people: [] 
  })
  
  export const getters = {
    // getters allow read only access to state
    getAppraisals(state) {
      return state.list
    }
  }
  
  export const mutations = {
    // mutations change state, and must be syncronous 
    changeAppraisalName(state, name) {
      state.appraisal.name = name
    }
  }
  
  export const actions = {
    // actions are for api calls, actions execute mutations
    async fetchPeople(state) {
      // make request
    }
  }
