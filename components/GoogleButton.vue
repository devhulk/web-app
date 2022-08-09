<template>
<div class="text-center pl-10 pr-10 pb-10 pt-2">
    <button type="button" @click.once="googleSignIn" class="m-auto w-full flex flex-nowrap justify-self-center items-center px-6 py-1 border  text-base font-medium rounded-md shadow-sm text-black bg-white-800 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500">
    <span class="flex items-center mx-auto">
    <img class="w-15 h-10 m-auto " src="/google_logo_adobe_express.png">  
    
    {{label}}
    </span>
    </button>
</div>

</template>


<script> 
 export default {
    props: {
      label: String,
    },
    methods: {
      async googleSignIn() {
        var provider = new this.$firebase.auth.GoogleAuthProvider()
        const result = await this.$firebase.auth().signInWithPopup(provider)
        var user = result.user
        console.log(user)

      }
    }
  }

</script>
