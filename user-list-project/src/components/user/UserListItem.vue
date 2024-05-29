<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const { user } = props;
const { first_name, last_name, avatar, email, id } = user;
</script>
<template>
  <div class="user_card_wrap">
    <p>{{ id }}</p>
    <img :src="avatar" alt="user_avatar" />
    <h1>{{ first_name }} {{ last_name }}</h1>
  </div>
</template>
<style scoped>
.user_card_wrap {
  @apply max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 m-10 hover:-translate-y-5 transition-transform;
}
</style>
