<script src='../../scripts/view/ViewAccount.js'></script>

<template>
  <div class="view-account">
    <h1>Select a year :</h1>
    <ul>
      <li v-if="years.length <= 0">Can't find any flow</li>
      <li v-for='year in years' v-bind:key='year'>
        <router-link :to="{ name: 'ChartYear', params: {
          accountId: $route.params.accountId,
          year: year.toString(),
        }}">
          {{ year }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
