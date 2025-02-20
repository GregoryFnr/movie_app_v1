<template>
  <header>
    <div class="navbar">
      <NuxtLink to="/" class="logo">
        <img src="/public/logo-cinema.png" alt="Logo" />
      </NuxtLink>
      <div class="citation">
        <p style="font-style: italic">Cinema is truth 24 frames per second.</p>
      </div>
    </div>
  </header>
  <main>
    <slot></slot>
  </main>
  <client-only>
    <Footer />
  </client-only>
</template>

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
  width: 100px;
  height: 50px;
}

.logo img {
  max-width: 100px;
  height: 50px;
}

.citation {
  display: block;
  position: relative;
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
