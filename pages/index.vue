<script setup>
const { data } = await useAsyncGql("featuredBoulders");
</script>

<template>
  <main>
    <h1>Featured Boulders</h1>
    <div class="index-container">
      <div v-for="boulder in data?.boulderCollection.items">
        <FeatBoulderCard
          :name="boulder.name"
          :id="boulder.sys.id"
          :grade="boulder.grade"
          :url="boulder.image?.url"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  padding-bottom: 25px;
  padding-left: 25px;
}
.index-container {
  width: 100vw;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
}
</style>
