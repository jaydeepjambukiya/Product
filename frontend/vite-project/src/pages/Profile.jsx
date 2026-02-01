import { useAuth } from "../context/AuthContext";
import "./Auth.css";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>My Profile</h2>

        <div className="profile-row">
          <span>Name</span>
          <b>{user?.name}</b>
        </div>

        <div className="profile-row">
          <span>Email</span>
          <b>{user?.email}</b>
        </div>

        <div className="profile-row">
          <span>Account Created</span>
          <b>{new Date(user?.createdAt).toLocaleDateString()}</b>
        </div>
      </div>
    </div>
  );
};

export default Profile;
