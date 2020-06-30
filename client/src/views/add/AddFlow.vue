<template>
  <div class="add-flow">
    <h1>Add Flow</h1>

    <form id="add-flow-form" @submit.prevent="CheckForm">
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
          <div class="autocomplete small_input">
            <input id="input-flow-account" class="form-control" type="text" name="account-name"
            v-model="account" placeholder="Account" autocomplete="off">
          </div>
          <a v-if="to" class="swap" @click="to = false">></a>
          <a v-if="!to" class="swap" @click="to = true">&lt;</a>
          <div class="autocomplete small_input">
            <input id="input-flow-operator" class="form-control" type="text" name="operator-name"
            v-model="operator" placeholder="Operator" autocomplete="off">
          </div>
        </li>
        <li>
          <div class="standard_input">
            <input id="input-flow-what" class="form-control" type="text" name="what"
            v-model="what" placeholder="What" autocomplete="off">
          </div>
        </li>
        <li>
          <div class="autocomplete standard_input">
            <input id="input-flow-category" class="form-control" type="text" name="category"
            v-model="category" placeholder="Category" autocomplete="off">
          </div>
        </li>
        <li>
          <div class="standard_input">
            <input id="input-flow-amount" class="form-control" type="text" name="amount"
            v-model="amount" placeholder="Amount (10.00 €)" autocomplete="off"
            pattern="^[0-9]*?((,|.)([0-9]){1,2}$)">
          </div>
        </li>
        <li>
          <div class="autocomplete standard_input">
            <input id="input-flow-mean" class="form-control" type="text" name="mean"
            v-model="mean" placeholder="Mean" autocomplete="off">
          </div>
        </li>
        <li>
          <div class="standard_input">
            <input id="input-flow-date" class="form-control" type="date" name="date"
            v-model="date" autocomplete="off">
          </div>
        </li>
      </ul>

      <p>
        <button class="btn" type="submit">Create</button>
      </p>
    </form>
  </div>
</template>


<script src='../../scripts/add/AddFlow.js'></script>

<style lang="scss">
@import "../../assets/scss/autocomplete.scss";
@import "../../assets/scss/form.scss";
</style>
