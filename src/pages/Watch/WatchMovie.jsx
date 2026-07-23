import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHeart, FaThumbsDown, FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import Footer from "../../components/Footer/Footer";
import movies from "../../data/movies";
import "./WatchMovie.css";

const WatchMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(10);
  const [showVideo, setShowVideo] = useState(false);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [rating, setRating] = useState(0);

  const movie = movies.find((m) => m.id === Number(id));

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`watch-${id}`));

    if (saved) {
      setLiked(saved.liked || false);
      setDisliked(saved.disliked || false);
      setRating(saved.rating || 0);
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(
      `watch-${id}`,
      JSON.stringify({
        liked,
        disliked,
        rating,
      })
    );
  }, [liked, disliked, rating, id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setShowVideo(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  if (!movie) return;

  let history =
    JSON.parse(localStorage.getItem("watchHistory")) || [];

  history = history.filter(
    (item) => !(item.id === movie.id && item.type === "movie")
  );

  history.unshift({
    id: movie.id,
    title: movie.title,
    image: movie.image,
    type: "movie",
    progress: Math.floor(Math.random() * 80) + 20,
  watchedAt: Date.now(),
  });

  history = history.slice(0, 20);

  localStorage.setItem(
    "watchHistory",
    JSON.stringify(history)
  );
}, [movie]);

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <>
      <div className="watch-page">

        {!showVideo ? (

          <div className="loading-screen">

            <img
              src={movie.image}
              alt={movie.title}
              className="loading-poster"
            />

            <h2>{movie.title}</h2>
            

            <p className="loading-text">
              🎬 Movie starts in {countdown} seconds...
            </p>

            <div className="loading-animation">
              <div className="spinner"></div>
              <p>Now Loading...</p>
            </div>

          </div>
          
  
        ) : (

          <>

            <div className="video-wrapper">

              <button className="back-btn"
                       onClick={() => navigate(-1)}>
                       <FaArrowLeft />
                           </button>

              <div className="video-container">
                <iframe
                  src={movie.trailer}
                  title={movie.title}
                  allowFullScreen
                ></iframe>
              </div>




            </div>

            <div className="movie-header">

              <div className="movie-left">

                <h2>{movie.title}</h2>

                <p>
                  ⭐ {movie.rating} • {movie.year} • {movie.duration} • {movie.language}
                </p>

              </div>

              <div className="movie-right">

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

                <div className="rating-inline">

                  <span>Rate this Movie</span>

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

                </div>

              </div>

            </div>

            <h2 className="recommend-title">
              🎬 Recommended For You
            </h2>

            <div className="recommend-grid">

              {movies
                .filter((m) => m.id !== movie.id)
                .slice(0, 6)
                .map((item) => (

                  <div
                    key={item.id}
                    className="recommend-card"
                    onClick={() =>
                      navigate(`/watch/movie/${item.id}`)
                    }
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

            <Footer />

          </>

        )}

      </div>
    </>
  );
};

export default WatchMovie;