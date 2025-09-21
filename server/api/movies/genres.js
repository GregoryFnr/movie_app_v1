export default defineCachedEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${movieKey}`
    );
    return data; // { genres: [{ id, name }, ...] }
  } catch (error) {
    console.error(error);
    return null;
  }
});
