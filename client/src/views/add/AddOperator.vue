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

      <ul>
        <li>
          <div class="" style="width:300px;">
            <input id="input-operator-name" type="text" name="operator-name"
            v-model="operatorName" placeholder="Name" autocomplete="off">
          </div>
        </li>
        <li>
          <div class="autocomplete" style="width:300px;">
            <input id="input-category-name" type="text" name="category-name"
            v-model="category" placeholder="Category" autocomplete="off">
          </div>
        </li>
      </ul>

      <p>
        <button class="btn" type="submit">Create</button>
      </p>
    </form>
  </div>
</template>


<script src='../../scripts/add/AddOperator.js'></script>

<style lang="scss">
@import "../../assets/scss/autocomplete.scss";
@import "../../assets/scss/form.scss";
</style>
