<script setup>
import gsap from "gsap";
const { data } = await useAsyncGql("featuredBoulders");
const elements = ref([]);

// definePageMeta({
//   pageTransition: false,
//   layoutTransition: false
// });

onMounted(() => {
  const boxes = Object.values(elements.value);
  boxes.forEach((box) => {
    console.log(box);
    gsap.from(box, {
      x: -2000,
      scrollTrigger: {
        trigger: box,
        start: "top center"
      }
    });
  });
  // gsap.from(".boulder-box", { x: -500 });
});
</script>

<template>
  <main>
    <div class="title-card">
      <h1>Featured Boulders</h1>
    </div>
    <div class="index-container">
      <div
        v-for="boulder in data?.boulderCollection.items"
        ref="elements"
        class="boulder-box"
        :class="boulder.sys.id"
      >
        <FeatBoulderCard
          :name="boulder.name"
          :id="boulder.sys.id"
          :grade="boulder.grade"
          :url="boulder.image?.url"
          :description="boulder.description.json.content[0].content[0].value"
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
.title-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.index-container {
  width: 100vw;
  max-height: 100vh;
  /* overflow-y: scroll; */
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
}
</style>
