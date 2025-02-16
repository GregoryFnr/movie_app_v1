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

.card:hover {
  border: 1px solid var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 0 10px 0 #0000005f;
}

@media (max-width: 1024px) {
  .card {
    width: 250px;
  }
}

.info-film .bottom {
  display: flex;
  justify-content: flex-start;
}

.info-film .bottom .stars {
  width: 100%;
}
</style>
