import { React, useState } from "react";
import ReactDOM from "react";
import "../css/app.css";
import "../css/contact.css";
import Quote from "../components/quote";
import threePeople from "../images/threePeople.jpg";

// function ContactForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputs((values) => ({ ...values, [name]: [value] }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         const Name
//         <input
//           type="text"
//           name="name"
//           value={inputs.name || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         const Email
//         <input
//           type="text"
//           name="email"
//           value={inputs.email || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         let Message =
//         <input
//           type="text"
//           name="message"
//           value={inputs.message || ""}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ContactForm />);

const Contact = () => {
  return (
    <div className="contactPage">
      <Quote />
      <div className="imageBox">
        <img src={threePeople} />
      </div>
      <div className="contactInput">
        <h1>const contact = require (‘hello there’)</h1>
        {/* <ContactForm/> */}
        <p className="name">const Name =</p>
        <div className="nameBox"></div>
        <p className="email">const Email =</p>
        <div className="emailBox"></div>
        <p className="message">let Message =</p>
        <div className="messageBox"></div>

        {/* import Quote from "../components/quote";
import "../css/app.css";

const Profile = () => {
  return (
    <div className="AppStyles">
      <Quote />
      <div className="ContentStyled"> */}
        {/* <h1 className="Header1Styled">Contact</h1> */}
      </div>
    </div>
  );
};

export default Contact;
