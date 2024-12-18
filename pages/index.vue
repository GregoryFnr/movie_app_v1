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
  <section class="section">
    <div class="card-section">
      <div v-for="movie in movies.results" :key="movie.id">
        <MovieCard
          :movieid="movie.id"
          :title="movie.title"
          :date="movie.release_date"
          :poster="movie.poster_path"
        />
      </div>
    </div>
    <div class="container-btn-page">
      <button v-if="disabledPrevious" @click="page--" class="btn-page">
        Précedent
      </button>
      <div class="btn-page"></div>
      <button v-if="!disabledNext" @click="page++" class="btn-page">
        Suivant
      </button>
    </div>
  </section>
</template>

<script setup>
const page = ref(1);

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
  --primary: #98c1d9;
  --secondary: #dddbff;
  --accent: #ee6c4d;
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

.separator {
  width: 15%;
  height: 1px;
  margin: 0 auto;
  background-color: #98c1d9;
}

.calendar-title {
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
}

/*CARD SECTION*/

.card-section {
  position: relative;
  background-color: hsla(243, 100%, 93%, 10%);
  padding: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  border-radius: 5px;
  margin: 50px auto;
  overflow: hidden;
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
  right: calc(50% - 700px);
}

.container-btn-page {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn-page {
  width: auto;
  padding: 7px 15px;
  background-color: var(--accent);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
