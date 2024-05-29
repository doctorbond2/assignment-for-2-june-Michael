<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import API_Handler from '@/utils/apiHandler.js';
import UserListItem from './UserListItem.vue';
import localStorage_Handler from '@/utils/localStorageHandler.js';
import PageButtons from '../general/PageButtons.vue';
import { computed } from 'vue';

const currentPage = ref(0);
const userListData = ref(null);
const fetchData = async () => {
  try {
    const response = await API_Handler.getFromBaseUrl();
    userListData.value = response.data;
    console.log(userListData.value.data);
  } catch (err) {
    console.log(err.error, err.response);
  }
};
const pageHandler = async (page, total_pages) => {
  if ((page > total_pages || page <= 0) && total_pages) {
    return;
  }
  try {
    const response = await API_Handler.getByParams({ page });
    userListData.value = response.data;
    localStorage_Handler.setCurrentPage(page);
  } catch (err) {
    console.log(err.error, err.response);
  }
};
onMounted(() => {
  const existingPage = localStorage_Handler.getPage();
  existingPage ? pageHandler(existingPage, null) : fetchData();
});
const pageButtonProps = computed(() => ({
  pageHandler,
  page: userListData.value?.page,
  totalPages: userListData.value?.total_pages,
}));
</script>
<template>
  <div v-if="userListData">
    <PageButtons v-bind="pageButtonProps" />
    <h3>Current page: {{ userListData.page }}</h3>
    <h4>Total pages: {{ userListData.total_pages }}</h4>
    Data received.
    <div v-for="user in userListData.data" :key="user + user.id">
      <UserListItem :user="user" />
    </div>
  </div>
  <div v-else>No data received yet</div>
</template>
<style scoped></style>
