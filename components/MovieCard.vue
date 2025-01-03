<template>
  <div class="card">
    <NuxtLink :to="`movies/${movieid}`">
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
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(["movieid", "title", "date", "poster"]);
</script>

<style scoped>
.card {
  display: block;
  position: relative;
  width: 250px;
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
    transform: translateY(50px);
    opacity: 0.2;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.card:hover {
  border: 1px solid var(--primary);
  transform: translateY(-3px);
}

.card-container {
  width: 100%;
  display: block;
  padding: 10px;
}

.poster-film {
  width: 100%;
  height: 100%;
}

.poster-film img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.info-film {
  width: 100%;
  text-align: center;
}

.info-film h3 {
  font-size: 1.11rem;
  font-weight: 600;
  margin-bottom: 2px;
}
</style>
