<template>
  <section class="section">
    <div class="container">
      <div class="search">
        <div class="search-icon">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>
        <input
          v-model="searchInput"
          type="text"
          placeholder="Search movie..."
          class="search-bar"
          @input="fetchMovies"
        />
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
      <div v-if="error">An error occurred.</div>

      <div class="movies-grid">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :movieid="movie.id"
          :title="movie.title"
          :reviews="movie.vote_count"
          :poster="movie.poster_path"
          :stars="movie.vote_average"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  hideFooter: true,
  hideSearch: true,
});

const route = useRoute();
const router = useRouter();

const searchInput = ref(route.query.query || "");
const movies = ref([]);
const loading = ref(false);
const error = ref(null);

const debouncedSearchInput = refDebounced(searchInput, 500);

const fetchMovies = async () => {
  if (!debouncedSearchInput.value) {
    movies.value = [];
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    const response = await $fetch(`/api/movies/search`, {
      query: { searchInput: debouncedSearchInput.value },
    });

    movies.value = response.results || [];
  } catch (err) {
    error.value = "Error while fetching movies.";
  } finally {
    loading.value = false;
  }
};

watch(debouncedSearchInput, (newQuery) => {
  if (newQuery) {
    fetchMovies();
  }
});

watch(searchInput, (newQuery) => {
  router.replace({ path: "/search", query: { query: newQuery } });
});

onMounted(() => {
  if (searchInput.value) {
    fetchMovies();
  }
});
</script>

<style scoped>
.section {
  margin: 10px auto;
}

.container {
  width: 100%;
}

.title-section {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.search {
  width: 75%;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar {
  font-size: 1.5rem;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: var(--bg-component);
  border-radius: 5px;
  color: #fff;
  transition: all 0.4s ease;
}

.search-bar:focus {
  outline: none;
  box-shadow: 0 20px 120px -10px var(--accent);
  background-color: inherit;
}

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  background-color: inherit;
  padding: 10px;
}

.card {
  width: auto;
  min-height: 0;
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

/* BREAKPOINTS */

@media (max-width: 1200px) {
  .movies-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    height: 100%;
  }
  .search-bar {
    font-size: 1.8rem;
  }
  .search-icon {
    font-size: 1.8rem;
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
@media (max-width: 480px) {
  .search-bar {
    font-size: 1.3rem;
  }
  .search-icon {
    font-size: 1.3rem;
  }
}
</style>
