<template>
  <header>
    <div class="navbar">
      <NuxtLink to="/" class="logo">
        <img src="" alt="Logo" />
      </NuxtLink>
      <div class="citation">
        <p>Lorem ipsum dolor sit amet.</p>
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
  height: 75px;
  background-color: transparent;
  border-bottom: 1px solid #ffffff;
}

.navbar {
  width: 100%;
  top: 0;
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px;
}

.logo {
  display: block;
  position: relative;
  width: 150px;
}

.citation {
  display: block;
  position: relative;
}
</style>
