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
  <h3 class="border border-black">{{ page }}</h3>
  <br />
  <button
    v-for="p in totalPages"
    :key="p"
    :class="{ 'active-button': page === p, 'non-active-button': page !== p }"
    @click="pageHandler(p, totalPages)"
  >
    {{ p }}
  </button>
</template>
<style scoped>
.active-button {
  @apply bg-blue-300 border border-black hover:bg-gray-200 mr-5 ml-5 w-10 text-black font-bold py-1 px-1 rounded;
}
.non-active-button {
  @apply bg-green-300 border border-black hover:bg-gray-200 mr-5 ml-5 w-10 text-black font-bold py-1 px-1 rounded;
}
</style>
