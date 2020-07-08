<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/view">View</router-link>
      <router-link to="/add">Add</router-link>
    </nav>

    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
