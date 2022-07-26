import { React } from "react";
// import ReactDOM from "react";
import "../css/app.css";
import "../css/contact.css";
// import Quote from "../pageComponents/quote/quote";
import threePeople from "../images/threePeople.jpg";


const Contact = () => {
  return (
    <div className="contactPage">
      {/* quote not working with styling for page, maybe just leave it off? */}
      {/* <Quote /> */}
      <div className="imageBox">
        <img className="contactImage" src={threePeople} />
      </div>

      {/* contact form */}
      <div className="contactInput">

        <div>
        <h1>const contact = require (‘hello there’)</h1>
        </div>

        <div>
        <p className="textTest">const Name =</p>
        <div className="smallBox"></div>
        </div>

        <div>
        <p className="textTest">const Email =</p>
        <div className="smallBox"></div>
        </div>

        <div>
        <p className="textTest">let Message =</p>
        <div className="bigBox"></div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
