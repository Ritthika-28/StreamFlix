import { useState, useEffect } from "react";
import { auth } from "../../services/firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCamera } from "react-icons/fa";

import "./EditProfile.css";

const EditProfile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (!auth.currentUser) return;

    const uid = auth.currentUser.uid;

    const savedProfile = JSON.parse(
      localStorage.getItem(`profile_${uid}`)
    );

    if (savedProfile) {
      setName(savedProfile.name || "");
      setPhoto(savedProfile.photo || "");
    } else {
      setName(auth.currentUser.displayName || "");
      setPhoto(auth.currentUser.photoURL || "");
    }
  }, []);

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const uid = auth.currentUser.uid;

      const profileData = {
        name,
        email: auth.currentUser.email,
        photo,
      };

      localStorage.setItem(
        `profile_${uid}`,
        JSON.stringify(profileData)
      );

      toast.success("Profile Updated Successfully");

      navigate("/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-card">

        <h1>Edit Profile</h1>

        <form onSubmit={handleSave}>

          <div className="photo-section">

            <img
              src={
                photo ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="Profile"
              className="profile-photo"
            />

            <label className="upload-btn">
              <FaCamera />
              Change Photo

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handlePhoto}
              />
            </label>

          </div>

          <label>Full Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>

          <input
            type="email"
            value={auth.currentUser?.email || ""}
            disabled
          />

          <button type="submit">
            Save Changes
          </button>

        </form>

      </div>
    </div>
  );
};

export default EditProfile;