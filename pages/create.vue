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
          @click="toggleCamera"
        >
          Toggle camera
        </a>
      </div>
    </form>
    <div class="camera-container">
      <div
        class="camera-capture"
        v-show="isCameraOpen"
      >
        <video
          id="video"
          v-show="!isPhotoTaken"
          :width="450"
          :height="337.5"
        >
          Press the take photo button to allow acesss to your camera
        </video>
        <canvas
          id="canvas"
          v-show="isPhotoTaken"
          :width="450"
          :height="337.5"
        ></canvas>
        <a
          class="capture-button"
          @click="capturePhoto"
        >
          <p v-if="!isPhotoTaken">Take Photo</p>
          <p v-if="isPhotoTaken">Retake Photo</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const name = ref("");
const grade = ref("");
const description = ref("");
const isCameraOpen = ref(false);
const isPhotoTaken = ref(false);
const isShotPhoto = ref(false);
const isLoading = ref(false);

async function generateResponse() {
  const { data } = await useFetch("/api/openai");
  name.value = data.value.choices[0].text;
}
function toggleCamera() {
  if (isCameraOpen.value) {
    isCameraOpen.value = false;
    isPhotoTaken.value = false;
    isShotPhoto.value = false;
    stopCamera();
  } else {
    isCameraOpen.value = true;
    startCamera();
  }
}
function startCamera() {
  isLoading.value = true;
  const video = document.getElementById("video");

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      isLoading.value = false;
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.log(err);
    });
}

function stopCamera() {
  const video = document.getElementById("video");
  let tracks = video.srcObject.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });
}

function capturePhoto() {
  const canvas = document.getElementById("canvas");
  const video = document.getElementById("video");
  const context = canvas.getContext("2d");
  isPhotoTaken.value = !isPhotoTaken.value;
  context.drawImage(video, 0, 0, 450, 337.5);
  console.log("Photo capture button pressed");
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

.camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 500px;
}

.camera-capture {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.capture-button {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  text-decoration: none;
  padding: 4px;
  margin-top: 1rem;
  border-color: #000000;
  cursor: pointer;
  border-radius: 10%;
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
