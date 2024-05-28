<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const toggle = ref(true)
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <div v-if="toggle">
      <h2>Hel</h2>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
