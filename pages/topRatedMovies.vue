<script setup>
const movies = ref([]);
const page = ref(1);
const loading = ref(false);
const selectedGenre = ref("");

const genreMap = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

const filteredMovies = computed(() => {
  if (!selectedGenre.value) return movies.value;
  return movies.value.filter((movie) =>
    movie.genre_ids.includes(genreMap[selectedGenre.value])
  );
});

const fetchMovies = async () => {
  if (loading.value) return;
  loading.value = true;

  try {
    const response = await $fetch(`/api/movies/top-rated?page=${page.value}`);
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

<template>
  <section class="section">
    <div class="upcoming-container">
      <h1 class="title-upcoming">Top rated movies</h1>
      <div class="filter-container">
        <h2 class="title-filter">Filter by genre</h2>
        <div class="filter-btn-container">
          <div class="filter-btn">Action</div>
          <div class="filter-btn">Adventure</div>
          <div class="filter-btn">Science Fiction</div>
          <div class="filter-btn">Comedy</div>
        </div>
      </div>
      <!--<SortSelect v-model="selectedGenre" />-->
      <div class="movies-grid">
        <MovieCard
          v-for="movie in filteredMovies"
          :key="movie.id"
          :movieid="movie.id"
          :title="movie.title"
          :reviews="movie.vote_count"
          :poster="movie.poster_path"
          :stars="movie.vote_average"
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
    </div>
  </section>
</template>

<style scoped>
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

.filter-container {
  margin: 20px 0;
  display: flex;
  align-items: start;
  flex-direction: column;
  color: #fff;
}

.title-filter {
  margin-bottom: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  font-style: italic;
  color: #fff;
}

.filter-btn-container {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  gap: 10px;
  color: #fff;
}

.filter-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 0.88rem;
  color: #fff;
  padding: 10px 25px;
  border: none;
  background-color: hsla(243, 100%, 93%, 10%);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.filter-btn:hover {
  background-color: hsla(243, 100%, 93%, 0.224);
}

.filter-btn:active {
  background-color: hsla(243, 100%, 93%, 0.224);
}

/*BREAKPOINTS*/

@media (max-width: 640px) {
  .title-upcoming {
    font-size: 1.2rem;
  }
}
</style>
