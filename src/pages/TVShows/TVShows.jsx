import { useNavigate } from "react-router-dom";
import "./TVShows.css";

import suntv from "../../assets/images/TVShows/categories/sun tv.jpg";
import vijaytv from "../../assets/images/TVShows/categories/vijay tv.jpg";
import comedy from "../../assets/images/TVShows/categories/comedy.jpg";
import reality from "../../assets/images/TVShows/categories/Reality.jpg";
import newstv from "../../assets/images/TVShows/categories/Newstv.jpg";
import kids from "../../assets/images/TVShows/categories/kids.jpg";

function TVShows() {
  const navigate = useNavigate();

  const shows = [
    {
      id: 1,
      name: "Sun TV",
      image: suntv,
      category: "suntv",
    },
    {
      id: 2,
      name: "Vijay TV",
      image: vijaytv,
      category: "vijaytv",
    },
    {
      id: 3,
      name: "Comedy",
      image: comedy,
      category: "comedy",
    },
    {
      id: 4,
      name: "Reality",
      image: reality,
      category: "reality",
    },
    {
      id: 5,
      name: "News TV",
      image: newstv,
      category: "newstv",
    },
    {
      id: 6,
      name: "Kids",
      image: kids,
      category: "kids",
    },
  ];

  return (
    <div className="tvshows-page">
       <button
      className="back-btn"
      onClick={() => navigate(-1)}
    >
      &#8592;
    </button>
      <h1>TV Shows</h1>

      <p className="subtitle">
        Choose Your Favorite TV Category
      </p>

      <div className="category-grid">
        {shows.map((show) => (
          <div
            key={show.id}
            className="category-card"
           onClick={() =>navigate(`/tv-category/${show.category}`)}
          >
            <img
              src={show.image}
              alt={show.name}
              className="category-image"
            />

            <div className="category-overlay">
              <h2>{show.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TVShows;