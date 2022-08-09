<template>
    <div>
         <AppLogo/>
         <div class="mx-auto w-100 md:w-100 lg:w-100 xl:w-1/2 2xl:w-1/2">
    <div class="pl-10 pr-10 w-100 mt-10 mb-10"> 
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
          </span>
          <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" v-model="email" />
        </label>
    </div>
    <div class="pl-10 pr-10 w-100 mt-10 mb-10"> 
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Password
          </span>
          <input type="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="•••••••••••••••••••" v-model="password" />
        </label>
    </div>
<div class="pl-10 pr-10 pb-10 pt-2">
    <button @click.once="login" type="button" class=" w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
    
    Login</button>
</div>
         </div>
     </div>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      password: '',
    }
  },
    methods: {
      async login() {
        try {
          await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
          //console.log(await this.$fire.auth)
            console.log(this.$fire.auth)
            let idToken = await this.$fire.auth.currentUser.getIdToken()
            console.log()
            console.log(this.$auth)
            this.$store.dispatch('user/loginUser',  {idToken})

            console.log(this.$store.state.currentUser)
        } catch (e) {
          alert(e)
          console.log(e)
        }
      }
    }

}
</script>

<style>

</style>
