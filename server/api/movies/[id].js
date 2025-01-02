export default defineCachedEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const movieid = event.context.params.id;
  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=${movieKey}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
});
