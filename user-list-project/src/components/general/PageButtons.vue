<script setup>
const props = defineProps({
  pageHandler: {
    type: Function,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <br />
  <button
    v-for="p in totalPages"
    :key="p"
    :class="{ 'active-button': page === p, 'non-active-button': page !== p }"
    @click="pageHandler(p, totalPages)"
  >
    Page {{ p }}
  </button>
</template>
<style scoped>
.active-button {
  @apply bg-blue-300 border border-black mr-5 ml-5 w-20 text-black font-bold py-1 px-1 rounded cursor-default;
}
.non-active-button {
  @apply bg-slate-200 border border-black hover:border-blue-400 mr-5 ml-5 w-20 text-black font-bold py-1 px-1 rounded;
}
</style>
