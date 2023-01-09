<script setup>
import gsap from "gsap";

const main = ref();
const ctx = ref();

onMounted(() => {
  ctx.value = gsap.context((self) => {
    const boxes = self.selector(".box");
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 450,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true
        }
      });
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <main>
    <section class="section flex-center column blue">
      <h1>Basic ScrollTrigger in Nuxt 3</h1>
      <h2>Scroll down to see the magic happen!!</h2>
    </section>
    <div
      class="section flex-center column"
      ref="main"
    >
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
    </div>
    <section class="section flex-center orange column">
      <h1>The End!</h1>
      <h2>
        For more information visit:&nbsp;
        <a
          href="https://greensock.com/scrolltrigger/"
          target="_blank"
          rel="noreferrer"
        >
          greensock.com/scrolltrigger/
        </a>
      </h2>
    </section>
  </main>
</template>

<style scoped>
.blue {
  background-color: #2c7ad2;
}

.orange {
  background-color: #e77614;
}

.blue {
  background-color: #2c7ad2;
  background-image: radial-gradient(
      circle at 47% 14%,
      rgba(205, 205, 205, 0.04) 0%,
      rgba(205, 205, 205, 0.04) 43%,
      transparent 43%,
      transparent 100%
    ),
    radial-gradient(
      circle at 35% 12%,
      rgba(215, 215, 215, 0.04) 0%,
      rgba(215, 215, 215, 0.04) 4%,
      transparent 4%,
      transparent 100%
    ),
    radial-gradient(
      circle at 1% 35%,
      rgba(24, 24, 24, 0.04) 0%,
      rgba(24, 24, 24, 0.04) 37%,
      transparent 37%,
      transparent 100%
    ),
    radial-gradient(
      circle at 21% 1%,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 26%,
      transparent 26%,
      transparent 100%
    ),
    radial-gradient(
      circle at 23% 82%,
      rgba(249, 249, 249, 0.04) 0%,
      rgba(249, 249, 249, 0.04) 60%,
      transparent 60%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 54%,
      rgba(251, 251, 251, 0.04) 0%,
      rgba(251, 251, 251, 0.04) 23%,
      transparent 23%,
      transparent 100%
    ),
    radial-gradient(
      circle at 69% 68%,
      rgba(234, 234, 234, 0.04) 0%,
      rgba(234, 234, 234, 0.04) 10%,
      transparent 10%,
      transparent 100%
    ),
    linear-gradient(90deg, #2c7ad2, #1568c6);
}

.orange {
  background-color: #e77614;
  background-image: radial-gradient(
      circle at 46% 40%,
      rgba(228, 228, 228, 0.06) 0%,
      rgba(228, 228, 228, 0.06) 13%,
      transparent 13%,
      transparent 100%
    ),
    radial-gradient(
      circle at 11% 41%,
      rgba(198, 198, 198, 0.06) 0%,
      rgba(198, 198, 198, 0.06) 19%,
      transparent 19%,
      transparent 100%
    ),
    radial-gradient(
      circle at 52% 23%,
      rgba(14, 14, 14, 0.06) 0%,
      rgba(14, 14, 14, 0.06) 69%,
      transparent 69%,
      transparent 100%
    ),
    radial-gradient(
      circle at 13% 85%,
      rgba(148, 148, 148, 0.06) 0%,
      rgba(148, 148, 148, 0.06) 44%,
      transparent 44%,
      transparent 100%
    ),
    radial-gradient(
      circle at 57% 74%,
      rgba(232, 232, 232, 0.06) 0%,
      rgba(232, 232, 232, 0.06) 21%,
      transparent 21%,
      transparent 100%
    ),
    radial-gradient(
      circle at 59% 54%,
      rgba(39, 39, 39, 0.06) 0%,
      rgba(39, 39, 39, 0.06) 49%,
      transparent 49%,
      transparent 100%
    ),
    radial-gradient(
      circle at 98% 38%,
      rgba(157, 157, 157, 0.06) 0%,
      rgba(157, 157, 157, 0.06) 24%,
      transparent 24%,
      transparent 100%
    ),
    radial-gradient(
      circle at 8% 6%,
      rgba(60, 60, 60, 0.06) 0%,
      rgba(60, 60, 60, 0.06) 12%,
      transparent 12%,
      transparent 100%
    ),
    linear-gradient(90deg, #ff7600, #ff7600);
}

html,
body {
  margin: 0;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
}

h1,
h2,
p,
li {
  max-width: 800px;
}

/* HEADER */
header {
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 6px 10px 10px 10px;
  border-bottom-right-radius: 26px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  will-change: transform;
}

a {
  text-decoration: none;
  color: #4e9815;
}

html,
body {
  height: auto;
  background-color: #1d1d1d;
  color: #fff;
  font-family: "Signika Negative", sans-serif;
}

.section {
  width: 100%;
  height: 100vh;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
  gap: 1rem;
}

.box {
  background-color: #28a92b;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 100px;
}
</style>
