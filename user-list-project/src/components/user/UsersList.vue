<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import API_Handler from '@/utils/apiHandler.js';
import UserListItem from './UserListItem.vue';
import localStorage_Handler from '@/utils/localStorageHandler.js';

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
const pageHandler = async (page) => {
  if (page > 2 || page <= 0) {
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
  const currentPage = localStorage_Handler.getPage();
  currentPage ? pageHandler(currentPage) : fetchData();
});
</script>
<template>
  <div>
    <button
      @click="pageHandler(userListData.page - 1)"
      class="previous-button"
      id="previous-button"
      value="previous"
    >
      Previous</button
    ><button
      class="next-button"
      @click="pageHandler(userListData.page + 1)"
      id="previous"
      value="previous"
    >
      Next
    </button>

    <div v-if="userListData">
      <h3>Current page: {{ userListData.page }}</h3>
      <h4>Total pages: {{ userListData.total_pages }}</h4>
      Data received.
      <div v-for="user in userListData.data" :key="user.id">
        <UserListItem :user="user" />
      </div>
    </div>
    <div v-else>No data received yet</div>
  </div>
</template>
<style scoped>
.previous-button {
  @apply bg-blue-300 border border-black hover:bg-gray-200 mr-5 ml-5 w-20;
}
.next-button {
  @apply bg-green-300 border border-black hover:bg-gray-200 mr-5 ml-5 w-20;
}
</style>
