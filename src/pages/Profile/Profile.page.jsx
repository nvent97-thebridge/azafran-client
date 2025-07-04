import { useEffect, useState } from "react";
import { Ingredient } from "../../components/molecules/Ingredient/Ingredient";
import { Button } from "../../components/atom/Button/Button";
import "./Profile.css";

const ProfilePage = () => {
  const username = localStorage.getItem("user");
  const password = localStorage.getItem("password");

  // function datos (data){
  //      setUsername(data.user)
  //      setPassword(data.password)
  // }

  useEffect(() => {
    fetch("http://localhost:8080/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error loading profite");
        return res.json();
      })
      .then((data) => console.log (data))
      .catch(console.error);
  }, []);
  
  console.log (username)
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-header">
          <h1 className="profile-title">Profile</h1>
        </div>
        <div className="profile-grid">
          <h4><p>Username: {username}</p>
          <p>Password:  {password}</p></h4>
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
