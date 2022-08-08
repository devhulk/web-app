<template>
<div class="pl-10 pr-10 pb-10 pt-2">
    <button @click.once="createUser" type="button" class=" w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
    
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
            'foo@foo.foo',
            'test12345'
          )
        } catch (e) {
          console.log(e)
        }
      }
    }
  }

</script>
