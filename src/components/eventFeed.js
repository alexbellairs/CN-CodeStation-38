import { useEffect, useState } from "react";
import { fetchContest } from "../utlis";
import EventMap from "./eventMap";
import "../css/events.css";

const EventFeed = () => {
  const [contests, setContest] = useState([]);

  useEffect(() => {
    fetchContest(setContest);
  }, []);

  return (
    <div className="pageFlex">
      {contests.map((contest, index) => {
        return (
          <EventMap
            name={contest.name}
            url={contest.url}
            site={contest.site}
            status={contest.staus}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default EventFeed;
