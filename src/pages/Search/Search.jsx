import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../../data/movies";
import tvShows from "../../data/TVShows";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  // Convert TV Shows object into array
  const allTVShows = Object.values(tvShows).flat();

  // Load search history
  useEffect(() => {
    const history =
      JSON.parse(localStorage.getItem("searchHistory")) || [];

    setRecentSearches(history);
  }, []);

  // Save search
  const saveSearch = (value) => {
    if (!value.trim()) return;

    let history =
      JSON.parse(localStorage.getItem("searchHistory")) || [];

    history = history.filter(
      (item) => item.toLowerCase() !== value.toLowerCase()
    );

    history.unshift(value);

    history = history.slice(0, 10);

    localStorage.setItem(
      "searchHistory",
      JSON.stringify(history)
    );

    setRecentSearches(history);
  };

  // Filter Movies
  const filteredMovies = movies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Filter TV Shows
  const filteredTVShows = allTVShows.filter((show) =>
    show.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="search-page">

      <h1>🔍 Search Movies & TV Shows</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search Movies or TV Shows..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            saveSearch(search);
          }
        }}
      />

      {/* Recent Searches */}

      {recentSearches.length > 0 && (
        <>
          <h2 className="search-heading">
            Recent Searches
          </h2>

          <div className="recent-searches">

            {recentSearches.map((item, index) => (
              <button
                key={index}
                onClick={() => setSearch(item)}
              >
                {item}
              </button>
            ))}

          </div>
        </>
      )}

      {/* Movies */}

      <h2 className="search-heading">
        🎬 Movies
      </h2>

      <div className="search-grid">

        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <p>No Movies Found</p>
        )}

      </div>

      {/* TV Shows */}

      <h2 className="search-heading">
        📺 TV Shows
      </h2>

      <div className="search-grid">

        {filteredTVShows.length > 0 ? (
          filteredTVShows.map((show) => (
            <div
              key={show.id}
              className="search-card"
            >
              <img
                className="search-image"
                src={show.image}
                alt={show.title}
              />

              <h3 className="search-title">
                {show.title}
              </h3>

              <button
                className="watch-now-btn"
                onClick={() =>
                  navigate(`/watch/tv/${show.id}`)
                }
              >
                ▶ Watch Now
              </button>

            </div>
          ))
        ) : (
          <p>No TV Shows Found</p>
        )}

      </div>

    </div>
  );
};

export default Search;