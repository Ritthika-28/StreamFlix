import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Privacy.css";

const Privacy = () => {
  const navigate = useNavigate();

  const [privateProfile, setPrivateProfile] = useState(false);
  const [showHistory, setShowHistory] = useState(true);
  const [saveSearch, setSaveSearch] = useState(true);
  const [emailNotification, setEmailNotification] = useState(true);

  useEffect(() => {
    setPrivateProfile(
      JSON.parse(localStorage.getItem("privateProfile")) || false
    );

    setShowHistory(
      JSON.parse(localStorage.getItem("showHistory")) ?? true
    );

    setSaveSearch(
      JSON.parse(localStorage.getItem("saveSearch")) ?? true
    );

    setEmailNotification(
      JSON.parse(localStorage.getItem("emailNotification")) ?? true
    );
  }, []);

  const toggleSetting = (key, value, setter) => {
    setter(!value);
    localStorage.setItem(key, JSON.stringify(!value));
  };

  const clearWatchHistory = () => {
    localStorage.removeItem("watchHistory");
    alert("Watch History Cleared Successfully!");
  };

  const clearSearchHistory = () => {
    localStorage.removeItem("searchHistory");
    alert("Search History Cleared Successfully!");
  };

  return (
    <div className="settings-subpage">

      <div className="sub-header">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <h2>Privacy</h2>
      </div>

      <div className="option">
        <span>Private Profile</span>
        <input
          type="checkbox"
          checked={privateProfile}
          onChange={() =>
            toggleSetting(
              "privateProfile",
              privateProfile,
              setPrivateProfile
            )
          }
        />
      </div>

      <div className="option">
        <span>Show Watch History</span>
        <input
          type="checkbox"
          checked={showHistory}
          onChange={() =>
            toggleSetting(
              "showHistory",
              showHistory,
              setShowHistory
            )
          }
        />
      </div>

      <div className="option">
        <span>Save Search History</span>
        <input
          type="checkbox"
          checked={saveSearch}
          onChange={() =>
            toggleSetting(
              "saveSearch",
              saveSearch,
              setSaveSearch
            )
          }
        />
      </div>

      <div className="option">
        <span>Email Notifications</span>
        <input
          type="checkbox"
          checked={emailNotification}
          onChange={() =>
            toggleSetting(
              "emailNotification",
              emailNotification,
              setEmailNotification
            )
          }
        />
      </div>
          <div className="privacy-actions">

  <button
    className="danger-btn"
    onClick={clearWatchHistory}
  >
    🗑 Clear Watch History
  </button>

  <button
    className="danger-btn"
    onClick={clearSearchHistory}
  >
    🔍 Clear Search History
  </button>

</div>
    

    </div>
  );
};

export default Privacy;