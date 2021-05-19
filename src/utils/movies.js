export function filter(movies, filters) {
  return movies.filter(movie => {
    const movieData = (movie.nameRU + movie.nameEN + movie.description).toLowerCase();

    return (
      (filters.request ? movieData.includes(filters.request.toLowerCase()) : true)
      &&
      (filters.short ? movie.duration <= 40 : true)
    );
  });
}