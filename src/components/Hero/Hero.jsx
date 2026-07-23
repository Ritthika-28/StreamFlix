import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>Welcome to StreamFlix</h1>

          <p>
            Watch unlimited movies and TV shows anytime,
            anywhere. Enjoy your favorite entertainment
            with StreamFlix.
          </p>

          <div className="hero-buttons">

            <button
              className="play-btn"
              onClick={() => navigate("/movie/1")}
            >
              ▶ Play
            </button>

            <button
              className="list-btn"
              onClick={() => navigate("/my-list")}
            >
              + My List
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;