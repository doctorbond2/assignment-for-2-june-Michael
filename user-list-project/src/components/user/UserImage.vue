<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  toggleModal: {
    type: Function,
  },
});
</script>
<template>
  <div type="button" @click="toggleModal" class="image-wrapper">
    <img
      :src="image"
      alt="user-profile-picture"
      class="card-profile-picture m-2"
    />
  </div>
</template>

<style scoped>
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply rounded-full overflow-hidden lg:h-28 lg:w-28 sm:w-20 sm:h-20;
  padding: 0;
  margin: 0;
}
.card-profile-picture {
  @apply h-full w-full object-cover rounded-full cursor-pointer;
}
</style>
