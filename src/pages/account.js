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
        <form onSubmit={submitHandler}>
          <h2>Update Profile</h2>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button type="submit">Update</button>
        </form>
        <button onClick={() => deleteFetch(setter())}>
          <Link to="/">Delete Account</Link>
        </button>
        <button
          onClick={() => {
            setter();
          }}
        >
          <Link to="/">Log Out</Link>
        </button>
    </div>
    <img className="imgH" src={harold} />
    <div className="mainContainer">
    <div className="bioUserWrapper">
      <div className="userContainer">
      <h3>User</h3>
      <div className="userBox"></div>
      </div>
      <div className="bioContainer">
      <h3>Bio</h3>
      <div className="bioBox"></div>
      </div>
      <br></br>
    </div>
    <div className="buttonWrapper">
    <div className="buttonContainer">
        <div className="codeBox"></div>
        <button className="codeButton" ></button>
        <button className="codeButton" ></button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"></div>
        <button className="codeButton" ></button>
        <button className="codeButton" ></button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"></div>
        <button className="codeButton" ></button>
        <button className="codeButton" ></button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"></div>
        <button className="codeButton" ></button>
        <button className="codeButton" ></button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"></div>
        <button className="codeButton" ></button>
        <button className="codeButton" ></button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"></div>
        <button className="codeButton" ></button>
        <button className="codeButton" ></button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"></div>
        <button className="codeButton" ></button>
        <button className="codeButton" ></button>
      </div>
      <br></br>
      <div className="buttonContainer">
        <div className="codeBox"></div>
        <button className="codeButton" ></button>
        <button className="codeButton" ></button>
      </div>
    </div>
    </div>
    </div>
    <div className="contactInput"></div>
  </body>
  );
};

export default Account;
