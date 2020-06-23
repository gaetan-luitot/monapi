<template>
  <div class="add-operator">
    <h1>Add Operator</h1>

    <form id="add-operator-form" @submit.prevent="CheckForm">
      <div class="row j-c-center">
        <div v-if="errors && errors.length" class="alert alert-error col c6">
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </div>

        <div v-if="success && success.length" class="alert alert-success col c6">
          {{ success }}
        </div>
      </div>

      <div>
        <label for="name">Name : </label>
        <input class="form-control" id="name" v-model="name" type="text" name="name">
      </div>
      <div>
        <label for="category">Category : </label>
        <!--<div class="autocomplete">
          <input class="form-control" id="category-input" v-model="category"
          type="text" name="category">
        </div>-->
        <div class="autocomplete" style="width:300px;">
          <input id="myInput" type="text" name="myCountry" placeholder="Country">
        </div>
      </div>

      <p>
        <button class="btn" type="submit">Create</button>
      </p>
    </form>
  </div>
</template>


<script src='../../scripts/add/AddOperator.js'></script>

<style lang="scss">
@import "../../assets/scss/autocomplete.scss";
</style>
