<template>
  <div class="card">
    <div class="card-container">
      <div class="poster-film" v-if="picture">
        <img
          :src="`https://image.tmdb.org/t/p/w300/` + picture"
          alt="Profile Picture"
        />
      </div>
      <div class="poster-film-else" v-else>
        <img src="/public/img-placeholder.png" alt="" />
      </div>
      <div class="info-film">
        <h3>
          {{ name }}
        </h3>
        <p class="character-name">
          {{ character }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["picture", "name", "character"]);
</script>

<style scoped>
.card {
  display: block;
  position: relative;
  width: auto;
  border: 1px solid transparent;
  background-color: inherit;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.card:hover {
  border: 1px solid var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 0 10px 0 #0000005f;
}

.card-container {
  width: 100%;
  display: block;
  padding: 10px;
}

.poster-film {
  width: 100%;
  height: 100%;
}

.poster-film img {
  width: 100%;
  height: 100%;
}

.poster-film-else {
  width: 100%;
  height: 100%;
}

.poster-film-else img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
}

.info-film {
  width: 100%;
  text-align: start;
  line-height: 1.2rem;
}

.info-film p {
  font-size: 0.88rem;
}

.info-film h3 {
  font-size: 1rem;
  font-weight: 600;
}

.character-name {
  color: #ffffffc3;
}

@media (max-width: 1200px) {
  .info-film h3 {
    font-size: 1rem;
  }
}
@media (max-width: 1024px) {
  .card {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .card {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .info-film {
    line-height: 1rem;
  }
  .info-film h3 {
    font-size: 0.78rem;
  }
  .info-film p {
    font-size: 0.68rem;
  }
}
</style>
