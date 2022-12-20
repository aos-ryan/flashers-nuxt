<template>
  <div>
    <form
      @submit.prevent
      class="add-boulder-form"
    >
      <div class="form-input">
        <label>Name: </label>
        <input v-model="name" />
        <a
          @click="generateResponse"
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
      <div class="add-photo">
        <a
          id="take-photo"
          @click="takePhoto"
        >
          Take photo
        </a>
      </div>
    </form>
  </div>
</template>

<script setup>
const name = ref("");
const grade = ref("");
const description = ref("");
const uploadValue = ref("");

async function generateResponse() {
  const { data } = await useFetch("/api/openai");
  name.value = data.value.choices[0].text;
}

function takePhoto() {
  console.log("clicked!");
  navigator.mediaDevices.getUserMedia({ video: true });
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
  border-width: 1px 1px 1px 1px;
  text-decoration: none;
  padding: 4px;
  border-color: #000000;
  cursor: pointer;
  margin-left: 1rem;
}

.add-photo {
  margin-top: 1rem;
}

#take-photo {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  text-decoration: none;
  padding: 4px;
  border-color: #000000;
  cursor: pointer;
  margin-left: 1rem;
}
.upload {
  margin-top: 1rem;
}
</style>
