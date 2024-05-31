<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">For Vendre</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>asd</footer>
</template>

<style scoped></style>
