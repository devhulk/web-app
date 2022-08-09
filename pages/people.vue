<template>
    <div class="flex flex-col space-y-4">
         This is the people page 
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'People',
  middleware: ['authenticated'],
  computed: {
    people () {
      return this.$store.state.people.list
    }
  },
})
</script>
