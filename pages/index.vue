<script setup>
const { data } = await useAsyncGql('featuredBoulders');

</script>

<template>
<main>
  <h1>Featured Boulders</h1>
  <div class="index-container">
    <article class="boulder-card"
    v-for="boulder in data?.boulderCollection.items" 
    :key="boulder.sys.id"
    >
    <p>{{boulder.name}}</p>
    <p>{{boulder.grade}}</p>
    <p>{{boulder.location.lat}}</p>
    <p>{{boulder.location.lon}}</p>
    <p>{{boulder.description.json.content[0].content[0].value}}</p>
    <img :src="`${boulder.image?.url}`"/>
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
img{
  width: 250px;
  height: 250px
}
</style>