export default defineCachedEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const movieid = event.context.params.id;

  try {
    const response = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${movieKey}`
    );

    const trailers = response.results.filter(
      (video) =>
        video.type === "Trailer" &&
        video.site === "YouTube" &&
        video.official === true
    );

    if (trailers.length > 0) {
      return { key: trailers[0].key };
    } else {
      return { key: null };
    }
  } catch (error) {
    console.error("Error fetching trailer", error);
    throw error;
  }
});
