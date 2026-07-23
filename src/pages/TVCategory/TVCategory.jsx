import { useParams, useNavigate } from "react-router-dom";
import tvShows from "../../data/TVShows";

import "./TVCategory.css";

const TVCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const shows = tvShows[category] || [];

  return (
    <div className="tv-category-page">

      <button
  className="back-btn"
  onClick={() => navigate(-1)}
>
  &#8592;
</button>
      <h1>{category.toUpperCase()}</h1>
      

      <div className="shows-grid">

        {shows.length > 0 ? (
          shows.map((show) => (
            <div
              key={show.id}
              className="show-card"
            >
              <img
                src={show.image}
                alt={show.title}
              />

              <div className="show-details">

                <h3>{show.title}</h3>

                <button
                  className="watch-btn"
                  onClick={() => navigate(`/watch/tv/${show.id}`)}
                >
                  ▶ Watch Now
                </button>

              </div>
            </div>
          ))
        ) : (
          <h2>No TV Shows Found</h2>
        )}

      </div>

    </div>
  );
};

export default TVCategory;