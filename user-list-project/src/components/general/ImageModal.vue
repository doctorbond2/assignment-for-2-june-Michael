<script setup>
const modalProps = defineProps({
  image: {
    type: String,
  },
  toggleModal: {
    type: Function,
  },
  showModal: {
    type: Boolean,
  },
});
const { image } = modalProps;
</script>
<template>
  <div class="modal" @click="toggleModal" :class="{ 'modal-open': showModal }">
    <div type="button" @click="toggleModal" class="image-wrapper">
      <img
        :src="image"
        alt="user-profile-picture"
        class="card-profile-picture border border-slate-600 m-2"
      />
    </div>
  </div>
</template>
<style scoped>
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply border border-black rounded-full overflow-hidden  h-64 w-64;
  padding: 0;
  margin: 0;
}
.card-profile-picture {
  @apply h-full w-full object-cover rounded-full;
}
.modal,
.modal-box {
  background-color: transparent;
  @apply bg-slate-200 justify-center p-10;
}
</style>
