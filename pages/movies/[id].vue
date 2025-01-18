<template>
  <div>
    <MovieDetails
      :title="movie.title"
      :date="movie.release_date"
      :poster="movie.poster_path"
      :runtime="movie.runtime"
      :overview="movie.overview"
      :stars="movie.vote_average"
      :reviews="movie.vote_count"
      :backdrop="movie.backdrop_path"
      :genres="movie.genres"
      :origins="movie.production_countries"
      :productions="movie.production_companies"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const route = useRoute();

const { data: movie, error } = await useFetch(`/api/movies/${route.params.id}`);
</script>
