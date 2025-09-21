export default defineCachedEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const query = getQuery(event);
  const page = query.page || 1;
  const genre = query.genre; // optional TMDB genre id

  // Build today's date as YYYY-MM-DD for upcoming filter
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayStr = `${yyyy}-${mm}-${dd}`;

  try {
    // If a genre is provided, use Discover endpoint with upcoming constraint
    const url = genre
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&with_genres=${genre}&primary_release_date.gte=${todayStr}&sort_by=primary_release_date.asc&page=${page}`
      : `https://api.themoviedb.org/3/movie/upcoming?api_key=${movieKey}&page=${page}`;

    const data = await $fetch(url);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
});
