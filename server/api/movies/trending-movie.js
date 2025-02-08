export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();

  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${movieKey}`;

  try {
    const response = await $fetch(url);

    const now = new Date();
    const recentMovie = response.results.find((movie) => {
      const releaseDate = new Date(movie.release_date);
      return releaseDate >= new Date(now.setMonth(now.getMonth() - 2));
    });

    return recentMovie || response.results[0];
  } catch (error) {
    return { error: "Erreur lors de la récupération du film tendance" };
  }
});
