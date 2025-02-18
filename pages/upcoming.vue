<template>
  <section class="section">
    <div class="upcoming-container">
      <h1 class="title-upcoming">Upcoming Movies</h1>
      <div class="movies-grid">
        <TransitionGroup name="fadeIn" appear>
          <MovieCard
            v-for="movie in movies"
            :key="movie.id"
            :movieid="movie.id"
            :title="movie.title"
            :date="movie.release_date"
            :poster="movie.poster_path"
            :stars="movie.vote_average"
          />
        </TransitionGroup>
      </div>
      <div v-if="loading" class="loader">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <radialGradient
            id="a12"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stop-color="#326EBD"></stop>
            <stop offset=".3" stop-color="#326EBD" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#326EBD" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#326EBD" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#326EBD" stop-opacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a12)"
            stroke-width="10"
            stroke-linecap="round"
            stroke-dasharray="200 1000"
            stroke-dashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur=".8"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#326EBD"
            stroke-width="10"
            stroke-linecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
        <span>Loading...</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const movies = ref([]);
const page = ref(1);
const loading = ref(false);

const fetchMovies = async () => {
  if (loading.value) return;
  loading.value = true;

  try {
    const response = await $fetch(`/api/movies?page=${page.value}`);
    if (response && response.results) {
      movies.value = [...movies.value, ...response.results];
      page.value += 1;
    }
  } catch (error) {
    console.error("Erreur lors du chargement des films :", error);
  } finally {
    loading.value = false;
  }
};

const handleScroll = () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const threshold = document.documentElement.offsetHeight - 100;

  if (scrollPosition >= threshold) {
    fetchMovies();
  }
};

onMounted(() => {
  fetchMovies();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: all 0.5s ease;
}

.fadeIn-enter-from,
.fadeIn-leave-to {
  opacity: 0;
  transform: translateX(15px);
}

.card {
  width: auto;
  min-height: 0;
}

.upcoming-container {
  padding: 20px;
}

.title-upcoming {
  margin-bottom: 10px;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.loader {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  column-gap: 2px;
  font-size: 16px;
  color: #fff;
  margin: 0 auto;
}

.loader svg {
  width: 50px;
}

.loader span {
  font-size: 0.88rem;
}

/*BREAKPOINTS*/

@media (max-width: 1200px) {
  .movies-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    height: 100%;
  }
}

@media (max-width: 768px) {
  .movies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    height: 100%;
  }
}

@media (max-width: 640px) {
  .movies-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3px;
    row-gap: 6px;
    height: 100%;
  }
}

@media (max-width: 640px) {
  .title-upcoming {
    font-size: 1.2rem;
  }
}
</style>
