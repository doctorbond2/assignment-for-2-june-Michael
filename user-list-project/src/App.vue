<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"><h1>For Vendre</h1></RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped>
nav {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 3em;
}
</style>
