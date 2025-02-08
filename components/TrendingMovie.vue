<template>
  <section class="section trending-movie">
    <NuxtLink :to="`movies/${route.params.id}`" />
    <div class="title-section">
      <h2>Suggestion of the month</h2>
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
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.overview.slice(0, 300) }}<span>...</span></p>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();

const { data: movie } = await useFetch("/api/movies/trending-movie");
</script>

<style scoped>
.section {
  margin: 0 auto;
}

.trending-movie .title-section {
  margin-bottom: 15px;
}

.trending-movie {
  background-color: hsla(243, 100%, 93%, 0.027);
  padding: 50px;
  border-radius: 5px;
}

.trending-movie-container {
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

.title-trending-movie {
  text-align: start;
  padding: 15px;
  border-radius: 5px;
}
</style>
