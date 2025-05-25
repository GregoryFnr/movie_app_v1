<script setup>
const model = defineModel();
</script>

<template>
  <div class="select-container">
    <select v-model="model" class="genres-select">
      <option value="">All Genres</option>
      <option value="Action">Action</option>
      <option value="Adventure">Adventure</option>
      <option value="Animation">Animation</option>
      <option value="Comedy">Comedy</option>
      <option value="Crime">Crime</option>
      <option value="Documentary">Documentary</option>
      <option value="Drama">Drama</option>
      <option value="Family">Family</option>
      <option value="History">History</option>
      <option value="Horror">Horror</option>
      <option value="Music">Music</option>
      <option value="Mystery">Mystery</option>
      <option value="Romance">Romance</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="TV Movie">TV Movie</option>
      <option value="Thriller">Thriller</option>
      <option value="War">War</option>
      <option value="Western">Western</option>
    </select>
  </div>
</template>

<style scoped>
.select-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  gap: 1rem;
}

.genres-select {
  background-color: #000;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: start;
}
</style>
