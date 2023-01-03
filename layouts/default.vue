<template>
  <nav>
    <div class="navbar-container">
      <NuxtLink to="/">
        <img
          id="navbar_logo"
          src="~/assets/images/flashers.png"
        />
      </NuxtLink>
      <div class="navbar_menu">
        <NuxtLink to="/boulders">Boulders</NuxtLink>
        <NuxtLink to="/create">Create New Climb</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
    </div>
  </nav>
  <main>
    <slot />
  </main>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
}

#navbar_logo {
  width: 250px;
  height: 100px;
}

.navbar_menu {
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
