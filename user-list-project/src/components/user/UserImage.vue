<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
});
const imageClickHandler = () => {
  console.log('asd');
};
</script>
<template>
  <div type="button" @click="imageClickHandler" class="image-wrapper">
    <img
      :src="image"
      alt="user-profile-picture"
      class="card-profile-picture border border-slate-600 m-2"
    />
  </div>
</template>
<style scoped>
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply border border-black rounded-full overflow-hidden h-32 w-32;
  padding: 0;
  margin: 0;
}
.card-profile-picture {
  @apply h-full w-full object-cover;
}
</style>
