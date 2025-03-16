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
  display: block;
  position: relative;
  width: 200px;
  height: 50px;
}

.logo img {
  max-width: 200px;
  height: 50px;
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
  border: 1px solid hsla(243, 100%, 93%, 0.153);
  border-radius: 5px;
  background-color: hsla(243, 100%, 93%, 0.027);
  color: hsla(243, 100%, 93%, 0.753);
  text-decoration: none;
  transition: background-color, border 0.2s;
}

.search:hover {
  border: 1px solid var(--primary);
}

@media (max-width: 640px) {
  .navbar .citation {
    display: none;
  }
  .navbar {
    justify-content: center;
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
  .navbar {
    justify-content: center;
  }
}
</style>
