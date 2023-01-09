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
        <select v-model="grade">
          <option>V1</option>
          <option>V2</option>
          <option>V3</option>
          <option>V4</option>
          <option>V5</option>
          <option>V6</option>
          <option>V7</option>
          <option>V8</option>
          <option>V9</option>
          <option>V10</option>
        </select>
      </div>
      <div class="form-input">
        <label>Description: </label>
        <input v-model="description" />
      </div>
      <div class="add-photo">
        <a
          class="photo-button"
          @click="startCamera"
        >
          Turn on Camera
        </a>
      </div>
    </form>
    <div class="camera-capture">
      <video id="video">
        Press the take photo button to allow acesss to your camera
      </video>
      <a
        class="photo-button"
        @click="capturePhoto"
        >Take Photo</a
      >
    </div>
    <canvas id="canvas"></canvas>
    <div class="output">
      <img
        id="photo"
        alt="The screen capture will appear in this box"
      />
    </div>
  </div>
</template>

<script setup>
const name = ref("");
const grade = ref("");
const description = ref("");
const photoWidth = ref(300);
const photoHeight = ref(300);

async function generateResponse() {
  const { data } = await useFetch("/api/openai");
  name.value = data.value.choices[0].text;
}

function startCamera() {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
      canvas.setAttribute("width", video.width);
      photoWidth.value = video.width;
      canvas.setAttribute("height", video.height);
      photoHeight.value = video.height;
    })
    .catch((err) => {
      console.log(err);
    });
}

function capturePhoto() {
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, photoWidth, photoHeight);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
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

.photo-button {
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
