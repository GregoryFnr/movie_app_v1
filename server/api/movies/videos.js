export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();

  try {
    const videoData = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${movieKey}`
    );
    return videoData;
  } catch (error) {
    console.error("Erreur lors de la récupération du trailer :", error);
    return null;
  }
});
