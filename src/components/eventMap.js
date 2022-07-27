import { useState } from "react";
import "../css/events.css";

const EventMap = ({ name, url, site, status }) => {
  const [goingBool, setGoingBool] = useState(false);
  return (
    <div className="container">
      <div className="innerContainer">
        <h3 className="eventName">
          <a href={url} rel="noreferrer noopener" target="_blank">
            {name}
          </a>
        </h3>
        <ul className="info">
          <li>Location: {site}</li>
          <li>
            Status: {status}{" "}
            <button
              className="btns"
              onClick={() => setGoingBool(!goingBool)}
              style={{
                backgroundColor: goingBool ? "#0e6029" : "#e5ffee",
                color: goingBool ? "#e5ffee" : "#0e6029",
              }}
            >
              {goingBool ? "Going" : "Not Going"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventMap;
