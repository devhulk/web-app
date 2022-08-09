<template>
    <div class="flex flex-col space-y-4">
     This is the Index Page.
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['authenticated'],
  name: 'IndexPage'
})
</script>
