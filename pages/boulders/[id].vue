<template>
  <article>
    <p>{{data.boulder.name}}</p>
    <p>{{data.boulder.grade}}</p>
    <p>{{data.boulder.location.lat}}</p>
    <p>{{data.boulder.location.lon}}</p>
    <p>{{data.boulder.description.json.content[0].content[0].value}}</p>
    <img :src="`${data.boulder.image?.url}`"/>
  </article>
</template>

<script setup>
const route = useRoute()

const { data } = await useAsyncGql({
  operation: 'boulderById',
  variables: {id: `${route.params.id}`}
});
</script>

<style scoped>

img{
  width: 250px;
  height: 250px
}
</style>