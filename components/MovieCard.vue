<template>
  <div class="card">
    <NuxtLink :to="`movies/${movieid}`">
      <div class="card-container">
        <div class="card-rows">
          <div class="top-card">
            <div class="poster-film">
              <img
                :src="`https://image.tmdb.org/t/p/w300/` + poster"
                alt="Poster film"
              />
            </div>
          </div>
          <div class="bottom-card">
            <div class="info-film">
              <h3>
                {{ title }}
              </h3>
              <p class="icon-text">{{ date }}</p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(["movieid", "title", "date", "poster"]);
</script>

<style scoped>
.card {
  display: block;
  position: relative;
  width: 250px;
  min-height: 400px;
  border: 1px solid transparent;
  background-color: inherit;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.card:hover {
  border: 1px solid var(--primary);
}

.card-container {
  width: 100%;
  display: block;
  padding: 10px;
}

.card-rows {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.top-card {
  width: 100%;
  height: 100%;
}

.poster-film {
  width: 100%;
  height: 100%;
}

.poster-film img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.bottom-card {
  width: 100%;
  height: 100%;
  margin: auto 25px;
}

.info-film {
  width: 100%;
  margin-bottom: 15px;
}

.info-film h3 {
  font-size: 1.11rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.icon-text {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
}

.icon-text svg {
  margin-right: 10px;
  width: 20px;
}

.card-separator {
  width: 25%;
  height: 1px;
  margin-bottom: 5px;
  color: #ee6c4d;
}

.button {
  width: 100%;
  margin-top: 30px;
}

.card-button {
  display: block;
  width: 75%;
  background-color: hsla(243, 100%, 93%, 30%);
  color: var(--text);
  font-size: 1.11rem;
  padding: 10px 45px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: bold;
  transition: transform, box-shadow, 0.2s ease;
  box-shadow: 0 0 0 0 var(--accent);
  text-align: center;
}

.card-button:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 var(--accent);
}

.card-button:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 var(--accent);
  background-color: hsla(243, 100%, 93%, 0.505);
}
</style>
