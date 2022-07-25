import Quote from "../components/quote";
import "../css/app.css";

const Profile = () => {
  return (
    <div className="AppStyles">
      <Quote />
      <div className="ContentStyled">
        <h1 className="Header1Styled">Event Info</h1>
      </div>
    </div>
  );
};

export default Profile;