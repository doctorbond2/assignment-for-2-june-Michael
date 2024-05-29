<script setup>
import UserImage from './UserImage.vue';
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
  <div class="user_card_wrap grid grid-cols-2">
    <section class="left-section" name="left-section">
      <UserImage :image="avatar" />
    </section>
    <h2>{{ first_name }} {{ last_name }}</h2>
    <section class="right-section" name="right-section"></section>
  </div>
</template>
<style scoped>
.user_card_wrap {
  @apply max-w-64 rounded overflow-hidden shadow-md bg-slate-200 m-10 hover:-translate-y-5 transition-transform;
}
.left-section {
  display: flex;
  justify-content: center;
}
</style>
