<template>
<div>
  <form 
  @submit.prevent
  class="add-boulder-form"
  >
  <div class="form-input">
    <label>Name: </label>
      <input v-model="name" />
      <a @click="generateResponse" 
      class="generate-button"
      >
      Generate Name
    </a>
  </div>  
  <div class="form-input">
    <label>Grade: </label>
    <input v-model="grade" />
  </div>
  <div class="form-input">
    <label>Description: </label>
    <input v-model="description" />
  </div>
</form>
</div>

</template>

<script setup>
const name = ref('');

async function generateResponse () {
  const { data } = await useFetch('/api/openai');
  name.value = data.value.choices[0].text;
}
</script>

<style scope>
.add-boulder-form {
  display: flex;
  flex-direction: column;
  width: 33%;
}
.form-input {
  margin-top: 1rem;
}
.generate-button {
  border-style: solid;
  border-width : 1px 1px 1px 1px;
  text-decoration : none;
  padding : 4px;
  border-color : #000000;
  cursor: pointer;
  margin-left: 1rem;
}
</style>