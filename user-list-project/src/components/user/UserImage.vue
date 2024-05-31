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
.card-profile-picture {
  border-radius: 50%;
  width: 9rem;
  min-height: 100%;
}
.image-wrapper {
  min-width: 100%;
  height: 9rem;
}
</style>
