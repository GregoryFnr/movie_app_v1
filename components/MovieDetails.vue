<template>
  <section class="hero-film">
    <div class="banner-columns">
      <div class="left">
        <h1 class="title">{{ title }}</h1>
        <div class="row">
          <StarsRate :value="stars" />
          <div class="reviews">
            {{ reviews }} reviews<span v-if="reviews.length >= 2">s</span>
          </div>
          <div class="date">{{ date }}</div>
          <div class="runtime">
            {{ formatDuration(runtime) }}
          </div>
        </div>
        <p class="overview">{{ overview }}</p>
        <button @click="fetchTrailer" class="btn-trailer">
          Watch Trailer
          <font-awesome-icon class="play-icon" :icon="['far', 'circle-play']" />
        </button>
        <iframe
          v-if="fetchTrailer"
          :src="`https://www.youtube.com/embed/${trailerKey}`"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          class="trailer-modal"
        ></iframe>
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
      <div class="info-film">
        <h2>More Info</h2>
      </div>
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
            <div class="data-runtime">{{ formatDuration(runtime) }}</div>
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab, far);
const props = defineProps([
  "title",
  "date",
  "poster",
  "overview",
  "stars",
  "reviews",
  "runtime",
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

const route = useRoute();
const movieid = route.params.id;

const trailerKey = ref(null);

const fetchTrailer = async () => {
  const { data } = await useFetch(`/api/movies/${movieid}/trailers`);
  if (data) {
    trailerKey.value = data.key;
  }
};
</script>

<style scoped>
.hero-film {
  width: 100%;
  height: 100%;
  position: relative;
}

.section {
  margin: 25px auto;
}

.banner-columns {
  width: 100%;
  position: relative;
  height: 100%;
  aspect-ratio: 25/9;
  display: flex;
  align-items: center;
}

.banner-columns .left {
  position: relative;
  align-content: center;
  height: 100%;
  z-index: 1;
  font-size: 1rem;
  width: 66%;
  padding: 0 75px;
  background: linear-gradient(to right, #000000, #000000, #000000, transparent);
}

.banner-columns .left .title {
  font-weight: 600;
  font-size: 2.8rem;
}

.row {
  position: relative;
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
  height: 100%;
  right: 0;
  z-index: -1;
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
  padding: 20px 0;
  position: relative;
  z-index: 10;
}

.info-film {
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 50px;
}

.info-film h2 {
  font-weight: 500;
  border-bottom: 1px solid #fff;
}

.column-id {
  display: flex;
}

.poster-film {
  width: 300px;
  border-radius: 5px;
}

.column-id .right {
  width: 75%;
  padding-left: 30px;
  margin: auto 0;
  position: relative;
}

.column-details {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, max-content);
  grid-column-gap: 30px;
  grid-row-gap: 15px;
}

.film-overview {
  width: 100%;
  margin-bottom: 25px;
}

.storyline {
  font-size: 1.65rem;
  font-weight: 500;
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
  font-size: 0.98rem;
  color: #fff;
  margin-bottom: 20px;
}

.btn-trailer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 0.95rem;
  color: #fff;
  padding: 12px 55px;
  /*border: 1px solid;*/
  border: none;
  background-color: inherit;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-trailer:hover {
  background-color: #333;
}

.btn-trailer:hover .play-icon {
  transform: translateX(5px);
}

.btn-trailer .play-icon {
  font-size: 1.2rem;
  transform: translateX(0);
  transition: transform 0.3s ease;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
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
