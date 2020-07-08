<script src='../../scripts/view/View.js'></script>

<template>
  <div class="view-home">
    <h1>Select an account :</h1>
    <ul>
      <li v-if="accounts.length <= 0">No account</li>
      <li v-for='account in accounts' v-bind:key='account.id'>
        <router-link :to="{ name: 'ViewAccount', params : {
          accountId : account.id.toString(),
        } }">
          {{ account.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
