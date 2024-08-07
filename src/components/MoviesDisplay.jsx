import MovieCard from "./MovieCard";
function MoviesDisplay({ movies }) {
  return (
    <>
      {movies.map((movie) => {
        return <MovieCard {...movie} key={movie.id} />;
      })}
    </>
  );
}

export default MoviesDisplay;
