<template>
  <footer class="bg-transparent">
    <ul class="flex justify-around content-center bg-transparent">
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
<script setup></script>
<style>
nav {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 3em;
}
footer {
  @apply bg-white rounded-lg shadow mb-4 dark:bg-gray-800 h-[100px];
}
div {
  @apply w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between;
}
</style>
