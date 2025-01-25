<template>
  <div class="trailer-modal">
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
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab, far);

const route = useRoute();
const movieid = route.params.id;

const trailerKey = ref(null);

defineProps({
  showModal: Boolean,
});

const emit = defineEmits(["close"]);

function close() {
  emit("close");
}

onMounted(async () => {
  const { data } = await useFetch(`/api/movies/${movieid}/trailer`);
  //console.log("API response", data.value);
  if (data.value) {
    trailerKey.value = data.value.key;
  } else {
    console.log("No trailer found");
  }
});
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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: auto;
  overflow-y: hidden;
  z-index: 1000;
  background-color: #000000c3;
}

.trailer {
  width: 100%;
  margin: 100px;
  border: none;
}
</style>
