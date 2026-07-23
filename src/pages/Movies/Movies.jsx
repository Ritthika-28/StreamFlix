import { useNavigate } from "react-router-dom";
import movies from "../../data/movies";
import "./Movies.css";

const Movies = () => {
  const navigate = useNavigate();

  const trending = movies.filter(
    (movie) => movie.category === "Trending"
  );

  const action = movies.filter(
    (movie) => movie.genre === "Action"
  );

  

  const romance = movies.filter(
    (movie) => movie.genre === "Romance"
  );

  const scifi = movies.filter(
    (movie) => movie.genre === "Sci-Fi"
  );

  

  const tamil = movies.filter(
    (movie) => movie.language === "Tamil"
  );

  const english = movies.filter(
    (movie) => movie.language === "English"
  );

  const renderSection = (title, movieList) => (
    <div className="movie-section">
      <h2>{title}</h2>

      <div className="movies-grid">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              src={movie.image}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>

            <p>⭐ {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="movies-page">

      <h1>Movies</h1>

      {renderSection("🔥 Trending", trending)}

      {renderSection("⚡ Action", action)}

      {renderSection("❤️ Romance", romance)}

      {renderSection("🚀 Sci-Fi", scifi)}


      {renderSection("🌏 Tamil", tamil)}

      {renderSection("🌍 English", english)}

    </div>
  );
};

export default Movies;