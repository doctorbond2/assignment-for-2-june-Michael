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
  id: {
    type: Number,
    required: true,
  },
});
const { firstName, lastName } = props;
const fullName = `${firstName} ${lastName}`;
console.log(fullName);
</script>
<template>
  <div class="mt-8">
    <h2>{{ fullName }}</h2>
    <a>Make contact</a>
  </div>
</template>
<style scoped>
h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
}
a {
  cursor: pointer;
}
a:hover {
  color: burlywood;
}
</style>
