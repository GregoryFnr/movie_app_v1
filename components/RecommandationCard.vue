<template>
  <div class="card">
    <NuxtLink :to="`${movieid}`">
      <div class="card-container">
        <div class="poster-film">
          <img
            :src="`https://image.tmdb.org/t/p/w300/` + poster"
            alt="Poster film"
          />
        </div>
        <div class="info-film">
          <h3>
            {{ title }}
          </h3>
          <div class="bottom">
            <p>
              {{ date }}
            </p>
            <div class="stars">
              <StarsRate :value="stars" class="stars-card" />
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["movieid", "stars", "title", "date", "poster"]);
</script>

<style scoped>
.card {
  display: block;
  position: relative;
  width: auto;
  padding: 10px;
  min-height: 400px;
  border: 1px solid transparent;
  background-color: inherit;
  border-radius: 10px;
  transition: all 0.2s ease;
  animation: reveal;
  animation-timeline: view();
  animation-range-start: cover 0%;
  animation-range-end: contain 50%;
}

@keyframes reveal {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
