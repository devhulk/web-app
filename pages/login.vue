<template>
    <div class="flex flex-col space-y-4">
         <LoginForm/> 
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Login',
    computed: {
    appraisals () {
      return this.$store.state.people.list
    }
  },
})
</script>
