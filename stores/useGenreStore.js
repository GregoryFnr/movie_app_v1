import { defineStore } from "pinia";
import { ref } from "vue";

export const useGenreStore = defineStore("genreStore", () => {
  const genreMap = ref({});

  // Fonction pour charger les genres depuis TMDB
  const fetchGenres = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=783cd8d93a2ef3e9fd9ba4a978bca382&language=fr-FR`
      );
      const data = await response.json();

      if (data.genres) {
        genreMap.value = Object.fromEntries(
          data.genres.map((genre) => [genre.id, genre.name])
        );
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des genres :", error);
    }
  };

  return { genreMap, fetchGenres };
});
