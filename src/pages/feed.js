import EventFeed from "../components/eventFeed";
import Navbar from "../components/navbar";
import Header from "../pageComponents/header1/header";
import Quote from "../pageComponents/quote/quote";

const Feed = () => {
  return (
    <body>
      <Quote />
      <Navbar />
      <Header />
      <div>
        <div>
          <EventFeed />
        </div>
      </div>
    </body>
  );
};

export default Feed;
