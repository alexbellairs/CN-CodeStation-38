import { useState } from "react";
import { updateFetch, deleteFetch } from "../utlis";
import { Link } from "react-router-dom";
import "../css/app.css";
import "../css/account.css";
import Quote from "../pageComponents/quote/quote";
import harold from "../images/harold.jpg";

const Account = ({ setter, user }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    const updateObj = { username, email, password };
    for (const key in updateObj) {
      if (!updateObj[key]) {
        delete updateObj[key];
      }
    }
    await updateFetch({ username: user }, updateObj, setter);
  };

  return (
  <body>
    <div className="AppStyles">
      <Quote />
    <div className="ContentStyled">
        <form className="banner" onSubmit={submitHandler}>
          <h2>Update Profile</h2>
          <input className="inputs"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input className="inputs"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input className="inputs"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button className="update" type="submit">Update</button>
        </form>
        <button className="delete" onClick={() => deleteFetch(setter())}>
          <Link to="/">Delete Account</Link>
        </button>
        <button className="logOut"
          onClick={() => {
            setter();
          }}
        >
          <Link to="/">Log Out</Link>
        </button>
    </div>
    <img className="imgH" src={harold} alt="Hide the pain Harold" />
    <div className="mainContainer">
    <div className="bioUserWrapper">
      <div className="userContainer">
      <h3>User</h3>
      <div className="userBox"> HTP HAROLD</div>
      </div>
      <div className="bioContainer">
      <h3>Bio</h3>
      <div className="bioBox"> ADSHDFIGHGKSNGDSKFHWIGHRF </div>
      </div>
      <br></br>
    </div>
    <div className="buttonWrapper">
      <div className="buttonContainer">
        <div className="codeBox"> Alex's Android emporium</div>
        <button className="codeButton" > i </button>
        <button className="codeButton" > X </button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox">Gaz's  </div>
        <button className="codeButton" > i </button>
        <button className="codeButton" > X </button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"> James's </div>
        <button className="codeButton" > i </button>
        <button className="codeButton" > X </button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"> Kat's concatenating course</div>
        <button className="codeButton" > i </button>
        <button className="codeButton" > X </button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"> John's</div>
        <button className="codeButton" > i </button>
        <button className="codeButton" > X </button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"> Abdelbar's autonomous </div>
        <button className="codeButton" > i </button>
        <button className="codeButton" > X  </button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox">Karl's </div>
        <button className="codeButton" > i </button>
        <button className="codeButton" > X  </button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"> Renee's </div>
        <button className="codeButton" > i </button>
        <button className="codeButton" > X </button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"> Dom's DOM domination</div>
        <button className="codeButton" > i </button>
        <button className="codeButton" > X </button>
      </div>
      <br></br>
    </div>
    </div>
    </div>
    <div className="contactInput"></div>
  </body>
  );
};

export default Account;
