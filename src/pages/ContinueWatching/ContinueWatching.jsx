import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContinueWatching.css";

const ContinueWatching = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const history =
      JSON.parse(localStorage.getItem("watchHistory")) || [];

    setMovies(history);
  }, []);

  return (
    <div className="continue-page">

      <h1>▶ Continue Watching</h1>

      {movies.length === 0 ? (
        <h2>No Movies Yet</h2>
      ) : (
        <div className="continue-grid">

          {movies.map((item) => (

            <div
              className="continue-card"
              key={`${item.type}-${item.id}`}
              onClick={() => {
                if (item.type === "movie") {
                  navigate(`/watch/movie/${item.id}`);
                } else {
                  navigate(`/watch/tv/${item.id}`);
                }
              }}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${item.progress || 0}%`,
                  }}
                ></div>
              </div>

              <p>{item.progress || 0}% Watched</p>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default ContinueWatching;