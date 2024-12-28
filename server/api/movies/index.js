export default defineCachedEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const query = getQuery(event);
  const page = query.page || 1;
  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${movieKey}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
});
