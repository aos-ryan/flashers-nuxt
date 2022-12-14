<template>
  <nav>
    <NuxtLink to="/">
    <img src="~/assets/images/flashers.png"/>
    </NuxtLink>
    <NuxtLink to="/boulders"> 
      <div>Boulders</div> 
    </NuxtLink>
    <NuxtLink to="/learn"> 
      <div>Learn</div>
    </NuxtLink>
    <NuxtLink to="/about"> 
      <div>About</div>
    </NuxtLink>
  </nav>
  <main>
    <slot />
  </main>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
img {
  width: 250px;
  height: 100px;
}
</style>