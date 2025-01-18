<template>
  <header>
    <div class="navbar">
      <NuxtLink to="/" class="logo">
        <img src="/public/logo-cinema.png" alt="Logo" />
      </NuxtLink>
      <div class="citation">
        <p>Enjoy films and discover new ones</p>
      </div>
    </div>
  </header>
  <main>
    <slot></slot>
  </main>
  <Footer />
</template>

<script setup></script>

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
}

.logo img {
  max-width: 100px;
}

.citation {
  display: block;
  position: relative;
}
</style>
