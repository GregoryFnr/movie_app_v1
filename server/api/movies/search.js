export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const { searchInput } = getQuery(event);

  if (!searchInput) {
    return { results: [] };
  }

  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${encodeURIComponent(
        searchInput
      )}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { results: [] };
  }
});
