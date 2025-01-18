export default defineCachedEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const movieid = event.context.params.id;

  try {
    const response = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${movieKey}`
    );

    // Filtre les résultats pour ne garder que les trailers
    const trailers = response.results.filter(
      (video) =>
        video.type === "Trailer" &&
        video.site === "YouTube" &&
        video.official === "true"
    );

    const sortedTrailers = trailers.sort(
      (a, b) => new Date(b.published_at) - new Date(a.published_at)
    );

    return sortedTrailers[0] || null;
  } catch (error) {
    console.error("Error fetching trailer", error);
    return null;
  }
});
