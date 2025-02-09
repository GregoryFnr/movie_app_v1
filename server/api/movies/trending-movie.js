export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();

  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${movieKey}`;

  try {
    const response = await $fetch(url);

    const now = new Date();
    const twoMonthsAgo = new Date(now.setMonth(now.getMonth() - 2));

    // Filtrer les films récents
    const recentMovies = response.results.filter((movie) => {
      const releaseDate = new Date(movie.release_date);
      return releaseDate >= twoMonthsAgo;
    });

    // Trouver celui avec la plus grande popularité
    const mostPopularMovie = recentMovies.reduce(
      (prev, current) =>
        prev.popularity > current.popularity ? prev : current,
      recentMovies[0]
    );

    return mostPopularMovie || response.results[0]; // Si aucun film récent, prend le premier de la liste
  } catch (error) {
    return { error: "Erreur lors de la récupération du film tendance" };
  }
});
