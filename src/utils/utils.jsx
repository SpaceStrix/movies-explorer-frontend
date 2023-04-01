const numbetToTime = duration => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return hours === 0 ? `${minutes}м` : `${hours}ч ${minutes}м`;
};

//b Сортировка по запросу
const filtersMovies = (searchQuery, moviesAll, setNotFoundMovie) => {
  const filter = moviesAll.filter(movie => {
    return movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase() || "");
  });
  return filter;
};

//b Сортировка по запросу и чекбоксу
const filtersMoviesDuration = (searchQuery, checkedShort, moviesAll) => {
  const filterDuration = moviesAll.filter(movie => {
    return (
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase() || "") &&
      checkedShort &&
      movie.duration <= 40
    );
  });

  return filterDuration;
};

export { filtersMovies, filtersMoviesDuration, numbetToTime };
