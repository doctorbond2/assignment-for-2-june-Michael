<script setup>
const props = defineProps({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  toggleInfoModal: {
    type: Function,
  },
});
const { firstName, lastName } = props;
const fullName = `${firstName} ${lastName}`;
</script>
<template>
  <div class="mt-8">
    <h2>{{ fullName }}</h2>
    <a class="contact-link" @click="toggleInfoModal">Make contact</a>
  </div>
</template>
<style scoped>
h2 {
  font-weight: bold;
  font-size: 1.2em;
  color: black;
}
a {
  cursor: pointer;
  font-size: 1em;
  color: black;
}
a:hover {
  color: burlywood;
}
</style>
