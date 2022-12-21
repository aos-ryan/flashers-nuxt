<script setup>
const { data } = await useAsyncGql("featuredBoulders");
</script>

<template>
  <main>
    <h1>Featured Boulders</h1>
    <div class="index-container">
      <article
        class="boulder-card"
        v-for="boulder in data?.boulderCollection.items"
        :key="boulder.sys.id"
      >
        <div class="boulder-card-image">
          <img :src="`${boulder.image?.url}`" />
        </div>
        <div class="boulder-card-details">
          <p>{{ boulder.name }}</p>
          <p>{{ boulder.grade }}</p>
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
.index-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
img {
  width: 350px;
  height: 250px;
}
.boulder-card {
  display: flex;
}
.boulder-card-details {
  position: absolute;
  /* display: none; */
}
</style>
