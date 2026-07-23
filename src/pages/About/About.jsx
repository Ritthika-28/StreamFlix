import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      <div className="about-header">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>

        <h1>About StreamFlix</h1>

      </div>

      <div className="about-card">

        <h2>🎬 StreamFlix</h2>

        <p>
          StreamFlix is a Netflix-inspired movie streaming web application
          developed using React.js and Firebase.
        </p>

        <div className="about-item">
          <strong>Version :</strong> 1.0.0
        </div>

        <div className="about-item">
          <strong>Developer :</strong> Ritthika Senthil
        </div>

        <div className="about-item">
          <strong>Frontend :</strong> React.js
        </div>

        <div className="about-item">
          <strong>Backend :</strong> Firebase
        </div>

        <div className="about-item">
          <strong>Database :</strong> Firebase Firestore
        </div>

        <div className="about-item">
          <strong>Authentication :</strong> Firebase Authentication
        </div>

        <div className="about-item">
          <strong>Features :</strong>

          <ul>
            <li>Movie Streaming</li>
            <li>TV Shows</li>
            <li>Wishlist</li>
            <li>Search</li>
            <li>Continue Watching</li>
            <li>Profile Management</li>
            <li>Movie Ratings</li>
            <li>Responsive Design</li>
          </ul>

        </div>

      </div>

    </div>
  );
};

export default About;