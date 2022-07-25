import ContentItem from "../components/contentItem";
import "../css/app.css";
import "../css/about.css";
import Quote from "../pageComponents/quote/quote";

const About = () => {
  return (
    <div className="AppStyles">
      <Quote />
      <h1 className="Header1Styled">About</h1>

      <div className="Wrapper">
        <div className="whatIsCodestation">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia accumsan sagittis. Mauris gravida lorem eu nulla gravida
            tempus. Nunc metus sapien, luctus et dui sagittis, cursus lacinia
            arcu.{" "}
          </p>
          <p>
            Donec elementum elit tristique mauris consectetur volutpat. Donec
            eget nisl neque. Nullam quis nisl a turpis dignissim dapibus. In et
            metus quam. Phasellus mollis pulvinar purus, at rhoncus dolor congue
            nec. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Phasellus at tortor ut tellus
            lacinia eleifend.
          </p>
        </div>
        <div className="ConentFlexbox">
          <ContentItem />
        </div>
      </div>
    </div>
  );
};

export default About;
