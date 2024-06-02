<script setup>
import UserImage from './UserImage.vue';
import UserInfo from './UserInfo.vue';
import { computed, ref } from 'vue';
import ImageModal from '../general/ImageModal.vue';
import InfoModal from '../general/InfoModal.vue';

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
const showInfoModal = ref(false);
const showImageModal = ref(false);
const toggleInfoModal = () => (showInfoModal.value = !showInfoModal.value);
const toggleImageModal = () => (showImageModal.value = !showImageModal.value);
</script>
<template>
  <div class="user_card_wrap grid grid-cols-2 min-h-[80%]">
    <section class="left-section" name="left-section">
      <UserImage :image="avatar" :toggle-modal="toggleImageModal" />
    </section>
    <section class="right-section" name="right-section">
      <UserInfo v-bind="userInfoProps" :toggle-info-modal="toggleInfoModal" />
    </section>
  </div>

  <ImageModal
    :toggle-modal="toggleImageModal"
    x
    :show-modal="showImageModal"
    :image="avatar"
  />
  <InfoModal
    :toggle-modal="toggleInfoModal"
    :show-modal="showInfoModal"
    :modal-content="user"
  />
</template>
<style scoped>
.user_card_wrap {
  @apply max-w-[100%] rounded overflow-hidden shadow-md bg-slate-200 m-5 hover:-translate-y-1 transition-transform;
}
.left-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-section {
}
</style>
