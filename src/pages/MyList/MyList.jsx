import { useWishlist } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import "./MyList.css";

const MyList = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <div className="my-list">
      <h1>❤️ My List</h1>

      {wishlist.length === 0 ? (
        <h2>No Movies Added</h2>
      ) : (
        <div className="movies-grid">
          {wishlist.map((movie) => (
            <div className="wishlist-card" key={movie.id}>

              <img
                src={movie.image}
                alt={movie.title}
                className="wishlist-poster"
                onClick={() => navigate(`/watch/movie/${movie.id}`)}
              />

              <h3
                className="movie-title"
                onClick={() => navigate(`/watch/movie/${movie.id}`)}
              >
                {movie.title}
              </h3>

              <button
                className="remove-btn"
                onClick={() => removeFromWishlist(movie.id)}
              >
                Remove
              </button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;