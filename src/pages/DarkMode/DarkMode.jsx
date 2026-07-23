import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./DarkMode.css";

const DarkMode = () => {
  const navigate = useNavigate();

  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="settings-subpage">

      <div className="sub-header">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <h2>Dark Mode</h2>
      </div>

      <div className="option">
        <span>Enable Dark Mode</span>

        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>

    </div>
  );
};

export default DarkMode;