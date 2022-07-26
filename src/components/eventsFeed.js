import { useEffect, useState } from "react";
import { fetchContest } from "../utlis";
import "../css/events.css";

const EventsFeed = () => {
  // useState
  const [contests, setContest] = useState([]);

  useEffect(() => {
    fetchContest(setContest);
  }, []);

  // Handle click for removing items
  const handleRemove = (index) => {
    let storeContests = [...contests];
    storeContests.splice(index, 1);
    setContest(storeContests);
    console.log(userEvents);
  };

  //
  const [userEvents, setUserEvents] = useState([{}]);
  //
  const handleInterested = (index) => {
    let storeContests = [...contests];
    // console.log(storeContests);
    let storeUserEvent = [...userEvents];
    // console.log(storeUserEvent);
    let toStore = storeContests[index];
    // console.log(toStore);
    storeUserEvent.push(toStore);
    setUserEvents(storeUserEvent);
    handleRemove(index);
  };
  let addBtn = "{add}";
  let info = "{info}";

  return (
    <div className="pageFlex">
      {contests.map((contest, i) => {
        return (
          <div key={i}>
            <div className="container">
              <div className="innerContainer">
                <h3 className="eventName">{contest.name}</h3>
                <ul className="info">
                  <ul>Start Time: {contest.start_time}</ul>
                  <ul>End Time: {contest.end_time}</ul>
                  <ul>Location: {contest.site}</ul>
                  <ul>Status: {contest.status}</ul>
                </ul>
              </div>
              <div className="btns">
                <a
                  className="btnLt"
                  href={contest.url}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {`${info}`}
                </a>
                <button className="btnRt" onClick={() => handleInterested(i)}>
                  {`${addBtn}`}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventsFeed;
