export default defineCachedEventHandler(async () => {
  const { movieKey } = useRuntimeConfig();
  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${movieKey}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
});
