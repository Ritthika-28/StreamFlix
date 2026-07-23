import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBell } from "react-icons/fa";
import "./Notifications.css";

const Notifications = () => {
  const navigate = useNavigate();

  const [enabled, setEnabled] = useState(
    JSON.parse(localStorage.getItem("emailNotifications")) ?? true
  );

  const saveSettings = () => {
    localStorage.setItem(
      "emailNotifications",
      JSON.stringify(enabled)
    );

    alert("Notification settings saved.");
  };

  return (
    <div className="notification-page">

      <div className="sub-header">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <h2>Email Notifications</h2>
      </div>

      <div className="notification-card">

        <div className="notification-title">
          <FaBell />

          <div>
            <h3>Email Notifications</h3>

            <p>
              Receive updates about movies,
              trending content and account activity.
            </p>

          </div>

        </div>

        <label className="switch">

          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />

          <span className="slider"></span>

        </label>

      </div>

      {/* Show only when Notifications are ON */}

      {enabled && (
        <div className="info-card">

          <h3>You'll receive</h3>

          <ul>
            <li>🎬 New Movie Releases</li>
            <li>🔥 Trending Movies</li>
            <li>⭐ Recommended for You</li>
            <li>📺 New Episodes</li>
            <li>🎁 Special Offers</li>
            <li>🔐 Account Security Alerts</li>
          </ul>

        </div>
      )}

      <button
        className="save-btn"
        onClick={saveSettings}
      >
        Save Settings
      </button>

    </div>
  );
};

export default Notifications;