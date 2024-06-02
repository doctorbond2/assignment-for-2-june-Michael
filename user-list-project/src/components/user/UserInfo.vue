<script setup>
import { getInfoFromFirstChar as getJobExp } from '@/utils/regexHelpers';
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
const { time, job } = getJobExp(firstName.charAt(0));
console.log(time);
</script>
<template>
  <div class="mt-6">
    <h2>{{ fullName }}</h2>
    <h3>{{ job }}</h3>
    <a class="contact-link" @click="toggleInfoModal">Make contact</a>
  </div>
</template>
<style scoped>
h2 {
  font-weight: bold;
  font-size: 1.2em;
  color: black;
}
h3 {
  font-weight: bold;
  font-size: 0.9em;
  color: gray;
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
