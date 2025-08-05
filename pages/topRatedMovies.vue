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

const filterByGenre = (genreName) => {
  selectedGenre.value = genreName;
};

const resetFilter = () => {
  selectedGenre.value = "";
};

const filteredMovies = computed(() => {
  if (!selectedGenre.value) return movies.value;
  const genreId = genreMap[selectedGenre.value];
  return movies.value.filter((movie) => movie.genre_ids.includes(genreId));
});

const showGenreModal = ref(false);

const openGenreModal = () => {
  showGenreModal.value = true;
};

const closeGenreModal = () => {
  showGenreModal.value = false;
};

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
          <button
            type="button"
            class="filter-btn"
            :class="{ active: selectedGenre === 'Action' }"
            @click="filterByGenre('Action')"
          >
            Action
          </button>
          <button
            type="button"
            class="filter-btn"
            :class="{ active: selectedGenre === 'Adventure' }"
            @click="filterByGenre('Adventure')"
          >
            Adventure
          </button>
          <button
            type="button"
            class="filter-btn"
            :class="{ active: selectedGenre === 'Horror' }"
            @click="filterByGenre('Horror')"
          >
            Horror
          </button>
          <button type="button" class="filter-btn" @click="openGenreModal">
            Select genre
          </button>
          <!-- Bouton dynamique si un genre est sélectionné -->
          <button
            type="button"
            v-if="selectedGenre"
            class="filter-btn selected-filter"
            @click="resetFilter"
          >
            {{ selectedGenre }} <font-awesome-icon :icon="['fas', 'xmark']" />
          </button>
          <button class="filter-btn-reset" @click="resetFilter">Reset</button>
        </div>
      </div>
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
    <transition name="fadeUp">
      <!-- Genre Modal -->
      <div
        v-if="showGenreModal"
        class="modal-overlay"
        @click.self="closeGenreModal"
      >
        <div class="modal-content">
          <h3>Select a genre</h3>
          <div class="modal-genres">
            <button
              type="button"
              v-for="(id, name) in genreMap"
              :key="id"
              class="filter-btn"
              @click="
                filterByGenre(name);
                closeGenreModal();
              "
            >
              {{ name }}
            </button>
          </div>
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            class="close-btn"
            @click="closeGenreModal"
          />
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
/*TRANSITIONS*/

:global(.fadeUp-enter-active),
:global(.fadeUp-leave-active) {
  transition: all 0.3s ease;
}

:global(.fadeUp-enter-from),
:global(.fadeUp-leave-to) {
  opacity: 0;
  transform: translateY(50px);
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  gap: 10px;
  color: #fff;
}

.filter-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
  color: #fff;
  padding: 10px 25px;
  border: none;
  background-color: var(--bg-component);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.filter-btn-reset {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 0.88rem;
  color: #fff;
  padding: 10px 25px;
  border: none;
  background-color: var(--accent);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.filter-btn:hover {
  background-color: var(--bg-component-hover);
}

.filter-btn-reset:hover {
  background-color: var(--accent-hover);
}

.filter-btn-reset:active {
  transition: none;
  background-color: #c85f45b9;
}

.filter-btn.active {
  background-color: var(--bg-component-hover);
}

.selected-filter {
  background-color: var(--bg-component-hover);
  color: white;
  border: none;
}

/*MODAL*/

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal-content {
  position: absolute;
  background: #111;
  color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 350px;
  width: 90%;
}

.modal-genres {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 0;
}

.close-btn {
  background: var(--bg-component);
  color: #fff;
  position: absolute;
  width: 15px;
  height: 15px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  top: 0;
  right: 0;
  cursor: pointer;
}

.close-btn:hover {
  background-color: var(--bg-component-hover);
}

/*BREAKPOINTS*/

@media (max-width: 640px) {
  .title-upcoming {
    font-size: 1.2rem;
  }
  .filter-btn-container {
    gap: 7px;
    margin-bottom: 0;
  }
}
</style>
