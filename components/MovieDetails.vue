<template>
  <section class="hero-film">
    <div class="banner-columns">
      <div class="left">
        <h1 class="title">{{ title }}</h1>
        <div class="row">
          <div class="stars">{{ stars }}</div>
          <div class="reviews">
            {{ reviews }} reviews<span v-if="reviews.length >= 2">s</span>
          </div>
          <div class="date">{{ date }}</div>
          <div class="runtime">{{ formatDuration(runtime) }} mins</div>
        </div>
        <p class="overview">{{ overview }}</p>
        <button @click="openTrailer" class="btn-trailer">
          <a href="">Watch Trailer</a>
        </button>
      </div>
      <div class="right">
        <img
          :src="`http://image.tmdb.org/t/p/w1280/` + backdrop"
          alt="Background Image"
        />
      </div>
    </div>
  </section>
  <section class="section-color">
    <div class="section">
      <div class="column-id">
        <div class="left">
          <img
            class="poster-film"
            :src="`https://image.tmdb.org/t/p/w500/` + poster"
            alt="Poster Film"
          />
        </div>
        <div class="right">
          <!--<div class="film-title">
            {{ title }}
          </div>
          -->
          <div class="film-overview">
            <h2 class="storyline">Storyline</h2>
            <p class="overview">{{ overview }}</p>
          </div>
          <div class="column-details">
            <div class="date">Released</div>
            <div class="data-date">{{ date }}</div>
            <div class="runtime">Runtime</div>
            <div class="data-runtime">{{ runtime }} mins</div>
            <div class="genres">Genre</div>
            <div class="data-genres">
              <div
                v-for="genre in genres"
                :key="genre.id"
                class="card-genres-film"
              >
                {{ genre.name }}
              </div>
            </div>
            <div class="origins">Country</div>
            <div class="data-origins">
              <div
                v-for="origin in origins"
                :key="origin.id"
                class="card-origins-film"
              >
                {{ origin.name }}
              </div>
            </div>
            <div class="productions">Production</div>
            <div class="data-productions">
              <div
                v-for="(production, index) in productions"
                :key="production.id"
                class="productions"
              >
                {{ production.name
                }}<span v-if="index < productions.length - 1">,</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps([
  "title",
  "date",
  "poster",
  "overview",
  "stars",
  "reviews",
  "runtime",
  "key",
  "backdrop",
  "genres",
  "origins",
  "productions",
]);

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h${remainingMinutes.toString().padStart(2, "0")}`;
}
</script>

<style scoped>
.hero-film {
  width: 100%;
  height: 820px;
  position: relative;
}

.banner-columns {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.banner-columns .left {
  position: relative;
  align-content: center;
  height: 100%;
  z-index: 1;
  font-size: 1rem;
  width: 70%;
  padding: 0 75px;
  background: linear-gradient(to right, #000000, #000000, #000000, transparent);
}

.banner-columns .left .title {
  font-weight: 600;
  font-size: 3.5rem;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.row .stars,
.row .reviews,
.row .runtime,
.row .date {
  font-size: 0.95rem;
  color: #fff;
}

.banner-columns .right {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: auto;
}

.banner-columns .right img {
  position: relative;
  width: 100%;
  height: 100%;
}

.section-color {
  width: 100%;
  background-color: hsla(243, 100%, 93%, 10%);
  padding: 65px 0;
  position: relative;
  z-index: 10;
}

.column-id {
  display: flex;
}

.poster-film {
  width: 300px;
  border-radius: 5px;
}

.column-id .right {
  width: 100%;
  padding-left: 30px;
  margin: auto 0;
  position: relative;
}

.column-details {
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: repeat(4, max-content);
  grid-column-gap: 30px;
  grid-row-gap: 15px;
}

.film-overview {
  margin-bottom: 15px;
}

.storyline {
  font-size: 1.65rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.date,
.data-date,
.runtime,
.data-runtime,
.genres,
.origins,
.data-origins,
.productions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.88rem;
  color: #fff;
}

.overview {
  font-size: 0.9 8rem;
  color: #fff;
}

.column-details .date {
  display: flex;
  align-items: center;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.data-date {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.column-details .runtime {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.data-runtime {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.genres {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.data-genres {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}

.origins {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}

.data-origins {
  grid-column: 4 / 4;
  grid-row: 1 / 2;
}

.data-productions {
  grid-column: 4 / 4;
  grid-row: 2 / 3;
}

.film-title {
  font-size: 3.5rem;
  color: #fff;
}

.data-genres {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

.data-productions {
  max-width: 75%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

.data-origins {
  display: flex;
  align-items: center;
  gap: 5px;
}

.card-genres-film,
.card-origins-film {
  background-color: hsla(243, 100%, 93%, 10%);
  width: auto;
  padding: 5px 12px;
  border-radius: 5px;
  color: #fff;
  font-size: 0.88rem;
}
</style>
