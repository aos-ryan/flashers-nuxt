<script setup>
// definePageMeta({
//   pageTransition: {
//     name: "slide-right"
//   }
// });
const { data } = await useAsyncGql("allBoulders");
</script>

<template>
  <main>
    <div class="sidebar">
      <ul>
        <li v-for="boulder in data?.boulderCollection.items">
          <NuxtLink
            class="boulder_link"
            :to="/boulders/ + boulder.sys.id"
            >{{ boulder.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="main-content">
      <NuxtPage />
    </div>
  </main>
</template>

<style scoped>
.sidebar {
  background-color: rgb(125, 129, 122);
  width: 20%;
  height: 100vh;
  float: left;
}
li {
  padding: 1rem 1rem;
}
.main-content {
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.boulder_link {
  text-decoration: none;
  display: block;
  font-size: 22px;
  z-index: 1;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #131313, #131313 50%, #fff 50%);
  background-size: 200% 100%;
  background-position: 100%;
  transition: all 0.3s ease-in-out;
}
.boulder_link:before {
  display: block;
  content: "";
  width: 0;
  height: 3px;
  bottom: 5px;
  left: 0;
  bottom: -3px;
  z-index: 0;
  position: absolute;
  /* background: #23abd4; */
  transition: all 0.3s ease-in-out;
}
.boulder_link:hover {
  background-position: 0%;
}

@media screen and (max-width: 960px) {
  .boulder_link {
    font-size: 15px;
  }
  .sidebar {
    min-width: fit-content;
  }
}
</style>
