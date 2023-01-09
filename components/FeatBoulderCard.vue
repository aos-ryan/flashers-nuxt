<script setup>
const props = defineProps({
  name: String,
  id: String,
  grade: String,
  url: String,
  description: String
});
</script>
<template>
  <NuxtLink
    class="boulder_link"
    :to="/boulders/ + id"
  >
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
        <p>{{ description }}</p>
      </div>
    </article>
  </NuxtLink>
</template>

<style scoped>
article {
  height: 900px;
  width: 100%;
}
.boulder-card-image {
  width: 750px;
  height: 450px;
}
.boulder-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.boulder-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  scroll-snap-align: start;
}
.boulder-card-details {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  max-width: 100px;
}
.boulder-card-details p {
  padding-top: 1rem;
}
.boulder_link {
  text-decoration: none;
}
</style>
