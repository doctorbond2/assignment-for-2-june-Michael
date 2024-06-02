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
const { first_name, last_name, email, avatar } = modalContent;
const fullName = `${first_name} ${last_name}`;
</script>
<template>
  <div class="modal" :class="{ 'modal-open': showModal }">
    <div class="modal-box w-[17rem] bg-slate-200">
      <h2 class="">{{ fullName }}</h2>
      <div class="image-wrapper">
        <img
          :src="avatar"
          alt="user-profile-picture"
          class="card-profile-picture border border-slate-600 m-2"
        />
      </div>
      <h3 class="mt-4 text-black">Frontend developer</h3>
      <br />
      <h4 class="mail-text">
        Reach me on my mail
        <a href="mailto:asd@asd.com">here</a>
      </h4>

      <div class="modal-action">
        <button class="close-button" @click="toggleModal">Close</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-profile-picture {
  @apply h-full w-full object-cover rounded-full;
}
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  @apply border border-black rounded-full overflow-hidden h-44 w-44;
  padding: 0;
  margin: auto;
}
h2 {
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 1em;
  color: black;
}
.close-button {
  @apply btn p-2 bg-slate-200 text-black hover:text-white hover:border-white;
}
.mail-text {
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 1em;
  color: black;
}
a {
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 1em;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
}
a:hover {
  color: rgb(170, 234, 255);
}
.modal-box {
  text-align: center;
}
</style>
