export default defineCachedEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const movieid = event.context.params.id;

  try {
    const response = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${movieKey}`
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
});
