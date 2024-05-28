<script setup>
import { ref } from 'vue';
const timer = ref(0);
const interval = setInterval(() => {
  timer.value++;
  if (timer.value >= 10) {
    timer.value = 0;
    clearInterval(interval);
  }
}, 1000);
</script>
<template>
  <div>{{ timer }}</div>
</template>
<style scoped></style>
