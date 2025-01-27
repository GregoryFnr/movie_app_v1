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
            <div v-for="genre in genres" :key="genre.id">
              {{ genre.name }}
            </div>
            <p>
              {{ date }}
            </p>
            <p>
              {{ date }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["movieid", "title", "genres", "date", "poster"]);
</script>

<style scoped>
.card {
  display: block;
  position: relative;
  width: 250px;
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

.card:hover {
  border: 1px solid var(--primary);
  transform: translateY(-3px);
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
  flex-direction: row;
  justify-content: space-between;
}

.info-film .bottom p {
  font-size: 0.88rem;
  color: #ffffffcf;
  margin-bottom: 2px;
}
</style>
