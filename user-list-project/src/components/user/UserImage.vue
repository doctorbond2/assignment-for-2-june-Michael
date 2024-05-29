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
  <div type="button" @click="imageClickHandler">
    <img
      :src="image"
      alt="user-profile-picture"
      class="card-profile-picture border border-slate-600"
    />
  </div>
</template>
<style scoped>
.card-profile-picture {
  border-radius: 50%;
  width: 10vw;
}
</style>
