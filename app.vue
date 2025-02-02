<template>
  <div>
    <NuxtLayout>
      <NuxtPage keepalive include="index"></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useGenreStore } from "@/stores/useGenreStore";
const genreStore = useGenreStore();

onMounted(() => {
  genreStore.fetchGenres();
});
</script>
