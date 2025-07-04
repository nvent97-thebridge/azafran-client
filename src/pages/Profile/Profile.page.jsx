import { useEffect, useState } from "react";
import { Ingredient } from "../../components/molecules/Ingredient/Ingredient";
import { Button } from "../../components/atom/Button/Button";
import "./Profile.css";

const ProfilePage = () => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  // function datos{
    //      setUsername(data.user)
        //      setPassword(data.password)
    // }

  useEffect(() => {
    // fetch("http://localhost:8080/profile", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     if (!res.ok) throw new Error("Error loading profite");
    //     return res.json();
    //   })
    //   .then((data) => datos (data)}
    //   .catch(console.error);
  }, []);
  setUsername(localStorage.getItem ("user"))
  setPassword(localStorage.getItem ("password"))
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-header">
          <h1 className="profile-title">Profile</h1>
        </div>
        <div className="profile-grid">
          <h6>Username: {username}Password:{password}</h6>
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
