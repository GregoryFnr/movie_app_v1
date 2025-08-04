<template>
  <section class="section hero">
    <div class="background-blur-color"></div>
    <div class="hero-container">
      <div class="main-title">
        <h1>
          Check out the latest
          <span class="font-effect">cinema releases</span>
        </h1>
      </div>
    </div>
  </section>
  <TrendingMovie />
  <section class="section" style="margin: 0 auto">
    <div class="container-card-section">
      <div class="title-section">
        <h2>Upcoming movies</h2>
        <NuxtLink to="/upcoming" class="more-link">Discover more</NuxtLink>
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
        <NuxtLink to="/upcoming" class="more-link">Discover more</NuxtLink>
      </div>
    </div>
  </section>
  <TopRated />
</template>

<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const { data: movies, error } = await useFetch(`/api/movies/`);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

:root {
  --text: #fff;
  --background: #000;
  --primary: #326ebd;
  --secondary: #dddbff;
  --accent: #ee6c4d;
  --accent-hover: #c85f45;
  --bg-component: hsla(243, 100%, 93%, 10%);
  --bg-component-hover: hsla(243, 100%, 93%, 0.224);
  --size-swiper-prev-next: 30px;
}

p,
h1,
h2,
h3,
h4 {
  color: var(--text);
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--background);
}

.section {
  max-width: 1400px;
  padding: 10px;
  margin: 75px auto;
  position: relative;
}

.foreground {
  position: relative;
  z-index: 99;
}

.hero {
  width: 100%;
  height: 20vh;
  position: relative;
}

.hero-container {
  position: absolute;
  bottom: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.main-title {
  width: 75%;
}

.main-title h1 {
  font-size: 3.2rem;
  line-height: 3.15rem;
  font-weight: 600;
}

.font-effect {
  background: linear-gradient(120deg, var(--primary), var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.calendar-title {
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
}

/*CARD SECTION*/

.container-card-section {
  background-color: hsla(243, 100%, 93%, 0.088);
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  margin: 50px auto;
}

.title-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}

.more-mobile {
  width: 100%;
  display: none;
  text-align: end;
}

.more-link {
  color: var(--text);
  transition: all 0.2s ease;
}

.more-link:hover {
  color: var(--accent);
}

.card-section {
  position: relative;
  width: 100%;
}

.swiper-horizontal {
  padding: 10px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.swiper-button-prev,
.swiper-button-next {
  color: #326ebd;
  transition: all 0.2s ease;
}

.background-blur-color {
  position: absolute;
  bottom: 0;
  aspect-ratio: 1.5;
  pointer-events: none;
  z-index: 0;
  border-radius: 100%;
  background: linear-gradient(270deg, #ee6c4d, #c85f45 60%, #904937, #293241);
  filter: blur(15vw);
  transform: none;
  opacity: 0.6;
  width: 1100px;
  right: calc(50% - 500px);
}

/*BREAKPOINTS*/

@media (max-width: 1200px) {
  .section {
    margin: 30px auto;
  }
  .hero {
    height: 18vh;
  }
  .background-blur-color {
    width: 700px;
    right: calc(30% - 200px);
    filter: blur(16vw);
  }
  .title-section h2 {
    font-size: 1.3rem;
  }
  .main-title h1 {
    font-size: 2.6rem;
    line-height: 2.15rem;
  }
  .container-card-section {
    margin: 35px auto;
  }
}

@media (max-width: 768px) {
  .section {
    margin: 30px auto;
  }
  .hero {
    height: 16vh;
  }
  .background-blur-color {
    width: 600px;
    right: calc(50% - 300px);
    filter: blur(19vw);
  }
  .title-section h2 {
    font-size: 1.3rem;
  }
  .main-title h1 {
    font-size: 2.4rem;
    line-height: 2.15rem;
  }
  .container-card-section {
    margin: 20px auto;
  }
}

@media (max-width: 640px) {
  .section {
    margin: 25px auto;
  }
  .hero {
    height: 14vh;
  }
  .background-blur-color {
    width: 300px;
    right: calc(50% - 200px);
    filter: blur(19vw);
  }
  .title-section {
    margin-bottom: 15px;
  }
  .title-section h2 {
    font-size: 1.2rem;
  }
  .main-title h1 {
    font-size: 2.4rem;
    line-height: 1.95rem;
  }
  .title-section .more-link {
    display: none;
  }
  .more-mobile {
    display: block;
  }
  .container-card-section {
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .section {
    margin: 20px auto;
  }
  .hero {
    height: 12vh;
  }
  .citation {
    font-size: 0.88rem;
  }
  .background-blur-color {
    width: 300px;
    right: calc(50% - 200px);
    filter: blur(19vw);
  }
  .more-link {
    font-size: 0.88rem;
  }
  .main-title {
    width: 100%;
  }
  .main-title h1 {
    font-size: 2rem;
    line-height: 1.85rem;
  }
  .more-mobile {
    display: block;
  }
}
</style>
