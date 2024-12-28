<template>
  <section class="section">
    <div class="upcoming-container">
      <h1 class="title-upcoming">Upcoming Movies</h1>
      <div class="movies-grid" @scroll="handleScroll" ref="movieListContainer">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :movieid="movie.id"
          :title="movie.title"
          :date="movie.release_date"
          :poster="movie.poster_path"
        >
        </MovieCard>
        <div v-if="loading" class="loader">Loading...</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

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
  const container = document.querySelector(".movies-grid");
  const bottom =
    container.scrollHeight - container.scrollTop <= container.clientHeight;

  if (bottom) {
    fetchMovies();
  }
};

onMounted(() => {
  console.log("Fetching movies...");
  fetchMovies(); // Vérifie que cette fonction est bien appelée
});
</script>

<style scoped>
.upcoming-container {
  padding: 20px;
}

.title-upcoming {
  margin-bottom: 10px;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  max-height: 80vh;
  overflow-y: none;
}

.loader {
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #fff;
}
</style>
