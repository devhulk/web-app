<template>
    <div class="flex flex-col space-y-4">
         <LoginForm/> 
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
    computed: {
    appraisals () {
      return this.$store.state.appraisals.list
    }
  },
})
</script>
