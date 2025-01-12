export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const movieid = event.context.params.id; // ID du film dans l'URL

  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${movieKey}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
});
