<template>
  <div class="add-category">
    <h1>Add Category</h1>

    <form id="form" @submit.prevent="CheckForm">
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
          <div>
            <!--<label for="name">Name : </label>-->
            <div class="standard_input">
                <input class="form-control" id="name" v-model="name" type="text"
                name="name" autocomplete="off" placeholder="Name">
            </div>
          </div>
        </li>
      </ul>

      <p>
        <button class="btn" type="submit">Create</button>
      </p>
    </form>
  </div>
</template>

<script src='../../scripts/add/AddCategory.js'></script>
<style>
@import "../../assets/scss/form.scss";
</style>
