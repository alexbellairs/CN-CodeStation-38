import { React } from "react";
// import ReactDOM from "react";
import "../css/app.css";
import "../css/contact.css";
// import Quote from "../pageComponents/quote/quote";
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
      {/* <Quote /> */}
      <div className="imageBox">
        <img className="contactImage" src={threePeople} />
      </div>
      <div className="contactInput">
        <h1>const contact = require (‘hello there’)</h1>
        {/* <ContactForm/> */}
        <p>const Name =</p>
        <div className="nameBox"></div>
        <p>const Email =</p>
        <div className="emailBox"></div>
        <p>let Message =</p>
        <div className="messageBox"></div>
      </div>
    </div>
  );
};

export default Contact;
