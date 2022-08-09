<template>
<div class="pl-10 pr-10 pb-10 pt-2">
    <button @click.once="createUser" type="button" class=" w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
    
    {{label}}</button>
</div>

</template>


<script> 
 export default {
    props: {
      label: String,
    },
    methods: {
      async createUser() {
        try {
          await this.$fire.auth.createUserWithEmailAndPassword(
            'foo@bar.foo',
            'test12345'
          )
        } catch (e) {
          console.log(e)
        }
      }
    }
  }

</script>
