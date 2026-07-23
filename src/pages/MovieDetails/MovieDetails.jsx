import { useParams } from "react-router-dom";
import movies from "../../data/movies";
import { FaArrowLeft } from "react-icons/fa";
import "./MovieDetails.css";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  const handleWatch = () => {

  let history =
    JSON.parse(localStorage.getItem("watchHistory")) || [];

  history = history.filter(item => item.id !== movie.id);

  history.unshift(movie);

  localStorage.setItem(
    "watchHistory",
    JSON.stringify(history)
  );

  navigate(`/watch/movie/${movie.id}`);

};

  return (
    <div className="movie-details">
      <button
  className="back-btn"
  onClick={() => navigate(-1)}
>
  <FaArrowLeft />
</button>

      {/* Left Side */}
      <div className="movie-left">
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-poster"
        />
      </div>

      {/* Right Side */}
      <div className="movie-right">

<div className="movie-title-section">
    <h1 className="movie-title">
      {movie.title}
    </h1>
  </div>

        <div className="details-grid">

          <div>
            <h4>⭐ Rating</h4>
            <p>{movie.rating}</p>
          </div>

          <div>
            <h4>📅 Year</h4>
            <p>{movie.year}</p>
          </div>

          <div>
            <h4>🎭 Genre</h4>
            <p>{movie.genre}</p>
          </div>

          <div>
            <h4>🌐 Language</h4>
            <p>{movie.language}</p>
          </div>

          <div>
            <h4>⏱ Duration</h4>
            <p>{movie.duration}</p>
          </div>

          <div>
            <h4>🎬 Director</h4>
            <p>{movie.director}</p>
          </div>

          <div>
            <h4>🔞 Certificate</h4>
            <p>{movie.certificate}</p>
          </div>

          <div>
            <h4>👥 Cast</h4>
            <p>{movie.cast.join(", ")}</p>
          </div>

        </div>

        
       <button className="watch-now-btn"
        onClick={() => navigate(`/watch/movie/${movie.id}`)}>
        ▶ Watch Now
              </button>
      </div>

    </div>
  );
};

export default MovieDetails;