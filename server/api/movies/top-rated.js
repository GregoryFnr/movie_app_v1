export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const query = getQuery(event);
  const page = query.page || 1;
  const genre = query.genre; // optional TMDB genre id

  try {
    const url = genre
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&sort_by=vote_average.desc&vote_count.gte=100&with_genres=${genre}&page=${page}`
      : `https://api.themoviedb.org/3/movie/top_rated?api_key=${movieKey}&page=${page}`;

    const data = await $fetch(url);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
});
