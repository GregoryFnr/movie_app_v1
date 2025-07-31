<template>
  <div class="trailer-modal" @click="close">
    <font-awesome-icon :icon="['fas', 'xmark']" class="x-icon" @click="close" />
    <iframe
      :src="`https://www.youtube.com/embed/${trailerKey}`"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      class="trailer"
    ></iframe>
  </div>
</template>

<script setup>
defineProps({
  showModal: Boolean,
  trailerKey: String,
});

const emit = defineEmits(["close"]);

function close() {
  emit("close");
}
</script>

<style scoped>
.x-icon {
  color: #fff;
  position: absolute;
  width: 25px;
  height: 25px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  top: 0;
  right: 0;
  cursor: pointer;
}

.x-icon:hover {
  background-color: hsla(243, 100%, 93%, 10%);
}

.trailer-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1000;
  background-color: #000000c3;
}

.trailer {
  width: 75%;
  height: 75%;
  margin: 100px;
  border: none;
  overflow-y: none;
}

@media (max-width: 640px) {
  .trailer {
    width: 100%;
    height: 50%;
    margin: 50px;
  }
}
</style>
