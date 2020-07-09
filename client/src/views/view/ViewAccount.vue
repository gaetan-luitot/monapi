<script src='../../scripts/view/ViewAccount.js'></script>

<template>
  <div class="view-account">
    <h1>Select a year :</h1>
    <ul>
      <li v-if="years.length <= 0">Can't find any flow</li>
      <div v-for='year in years' v-bind:key='year'>
        {{year}} :
        <li>
          <router-link :to="{ name: 'ChartYear', params: {
            accountId: $route.params.accountId,
            year: year.toString(),
          }}">
            + Months
          </router-link>
        </li>
        <li>
        <router-link :to="{ name: 'PieChartYear', params: {
          accountId: $route.params.accountId,
          year: year.toString(),
        }}">
          + Categories
        </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>
