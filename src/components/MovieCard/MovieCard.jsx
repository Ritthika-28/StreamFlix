import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();

  const isAdded = wishlist.some(
    (item) => item.id === movie.id
  );

  const handleWishlist = () => {
    if (isAdded) {
      removeFromWishlist(movie.id);
    } else {
      addToWishlist(movie);
    }
  };

  return (
    <div className="movie-card">

      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.image}
          alt={movie.title}
        />
      </Link>

      <div className="movie-info">

        <h3>{movie.title}</h3>

        <button
          className="wishlist-btn"
          onClick={handleWishlist}
        >
          <FaHeart
            className={isAdded ? "heart active" : "heart"}
          />
        </button>

      </div>

    </div>
  );
};

export default MovieCard;