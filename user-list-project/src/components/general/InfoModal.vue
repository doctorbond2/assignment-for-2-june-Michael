<script setup>
const modalProps = defineProps({
  modalContent: {
    type: Object,
  },
  toggleModal: {
    type: Function,
  },
  showModal: {
    type: Boolean,
  },
});
const { modalContent } = modalProps;
console.log(modalContent);
</script>
<template>
  <div class="modal" :class="{ 'modal-open': showModal }">
    <div class="modal-box">
      <p class="py-4">Content</p>
      <p>{{ modalContent.first_name }}</p>
      <div class="modal-action">
        <button class="btn" @click="toggleModal">Close modal</button>
      </div>
    </div>
  </div>
</template>
<style></style>
