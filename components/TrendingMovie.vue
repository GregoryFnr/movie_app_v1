<template>
  <section class="section trending-movie">
    <NuxtLink :to="`movies/${movie.id}`">
      <div class="title-section">
        <h2>Suggestion of the month</h2>
      </div>
      <div class="more">
        <p class="more-link">More</p>
      </div>
      <div
        class="trending-movie-container"
        :style="{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      >
        <div class="title-trending-movie">
          <div class="title">
            <h2>{{ movie.title }}</h2>
          </div>
          <div class="row">
            <StarsRate :value="movie.vote_average" />
            <div class="reviews">{{ movie.vote_count }} reviews</div>
            <div class="date">Released on {{ movie.release_date }}</div>
            <div class="trending-card">
              <p class="font-effect">Trending</p>
            </div>
          </div>
          <div class="overview">
            <p>{{ movie.overview.slice(0, 300) }}...</p>
          </div>
        </div>
      </div>
    </NuxtLink>
    <Transition name="fadeUp">
      <TrailerModal
        v-if="showModal"
        :showModal="showModal"
        @close="closeModal"
      />
    </Transition>
  </section>
</template>

<script setup>
const { data: movie } = await useFetch("/api/movies/trending-movie");
const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<style scoped>
.section {
  margin: 0 auto;
}

.trending-movie {
  background-color: hsla(243, 100%, 93%, 0.027);
  padding: 25px;
  border-radius: 5px;
}

.trending-movie:hover .more-link {
  color: var(--accent);
}

.trending-movie-container {
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: all 0.5s ease;
  z-index: -2;
}

.title-trending-movie {
  position: relative;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  background: linear-gradient(
    to right,
    #000000ea,
    #000000c7,
    #000000a2,
    #00000075,
    transparent
  );
  z-index: -2;
}

.title {
  width: 100%;
  margin-bottom: 5px;
  text-align: start;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.871);
}

.title h2 {
  font-size: 2.2rem;
}

.overview {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.871);
}

.trending-card {
  position: relative;
  width: auto;
  border: none;
  padding: 3px 10px;
  border-radius: 5px;
  background: black;
}

.font-effect {
  background: linear-gradient(
    120deg,
    var(--primary),
    var(--primary),
    var(--accent)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.88rem;
  font-weight: 500;
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.trending-card::after,
.trending-card::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(
    from var(--angle),
    var(--accent),
    var(--primary),
    var(--accent)
  );
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 2px;
  border-radius: 5px;
  animation: 5s spin linear infinite;
}

.trending-card::before {
  filter: blur(1.3rem);
  opacity: 0.5;
}

@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}

/*BREAKPOINTS*/

@media (max-width: 1200px) {
  .title h2 {
    font-size: 1.9rem;
  }
}

@media (max-width: 768px) {
  .overview {
    display: none;
  }
  .trending-movie-container {
    height: 30vh;
  }
  .title-trending-movie {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .row {
    height: auto;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: start;
    row-gap: 5px;
  }
  .trending-card p,
  .row .reviews,
  .row .date {
    font-size: 0.78rem;
  }
  .stars {
    margin-bottom: 20px;
  }

  .trending-card {
    margin-top: 5px;
  }
  .title-section h2 {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .title h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .title h2 {
    font-size: 1.1rem;
  }
  .trending-card p {
    font-size: 0.68rem;
  }
}
</style>
