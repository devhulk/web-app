export const state = () => ({
    list: 
    [
        {
        first_name: "Gerald",
        last_name: "Yerden",
        phone_number: "7045554433",
        vehicle_condition: "good",
        address: "1601 Bay Meadows Ave NW",
        city: "Concord",
        state: "NC",
        zip: "28027",
        insurance_claim: false,
        insurance_offer: false,
        VIN: "1G6KD57Y57U180295"}
    ] 
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
    async fetchAppraisals(state) {
      // make request
    }
  }