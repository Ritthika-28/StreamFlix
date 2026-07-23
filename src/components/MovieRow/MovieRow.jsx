import MovieCard from "../MovieCard/MovieCard";
import "./MovieRow.css";

const MovieRow = ({ title, movies }) => {
  return (
    <section className="movie-row">

      <h2>{title}</h2>

      <div className="movie-row-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

    </section>
  );
};

export default MovieRow;