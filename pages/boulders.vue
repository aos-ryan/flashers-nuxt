<script setup>

</script>
<template>
<div class="sidebar">
<ul>
  <li>
    <NuxtLink to="/boulders/1">Boulder 1</NuxtLink>
  </li>
  <li>
    <NuxtLink to="/boulders/2">Boulder 2</NuxtLink>
  </li>
  <li>
    <NuxtLink to="/boulders/3">Boulder 3</NuxtLink>
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