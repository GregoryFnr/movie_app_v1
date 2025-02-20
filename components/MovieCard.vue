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
          <div class="bottom">
            <p>
              {{ reviews }} review<span :v-if="reviews.length >= 2">s</span>
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
const props = defineProps(["movieid", "stars", "reviews", "title", "poster"]);
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

@media (max-width: 1024px) {
  .card {
    width: 250px;
  }
}
</style>

<style>
.card:hover {
  border: 1px solid var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 0 10px 0 #0000005f;
}

.card-container {
  width: 100%;
  display: block;
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
  text-align: left;
}

.info-film h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.info-film .bottom {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.info-film .bottom p {
  font-size: 0.88rem;
  color: #ffffffcf;
  margin-bottom: 2px;
}

.stars {
  position: relative;
  bottom: 0;
}

.stars-card .stars-empty {
  width: 100px;
}

@media (max-width: 640px) {
  .card .stars {
    margin-bottom: 10px;
  }
}
@media (max-width: 480px) {
  .card .card-container .info-film .bottom p {
    display: none;
  }
  .info-film .bottom {
    flex-direction: row;
    justify-content: left;
  }
  .info-film h3 {
    font-size: 0.88rem;
  }
}
</style>
