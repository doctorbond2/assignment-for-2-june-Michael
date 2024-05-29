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
  width: 8vw;
  min-height: 11vh;
}
.image-wrapper {
  min-width: 80%;
  height: 100%;
}
</style>
