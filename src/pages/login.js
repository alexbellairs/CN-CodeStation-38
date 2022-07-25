import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { signUp, tokenFetch } from "../utlis";
import "../css/app.css";
import "../css/login.css"
import Quote from "../components/quote";
import womenWithLaptop from "../images/Place holder images/harold.jpg";

const Login = ({ setter, user }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [logBool, setLogBool] = useState(false);

  useEffect((setter) => {
    if (localStorage.key("myToken")) {
      tokenFetch(setter);
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    await signUp({ username, email, password }, setter);
  };
  return (
    <div className="AppStyles">
      <Quote />
      <img className="ImgStyle2" src={womenWithLaptop} alt="womenWithLaptop"/>
      <h4 className="Text">Over 10,000 coding events at your finger tips</h4>
      <div className="ContentStyled">
        {user && <Navigate to="/profile" />}
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          {!logBool && (
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          )}
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button className="SignupStyle" type="submit">{logBool ? "Log In" : "Sign Up Now"}</button>
        </form>
        
        <button className="AlreadyHaveStyle"  onClick={() => setLogBool(!logBool)}>
          {logBool ? "Don't " : "Already "} have an account?
        </button>
        </div>
    </div>
  );
};

export default Login;
