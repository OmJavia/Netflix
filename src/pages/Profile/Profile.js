import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

// Import profile images
import profile1 from "../../assests/images/profile1.jpg";
import profile2 from "../../assests/images/profile2.jpg";
import profile3 from "../../assests/images/profile3.jpg";
import profile4 from "../../assests/images/profile4.jpg";
import defaultProfile from "../../assests/images/default.jpg";

// Import the Netflix profile click sound
import netflixClickSound from "../../assests/sound/Start.mp3";

const ProfilePage = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Comedy", image: profile1 },
    { id: 2, name: "Thrilling", image: profile2 },
    { id: 3, name: "Horror", image: profile3 },
    { id: 4, name: "Suspense", image: profile4 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProfile, setNewProfile] = useState({ name: "" });
  const navigate = useNavigate();

  const handleProfileClick = (name) => {
    // Play the Netflix profile click sound
    const audio = new Audio(netflixClickSound);
    audio.play();

    console.log(`Navigating to home page for ${name}`);
    navigate("/Home");
  };

  return (
    <div className="profile-page">
      <h1>Who's watching?</h1>
      <br />
      <div className="profiles">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="profile-card"
            onClick={() => handleProfileClick(profile.name)}
          >
            <img
              src={profile.image}
              alt={profile.name}
              onError={(e) => {
                if (!e.target.dataset.failed) {
                  e.target.dataset.failed = true;
                  e.target.src = defaultProfile;
                }
              }}
            />
            <p>{profile.name}</p>
            <small>{profile.taste}</small>
          </div>
        ))}
        <div className="add-profile-card" onClick={() => setIsModalOpen(true)}>
          <div className="add-icon">+</div>
          <p>Add Profile</p>
        </div>
      </div>

      {/* Modal for adding a new profile */}
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <h2>Add New Profile</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newProfileData = {
                  id: profiles.length + 1,
                  name: newProfile.name,
                  image: defaultProfile,
                };
                setProfiles([...profiles, newProfileData]);
                setNewProfile({ name: "" });
                setIsModalOpen(false);
              }}
            >
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={newProfile.name}
                  onChange={(e) => setNewProfile({ name: e.target.value })}
                  required
                />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
