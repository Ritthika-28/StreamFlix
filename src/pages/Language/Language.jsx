import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import "./Language.css";

const Language = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-subpage">

      <div className="sub-header">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>

        <h2>Language</h2>
      </div>

      <div className="option active">
        <span>English</span>
        <FaCheck />
      </div>

      <div className="option">
        <span>Tamil</span>
      </div>

      <div className="option">
        <span>Hindi</span>
      </div>

    </div>
  );
};

export default Language;