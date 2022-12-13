<script setup>

</script>

<template>
<main>
  <h1>Featured Boulders</h1>
  <div class="index-container">
    <article key="one"> Boulder 1</article>
    <article key="two"> Boulder 2</article>
    <article key="three"> Boulder 3</article>
  </div>
</main>
</template>

<style scoped>
.index-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>