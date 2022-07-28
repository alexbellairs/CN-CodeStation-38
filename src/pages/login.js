// Abdelbar was part of the coding for this page

import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { signUp, tokenFetch } from "../utlis";
import "../css/app.css";
import "../css/login.css";
import LoginHeader from "../pageComponents/loginHeader1/loginHeader";
import WomanWithLaptop from "../images/womanWithLaptop.jpg";

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
      <LoginHeader />



      <div className="MasterContainer">

      <div className="LeftMainImagePadding"></div>

          <img
            className="WomanImg"
            src={WomanWithLaptop}
            alt="womenWithLaptop"
          />
        <div className="RightMainImagePadding"></div>

        <div className="LogInSignUpContainer">
          <div className="FingerTipsText">
            Over 10,000 coding events at your finger tips
          </div>

          <div className="SignUpNowContainer">
            <div className="LogInSignUpContainer">

                  {user && <Navigate to="/about" />}
                  <form className="SignUpButtonAndFields" onSubmit={submitHandler}
                  >
                    
                  <div className="InputFields">
                    <div>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                      />
                    </div>
                    {!logBool && (


                      <div>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                      </div>


                    )}
                    <div>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                    </div>


                    <button className="SignupStyle" type="submit">
                      {logBool ? "Log In" : "Sign Up Now"}
                    </button>
                  </form>
                </div>


              </div>

              <button
                className="AlreadyHaveStyle"
                onClick={() => setLogBool(!logBool)}
              >
                {logBool ? "Don't " : "Already "} have an account?
              </button>
            </div>
          </div>
        </div>

  );
};

export default Login;
