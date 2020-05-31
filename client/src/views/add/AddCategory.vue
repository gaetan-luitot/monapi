<template>
  <div class="add-category">
    <h1>Add Category</h1>
    <form id="form" @submit.prevent="CheckForm">
      <p v-if="errors && errors.length > 0">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
      </p>

      <div>
        <label for="name">Name : </label>
        <input id="name" v-model="name" type="text" name="name">
      </div>

      <p>
        <input type="submit" value="Créer">
      </p>

    </form>
  </div>
</template>

<script src='../../scripts/add/AddCategory.js'></script>
