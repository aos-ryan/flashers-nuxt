<script setup>
const { data } = await useAsyncGql('allBoulders');
</script>

<template>
<div class="sidebar">
<ul>
  <li v-for="boulder in data?.boulderCollection.items">
    <NuxtLink :to="(/boulders/ + boulder.sys.id)">{{boulder.name}}</NuxtLink>
  </li>
</ul>
</div>
<div class="main-content">
  <NuxtPage />
</div>
</template>

<style scoped>
.sidebar {
  background-color:chartreuse;
  width: 20%;
  height: 100vh;
  float: left;
}
.main-content {
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>