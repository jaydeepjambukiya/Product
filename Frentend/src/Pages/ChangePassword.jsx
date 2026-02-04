import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/user/change-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Password changed successfully ✅");
        setOldPassword("");
        setNewPassword("");
        navigate("/");
      } else {
        alert(data.message || "Password change failed ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-[350px]"
      >
        <h2 className="text-xl font-bold text-center mb-4">
          Change Password 🔒
        </h2>

        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
