<template>
  <div class="add-account">
    <h1>Add Account</h1>

    <form id="add-account-form" @submit.prevent="CheckForm">
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
          <div class="autocomplete standard_input">
            <input id="input-operator-name" class="form-control" type="text" name="operator-name"
            v-model="operator" placeholder="Operator" autocomplete="off">
          </div>
        </li>
      </ul>

      <p>
        <button class="btn" type="submit">Create</button>
      </p>
    </form>
  </div>
</template>


<script src='../../scripts/add/AddAccount.js'></script>

<style lang="scss">
@import "../../assets/scss/autocomplete.scss";
@import "../../assets/scss/form.scss";
</style>
