<template>
  <article>
    <p>{{ data.boulder.name }}</p>
    <p>{{ data.boulder.grade }}</p>
    <!-- <p>{{data.boulder.location.lat}}</p>
      <p>{{data.boulder.location.lon}}</p> -->
    <img :src="`${data.boulder.image?.url}`" />
    <p>{{ data.boulder.description.json.content[0].content[0].value }}</p>
    <GMapMap
      :center="{
        lat: data.boulder.location.lat,
        lng: data.boulder.location.lon
      }"
      :zoom="15"
      :options="{
        clickableIcons: false,
        disableDefaultUI: true
      }"
      style="width: 500px; height: 300px"
    >
      <GMapMarker
        :key="data.boulder.sys.id"
        :position="{
          lat: data.boulder.location.lat,
          lng: data.boulder.location.lon
        }"
      >
      </GMapMarker>
    </GMapMap>
  </article>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: "slide-right"
  }
});
const route = useRoute();

const { data } = await useAsyncGql({
  operation: "boulderById",
  variables: { id: `${route.params.id}` }
});
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
img {
  width: 250px;
  height: 250px;
}
</style>
