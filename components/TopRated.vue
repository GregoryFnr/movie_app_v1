<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const { data: movies } = await useFetch("/api/movies/top-rated");
</script>

<template>
  <section class="section" style="margin: 0 auto">
    <div class="container-card-section">
      <div class="title-section">
        <h2>Top rated movies</h2>
        <NuxtLink to="/topRatedMovies" class="more-link"
          >Discover more</NuxtLink
        >
      </div>
      <div class="card-section">
        <swiper
          :speed="600"
          :modules="[Navigation]"
          navigation
          :breakpoints="{
            360: { slidesPerView: 3, spaceBetween: 3, slidesPerGroup: 2 },
            768: { slidesPerView: 3, spaceBetween: 10, slidesPerGroup: 3 },
            1024: { slidesPerView: 5, spaceBetween: 10, slidesPerGroup: 5 },
          }"
        >
          <swiper-slide v-for="movie in movies.results" :key="movie.id">
            <MovieCard
              :movieid="movie.id"
              :title="movie.title"
              :poster="movie.poster_path"
              :stars="movie.vote_average"
              :reviews="movie.vote_count"
            />
          </swiper-slide>
        </swiper>
      </div>
      <div class="more-mobile">
        <NuxtLink to="/topRatedMovies" class="more-link"
          >Discover more</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-card-section {
  margin: 0 auto;
  width: 100%;
}
</style>
