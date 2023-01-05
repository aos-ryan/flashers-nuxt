<script setup>
const isActive = ref(false);

function handleMenuSelect() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <nav>
    <div class="navbar-container">
      <NuxtLink to="/">
        <img
          id="navbar_logo"
          src="~/assets/images/flashers.png"
        />
      </NuxtLink>
      <div
        class="navbar_toggle"
        :class="{ active: isActive }"
        id="mobile_menu"
        @click="handleMenuSelect"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div
        class="navbar_menu"
        :class="{ active: isActive }"
      >
        <NuxtLink
          to="/"
          class="navbar_link"
          id="home_link"
          @click="handleMenuSelect"
          >Home
        </NuxtLink>
        <NuxtLink
          to="/boulders"
          class="navbar_link"
          @click="handleMenuSelect"
          >Boulders</NuxtLink
        >
        <NuxtLink
          to="/create"
          class="navbar_link"
          @click="handleMenuSelect"
          >Create New Climb</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="navbar_link"
          @click="handleMenuSelect"
          >About</NuxtLink
        >
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
  background: #131313;
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
  width: 75%;
  height: 75%;
  padding-top: 1rem;
}

.navbar_menu {
  display: flex;
  align-items: center;
  text-align: center;
}

.navbar_link {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
}
.navbar_link:hover {
  color: #8a8f99;
  transition: all 0.3s ease;
}
#home_link {
  display: none;
}

@media screen and (max-width: 960px) {
  .navbar-container {
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0;
  }
  .navbar_menu {
    display: grid;
    grid-template-columns: auto;
    margin: 0;
    width: 100%;
    position: absolute;
    top: -1000px;
    opacity: 0;
    transition: all 0.5s ease;
    height: 50vh;
    z-index: -1;
  }
  .navbar_menu.active {
    background: #131313;
    top: 100%;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 99;
    height: 50vh;
    font-size: 1.6rem;
  }

  #navbar_logo {
    width: 75%;
    height: 75%;
    padding-left: 25px;
  }
  #home_link {
    display: flex;
  }
  .navbar_toggle .bar {
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background: #fff;
  }
  .navbar_item {
    width: 100%;
  }
  .navbar_link {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }

  #mobile_menu {
    position: absolute;
    top: 20%;
    right: 5%;
    transform: translate(5%, 20%);
  }
  .navbar_toggle .bar {
    display: block;
    cursor: pointer;
  }
  #mobile_menu.active .bar:nth-child(2) {
    opacity: 0;
  }

  #mobile_menu.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #mobile_menu.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
