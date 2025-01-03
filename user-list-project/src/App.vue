<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"><h1>User list</h1></RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="bg-transparent">
    <ul class="flex justify-around content-center">
      <li>
        <h3>
          <a
            class="font-bold font-mono text-green-500 text-lg"
            href="https://github.com/doctorbond2/assignment-for-2-june-Michael"
            target="_blank"
            >Github</a
          >
        </h3>
      </li>
      <li>
        <h3>
          <a
            class="font-bold font-mono text-green-500 text-lg"
            href="https://vendre.se/"
            >Vendre</a
          >
        </h3>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
nav {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 3em;
}
footer {
  @apply rounded-lg shadow mb-4 h-[100px];
}
div {
  @apply w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between;
}
a {
  @apply hover:text-green-300 transition transform duration-300 ease-in-out;
}
</style>
