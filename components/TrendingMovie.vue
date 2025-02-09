<template>
  <section class="section trending-movie">
    <NuxtLink :to="`movies/${movie.id}`">
      <div class="title-section">
        <h2>Suggestion of the month</h2>
      </div>
      <div class="more">
        <NuxtLink :to="`movies/${movie.id}`" class="more-link">More</NuxtLink>
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
            <h1>{{ movie.title }}</h1>
          </div>
          <StarsRate :value="movie.vote_average" />
          <div class="overview">
            <p>{{ movie.overview.slice(0, 300) }}...</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>

<script setup>
const { data: movie } = await useFetch("/api/movies/trending-movie");
</script>

<style scoped>
.section {
  margin: 0 auto;
}

.stars {
  position: relative;
  height: 30px;
}

.trending-movie {
  background-color: hsla(243, 100%, 93%, 0.027);
  padding: 25px;
  border-radius: 5px;
}

.trending-movie-container {
  position: relative;
  height: 30vh;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: all 0.5s ease;
}

.trending-movie-container:hover {
  height: 35vh;
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
}

.title {
  width: 100%;
  margin-bottom: 10px;
  text-align: start;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.871);
}

.overview {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.871);
}
</style>
