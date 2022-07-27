import EventFeed from "../components/eventFeed";
import Quote from "../pageComponents/quote/quote";

const Feed = () => {
  return (
    <body>
      <Quote />
      <div>
        <div>
          <EventFeed />
        </div>
      </div>
    </body>
  );
};

export default Feed;
