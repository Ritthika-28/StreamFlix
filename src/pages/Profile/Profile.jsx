import { useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

import {
  FaUserCircle,
  FaHeart,
  FaPlayCircle,
  FaCrown,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  const [user, setUser] = useState(null);
  const [watchCount, setWatchCount] = useState(0);

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    photo: "",
  });

  const [isPrivate, setIsPrivate] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      const history =
        JSON.parse(localStorage.getItem("watchHistory")) || [];

      setWatchCount(history.length);

      if (currentUser) {
        const uid = currentUser.uid;

        const savedProfile = JSON.parse(
          localStorage.getItem(`profile_${uid}`)
        );

        if (savedProfile) {
          setProfileData(savedProfile);
        } else {
          setProfileData({
            name: currentUser.displayName || "",
            email: currentUser.email || "",
            photo: currentUser.photoURL || "",
          });
        }
      }

      setIsPrivate(
        JSON.parse(localStorage.getItem("privateProfile")) || false
      );
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <div className="profile-container">

        {/* Header */}

        <div className="profile-header">

          <div className="profile-left">

            {profileData.photo ? (
              <img
                src={profileData.photo}
                alt="Profile"
                className="profile-avatar-img"
              />
            ) : (
              <FaUserCircle className="profile-avatar" />
            )}

          </div>

          <div className="profile-right">

            <h1>
              {profileData.name ||
                user?.displayName ||
                "User"}
            </h1>

            {isPrivate ? (
              <>
                <span className="private-badge">
                  🔒 Private Profile
                </span>

                <p className="private-text">
                  Your profile information is hidden.
                </p>
              </>
            ) : (
              <>
                <p>
                  {profileData.email ||
                    user?.email ||
                    "No Email"}
                </p>

                <button
                  className="edit-btn"
                  onClick={() => navigate("/edit-profile")}
                >
                  Edit Profile
                </button>
              </>
            )}

          </div>

        </div>

        {/* Cards */}

        {!isPrivate && (
          <div className="profile-cards">

            <div
              className="card"
              onClick={() => navigate("/my-list")}
            >
              <FaHeart />

              <div>
                <h3>Wishlist</h3>
                <p>{wishlist.length} Movies</p>
              </div>

            </div>

            <div
              className="card"
              onClick={() => navigate("/continue-watching")}
            >
              <FaPlayCircle />

              <div>
                <h3>Continue Watching</h3>
                <p>{watchCount} Movies</p>
              </div>

            </div>

            <div className="card">

              <FaCrown />

              <div>
                <h3>Membership</h3>
                <p>Free Plan</p>
              </div>

            </div>

            <div className="card">

              <FaCalendarAlt />

              <div>
                <h3>Joined</h3>

                <p>
                  {user?.metadata?.creationTime
                    ? new Date(
                        user.metadata.creationTime
                      ).toLocaleDateString()
                    : "Unknown"}
                </p>

              </div>

            </div>

          </div>
        )}

        {/* Account */}

        <div className="account-section">

          <h2>Account</h2>

          <div
            className="account-option"
            onClick={() => navigate("/settings")}
          >
            <FaCog />
            <span>Settings</span>
          </div>

          <button
            className="logout-btn"
            onClick={logout}
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Profile;