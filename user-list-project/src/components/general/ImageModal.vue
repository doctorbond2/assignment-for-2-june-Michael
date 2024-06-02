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
  <div class="modal" :class="{ 'modal-open': showModal }">
    <div class="modal-box">
      <div type="button" @click="toggleModal" class="image-wrapper">
        <img
          :src="image"
          alt="user-profile-picture"
          class="card-profile-picture border border-slate-600 m-2"
        />
      </div>

      <div class="modal-action">
        <button class="btn" @click="toggleModal">Close modal</button>
      </div>
    </div>
  </div>
</template>
<style>
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply border border-black rounded-full overflow-hidden  h-28 w-28;
  padding: 0;
  margin: 0;
}
.card-profile-picture {
  @apply h-full w-full object-cover rounded-full;
}
</style>
