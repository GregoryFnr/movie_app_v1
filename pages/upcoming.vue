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
          >
          </MovieCard>
        </TransitionGroup>
        <div v-if="loading" class="loader">Loading...</div>
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
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #fff;
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
