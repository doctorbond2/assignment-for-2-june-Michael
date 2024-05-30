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
});

console.log(props.firstName);
</script>
<template></template>
<style></style>
