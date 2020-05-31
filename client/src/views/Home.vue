<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ message.message }}</h1>
  </div>
</template>

<script>
const API_URL = 'http://localhost:4000/add/category';


export default {
  name: 'Home',
  data: () => ({
    error: '',
    message: 'Ho',
  }),

  mounted() {
    fetch(API_URL)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.message = result;
      });
  },

  methods: {},
};
</script>
