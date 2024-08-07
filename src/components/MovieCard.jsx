function MovieCard({ id, title, year }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{year}</p>
    </div>
  );
}

export default MovieCard;
