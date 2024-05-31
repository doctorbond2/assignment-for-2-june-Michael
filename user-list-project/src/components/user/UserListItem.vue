<script setup>
import UserImage from './UserImage.vue';
import UserInfo from './UserInfo.vue';
import { computed } from 'vue';
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const { user } = props;
const { first_name, last_name, avatar, email, id } = user;
const userInfoProps = computed(() => ({
  firstName: first_name,
  lastName: last_name,
  email,
  id,
}));
</script>
<template>
  <div class="user_card_wrap grid grid-cols-2 min-h-[80%]">
    <section class="left-section" name="left-section">
      <UserImage :image="avatar" />
    </section>
    <section class="right-section" name="right-section">
      <UserInfo v-bind="userInfoProps" />
    </section>
  </div>
</template>
<style scoped>
.user_card_wrap {
  @apply max-w-[100%] rounded overflow-hidden shadow-md bg-slate-200 m-5 hover:-translate-y-1 transition-transform;
}
.left-section {
  display: flex;
  justify-content: center;
}
.right-section {
}
</style>
