<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import API_Handler from '@/utils/apiHandler.js';
import UserListItem from './UserListItem.vue';

const userListData = ref(null);
const fetchData = async () => {
  try {
    const response = await API_Handler.testFetch();
    userListData.value = response.data;
    console.log(userListData.value.data);
  } catch (err) {
    console.log(err.error, err.response);
  }
};
const test = async () => {
  try {
    const response = await API_Handler.getByParams({ page: 2 });
  } catch (err) {
    console.log(err.error, err.response);
  }
};
onMounted(() => {
  fetchData();
  test();
});
</script>
<template>
  <div>
    <!-- <button @click="fetchData">Get data</button> -->

    <div v-if="userListData">
      Data received.
      <div v-for="user in userListData.data" :key="user.id">
        <UserListItem :user="user" />
      </div>
    </div>
    <div v-else>No data received yet</div>
  </div>
</template>
<style scoped></style>
