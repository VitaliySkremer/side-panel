<template>
  <div class="app">
    <asside-app/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">

import AssideApp from "./components/assideApp.vue";
</script>
<style scoped>

</style>
