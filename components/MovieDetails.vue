<template>
  <section class="hero-film">
    <div class="banner-columns">
      <div
        class="banner-mobile"
        :style="{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }"
      ></div>
      <div class="left">
        <h1 class="title">{{ title }}</h1>
        <div class="row">
          <StarsRate :value="stars" />
          <div class="reviews">
            {{ reviews }} review<span :v-if="reviews.length >= 2">s</span>
          </div>
          <div class="date">{{ date }}</div>
          <div class="runtime">
            {{ formatDuration(runtime) }}
          </div>
        </div>
        <p class="overview-top">{{ overview }}</p>
        <button @click="openModal" class="btn-trailer">
          Watch Trailer
          <ClientOnly>
            <font-awesome-icon
              class="play-icon"
              :icon="['far', 'circle-play']"
            />
          </ClientOnly>
        </button>
      </div>
      <div class="right">
        <img
          :src="`http://image.tmdb.org/t/p/w1280/` + backdrop"
          alt="Background Image"
        />
      </div>
    </div>
    <Transition name="fadeUp">
      <TrailerModal
        v-if="showModal"
        :showModal="showModal"
        @close="closeModal"
      />
    </Transition>
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
            :src="`https://image.tmdb.org/t/p/original/` + poster"
            :alt="`${title}`"
          />
        </div>
        <div class="right">
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
            <div class="budget">Budget</div>
            <div class="data-budget">{{ formatBudget }}$</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <!--CASTING-->
      <div class="title-section">
        <h2>The cast</h2>
      </div>
      <MovieCredits />
    </div>
    <div class="section">
      <!--RECOMMANDATIONS-->
      <div class="title-section">
        <h2>Recommandations</h2>
      </div>
      <MovieRecommandations />
    </div>
  </section>
</template>

<script setup>
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
  "budget",
]);

const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});

const formatBudget = computed(() => {
  return props.budget.toLocaleString("en-EN");
});

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h${remainingMinutes.toString().padStart(2, "0")}`;
}

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<style scoped>
/*TRANSITIONS*/

:global(.fadeUp-enter-active),
:global(.fadeUp-leave-active) {
  transition: all 0.5s ease;
}

:global(.fadeUp-enter-from),
:global(.fadeUp-leave-to) {
  opacity: 0;
  transform: translateY(100px);
}

.hero-film {
  width: 100%;
  height: 100%;
  position: relative;
}

.section {
  margin: 25px auto;
  padding: 0 40px;
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

:global(.row) {
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

:global(.row .stars),
:global(.row .reviews),
:global(.row .runtime),
:global(.row .date) {
  font-size: 0.95rem;
  color: #ffffff;
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
  justify-content: center;
}

.poster-film {
  width: 350px;
  height: 550px;
  border-radius: 5px;
  aspect-ratio: 10/16;
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
  grid-row-gap: 25px;
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
.reviews,
.data-runtime,
.genres,
.origins,
.productions,
.budget,
.data-budget {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.88rem;
  color: #fff;
}

.overview-top {
  font-size: 0.98rem;
  color: #fff;
  margin-bottom: 20px;
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
}

.film-title {
  font-size: 3.5rem;
  color: #fff;
}

.data-genres,
.data-productions,
.data-origins {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
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

/*BREAKPOINTS*/

@media (max-width: 1200px) {
  .banner-columns .left {
    width: 66%;
  }
  .banner-columns .left .title {
    font-size: 2.5rem;
  }
  .overview {
    font-size: 0.83rem;
    margin-bottom: 5px;
  }
  .info-film {
    margin-bottom: 25px;
  }

  .poster-film {
    width: 300px;
    height: 500px;
  }
  .card-genres-film,
  .card-origins-film {
    padding: 3px 10px;
    font-size: 0.83rem;
  }
  .date,
  .data-date,
  .runtime,
  .reviews,
  .data-runtime,
  .genres,
  .origins,
  .productions,
  .budget,
  .data-budget {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.83rem;
    color: #fff;
  }
  .overview-top {
    display: none;
  }
}

@media (max-width: 960px) {
  .column-details {
    grid-template-columns: max-content 1fr;
    grid-template-rows: repeat(2, max-content);
    grid-column-gap: 20px;
    grid-row-gap: 18px;
  }
  .storyline {
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .section {
    margin: 25px auto;
  }
  .column-id .left {
    display: none;
  }
  .column-id .right {
    width: 100%;
    padding: 15px;
    margin: 0 auto;
  }
  .storyline {
    font-size: 1.2rem;
  }
  .banner-columns .left .title {
    margin-bottom: 5px;
    font-size: 2rem;
  }
  .btn-trailer {
    font-size: 0.88rem;
    padding: 12px 45px;
    background-color: #000000bb;
  }
  .banner-columns {
    min-height: 30vh;
  }
  .banner-columns .left {
    width: 100%;
    background: rgba(0, 0, 0, 0.488);
    padding: 0 45px;
  }
  .banner-columns .right {
    display: none;
  }
  .banner-mobile {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
  }
}

@media (max-width: 480px) {
  .banner-columns .left .title {
    font-size: 1.3rem;
  }
  .row .date,
  .row .runtime {
    display: none;
  }
  .btn-trailer {
    padding: 8px 35px;
  }
  .section-color {
    padding: 10px 0;
  }
  .info-film {
    margin-bottom: 15px;
  }
  .info-film h2 {
    font-size: 1.3rem;
  }
}
</style>
