<template>
  <div class="add-home">
    <ul>
      <li><router-link :to="{ name: 'AddFlow' }" >Add flow</router-link></li>
      <li><router-link :to="{ name: 'AddOperator' }" >Add operator</router-link></li>
      <li><router-link :to="{ name: 'AddCategory' }" >Add category</router-link></li>
      <li><router-link :to="{ name: 'AddAccount' }" >Add account</router-link></li>
      <li><router-link :to="{ name: 'AddMean' }" >Add mean</router-link></li>
    </ul>
  </div>
</template>
