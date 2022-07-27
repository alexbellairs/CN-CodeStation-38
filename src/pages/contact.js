import { React } from "react";
// import ReactDOM from "react";
import "../css/app.css";
import "../css/contact.css";
import Quote from "../pageComponents/quote/quote";
import threePeople from "../images/threePeople.jpg";

const Contact = () => {
  return (
    <div className="contactPage">
      <Quote />
      <div className="MainContainer">
        <div className="imageBox">
          <img className="contactImage" src={threePeople} alt="three people" />
        </div>

        {/* contact form */}
        <div className="contactInput">
          <h1 className="ContactFormTitle">
            const contact = require ‘hello there’
          </h1>

          <div className="ContactFields">
            <div>
              <p className="ContactFormText">const Name =</p>
            </div>
            <div className="smallBox"></div>
          </div>

          <div className="ContactFields">
            <div>
              <p className="ContactFormText">const Email =</p>
            </div>
            <div className="smallBox"></div>
          </div>

          <div className="ContactFields">
            <div>
              <p className="ContactFormText">let Message =</p>
            </div>
            <div className="bigBox"></div>
          </div>

          <div>
            <button className="submitBtn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
