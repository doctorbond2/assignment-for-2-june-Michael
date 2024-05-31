<script setup>
import UsersList from '@/components/user/UsersList.vue';
</script>

<template>
  <div class="center-wrapper">
    <UsersList />
  </div>
</template>
<style scoped>
.center-wrapper {
  @apply flex mb-4 max-w-[80%] m-auto rounded overflow-hidden shadow-md bg-cyan-800;
}
</style>
