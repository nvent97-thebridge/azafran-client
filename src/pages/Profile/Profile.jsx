import "./Profile.scss";
import person from "../../assets/person.svg";
import location from "../../assets/location.svg";

const Profile = () => {

  const userInfo = {
    fullname: "Jaimi Loupez",
    location: "Maislata",
  };

  return (
    <div className="profileContainer">
      <h1>Profile</h1>
      <div className="profileInfo">
        <h3>
          <img src={person} alt="" className="iconInfo" />
          <b>Fullname: </b>
          <span>{userInfo.fullname}</span>
        </h3>
        <h3>
          <img src={location} alt="" className="iconInfo" />
          <b>Location: </b>
          <span>{userInfo.location}</span>
        </h3>
      </div>
    </div>
  );
};

export { Profile };
