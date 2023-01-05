<script setup>
const props = defineProps({
  name: String,
  id: String,
  grade: String,
  url: String
});
</script>
<template>
  <article
    class="boulder-card"
    :key="id"
  >
    <div class="boulder-card-image">
      <img :src="`${url}`" />
    </div>
    <div class="boulder-card-details">
      <p>{{ name }}</p>
      <p>{{ grade }}</p>
    </div>
  </article>
</template>

<style scoped>
article {
  height: 500px;
  width: 100%;
}
img {
  width: 350px;
  height: 250px;
}
.boulder-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.boulder-card-details {
  display: flex;
  flex-direction: column;
}
</style>
