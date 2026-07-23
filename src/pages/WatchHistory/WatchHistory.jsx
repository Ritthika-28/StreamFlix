import "./WatchHistory.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const WatchHistory = () => {
  const navigate = useNavigate();

  const history =
    JSON.parse(localStorage.getItem("watchHistory")) || [];

  const historyEnabled =
    JSON.parse(localStorage.getItem("showHistory")) ?? true;

  // If Watch History is disabled
  if (!historyEnabled) {
    return (
      <div className="history-page">

        <button
          className="history-back"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>

        <h1>Watch History</h1>

        <div className="empty-history">
          <h2>🔒 Watch History is Disabled</h2>
          <p>
            Enable it from <strong>Settings → Privacy</strong> to view your watch history.
          </p>
        </div>

      </div>
    );
  }

  return (
    <div className="history-page">

      <button
        className="history-back"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>

      <h1>Watch History</h1>

      {history.length === 0 ? (
        <div className="empty-history">
          <h2>No Watch History</h2>
          <p>Movies and TV Shows you watch will appear here.</p>
        </div>
      ) : (
        <div className="history-grid">
          {history.map((item, index) => (
            <div key={index} className="history-card">

              <img src={item.image} alt={item.title} />

              <div className="history-content">

                <h3>{item.title}</h3>

                <p>{item.type}</p>

                <button
                  className="continue-btn"
                  onClick={() => {
                    const type = item.type?.toLowerCase();

                    if (type === "movie") {
                      navigate(`/watch/movie/${item.id}`);
                    } else if (type === "tv") {
                      navigate(`/watch/tv/${item.id}`);
                    }
                  }}
                >
                  ▶ Continue Watching
                </button>

              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default WatchHistory;