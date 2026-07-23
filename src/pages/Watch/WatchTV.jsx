import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHeart, FaThumbsDown, FaStar } from "react-icons/fa";

import tvShows from "../../data/TVShows";
import "./WatchTV.css";

const WatchTV = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [rating, setRating] = useState(0);

  const allShows = Object.values(tvShows).flat();

  const show = allShows.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem(`watch-tv-${id}`)
    );

    if (saved) {
      setLiked(saved.liked || false);
      setDisliked(saved.disliked || false);
      setRating(saved.rating || 0);
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(
      `watch-tv-${id}`,
      JSON.stringify({
        liked,
        disliked,
        rating,
      })
    );
  }, [liked, disliked, rating, id]);

  useEffect(() => {
  if (!show) return;

  let history =
    JSON.parse(localStorage.getItem("watchHistory")) || [];

  history = history.filter(
    (item) => !(item.id === show.id && item.type === "tv")
  );

  history.unshift({
    id: show.id,
    title: show.title,
    image: show.image,
    type: "tv",
     progress: Math.floor(Math.random() * 80) + 20,
  watchedAt: Date.now(),
  });

  history = history.slice(0, 20);

  localStorage.setItem(
    "watchHistory",
    JSON.stringify(history)
  );
}, [show]);
  if (!show) {
    return <h2>TV Show Not Found</h2>;
  }

  return (
    <div className="watch-page">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ←
      </button>

      <div className="video-container">
        <iframe
          src={show.trailer}
          title={show.title}
          allowFullScreen
        ></iframe>
      </div>

      {/* Like & Dislike */}

      <div className="movie-actions">

        <div className="watch-actions">

          <button
            className={liked ? "active-btn" : ""}
            onClick={() => {
              setLiked(!liked);
              if (!liked) setDisliked(false);
            }}
          >
            <FaHeart /> Like
          </button>

          <button
            className={disliked ? "active-btn" : ""}
            onClick={() => {
              setDisliked(!disliked);
              if (!disliked) setLiked(false);
            }}
          >
            <FaThumbsDown /> Dislike
          </button>

        </div>

        {/* Rating */}

        <div className="rating-section">

          <h2>Rate this TV Show</h2>

          <div className="stars">

            {[1, 2, 3, 4, 5].map((star) => (

              <FaStar
                key={star}
                className={
                  star <= rating
                    ? "star active-star"
                    : "star"
                }
                onClick={() => setRating(star)}
              />

            ))}

          </div>

          {rating > 0 && (
            <p className="rating-text">
              Your Rating : {rating}/5 ⭐
            </p>
          )}

        </div>

      </div>

      {/* Recommended */}

      <h2 className="recommend-title">
        📺 Recommended TV Shows
      </h2>

      <div className="recommend-grid">

        {allShows
          .filter((item) => item.id !== show.id)
          .slice(0, 6)
          .map((item) => (

            <div
              key={item.id}
              className="recommend-card"
              onClick={() => navigate(`/watch/tv/${item.id}`)}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <button className="watch-now-btn">
                ▶ Watch Now
              </button>

            </div>

          ))}

      </div>

    </div>
  );
};

export default WatchTV;