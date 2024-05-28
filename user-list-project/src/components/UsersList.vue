<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import API_Handler from '@/utils/apiHandler.js';
const userListData = ref(null);
const fetchData = async () => {
  try {
    const response = await API_Handler.fetchData();
    userListData.value = response.data;
    console.log(userListData.value.data);
  } catch (err) {
    console.log(err.error, err.response);
  }
};
onMounted(() => {
  fetchData();
});
</script>
<template>
  <div>
    <!-- <button @click="fetchData">Get data</button> -->

    <div v-if="userListData">
      Data received.
      <div v-for="user in userListData.data">
        <h3>{{ user.first_name }}</h3>
      </div>
    </div>
    <div v-else>No data received yet</div>
  </div>
</template>
<style scoped></style>
