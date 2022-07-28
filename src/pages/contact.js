import { React } from "react";
// import ReactDOM from "react";
import "../css/app.css";
import "../css/contact.css";
import Quote from "../pageComponents/quote/quote";
import threePeople from "../images/threePeople.jpg";
import Navbar from "../components/navbar";
import Header from "../pageComponents/header1/header";

const Contact = () => {
  return (
    <div className="contactPage">
      <Quote />
      <Navbar />
      <Header />
      <div className="MainContainer">
        <div className="imageBox">
          <img className="contactImage" src={threePeople} alt="three people" />
        </div>

        {/* contact form */}
        <div className="contactInput">
          <h1 className="ContactFormTitle">Contact Form</h1>

          <div className="ContactFields">
            <div>
              <p className="ContactFormText">Name</p>
            </div>
            <div className="smallBox"></div>
          </div>

          <div className="ContactFields">
            <div>
              <p className="ContactFormText">Email</p>
            </div>
            <div className="smallBox"></div>
          </div>

          <div className="ContactFields">
            <div>
              <p className="ContactFormText">Message</p>
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
