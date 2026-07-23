import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBell,
  FaMoon,
  FaGlobe,
  FaLock,
  FaHeart,
  FaHistory,
  FaInfoCircle,
  FaChevronRight,
} from "react-icons/fa";

import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-page">

      <h1>⚙ Settings</h1>

      <div className="settings-card">

        {/* Edit Profile */}
        <div
          className="setting-item"
          onClick={() => navigate("/edit-profile")}
        >
          <FaUser />
          <span>Edit Profile</span>
          <FaChevronRight />
        </div>

        {/* Notifications */}
        <div
          className="setting-item"
          onClick={() => navigate("/notifications")}
        >
          <FaBell />
          <span>Notifications</span>
          <FaChevronRight />
        </div>

        {/* Dark Mode */}
        <div
          className="setting-item"
          onClick={() => navigate("/dark-mode")}
        >
          <FaMoon />
          <span>Dark Mode</span>
          <FaChevronRight />
        </div>

        {/* Language */}
        <div
          className="setting-item"
          onClick={() => navigate("/language")}
        >
          <FaGlobe />
          <span>Language</span>
          <FaChevronRight />
        </div>

        {/* Privacy */}
        <div
          className="setting-item"
          onClick={() => navigate("/privacy")}
        >
          <FaLock />
          <span>Privacy</span>
          <FaChevronRight />
        </div>


        {/* Watch History */}
        <div
          className="setting-item"
          onClick={() => navigate("/watch-history")}
        >
          <FaHistory />
          <span>Watch History</span>
          <FaChevronRight />
        </div>

        {/* About */}
        <div
          className="setting-item"
          onClick={() => navigate("/about")}
        >
          <FaInfoCircle />
          <span>About App</span>
          <FaChevronRight />
        </div>

      </div>

    </div>
  );
};

export default Settings;