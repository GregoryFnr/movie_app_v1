<template>
  <header>
    <div class="navbar">
      <NuxtLink to="/" class="logo">
        <img src="/public/logo.png" alt="Logo" />
      </NuxtLink>
      <div class="citation">
        <p style="font-style: italic">Cinema is truth 24 frames per second.</p>
      </div>
      <NuxtLink to="/search" class="search" v-if="!route.meta.hideSearch"
        ><ClientOnly
          ><span class="search-icon"
            ><font-awesome-icon
              :icon="['fas', 'magnifying-glass']" /></span></ClientOnly
        >Search movies
      </NuxtLink>
    </div>
  </header>
  <main>
    <slot></slot>
  </main>
  <client-only>
    <Footer v-if="!route.meta.hideFooter" />
  </client-only>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
header {
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid hsla(243, 100%, 93%, 0.153);
}

.navbar {
  width: 100%;
  top: 0;
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
}

.logo {
  display: flex;
  position: relative;
  max-width: 200px;
  height: 50px;
}

.logo img {
  width: 100%;
}

.citation {
  display: block;
  position: relative;
}

.citation p {
  font-style: italic;
  font-size: 0.88rem;
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  font-size: 0.88rem;
  position: relative;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: var(--bg-component);
  color: #fff;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.search:hover {
  background-color: var(--bg-component-hover);
}

@media (max-width: 640px) {
  .navbar .citation {
    display: none;
  }
  .navbar {
    justify-content: space-evenly;
  }
  .search {
    padding: 5px 10px;
    font-size: 0.78rem;
  }
}
@media (max-width: 480px) {
  .navbar .citation {
    display: none;
  }
  .logo {
    width: auto;
    height: 35px;
  }
  .logo img {
    height: 35px;
  }
}
</style>
