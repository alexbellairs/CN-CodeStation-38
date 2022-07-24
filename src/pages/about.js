import ContentItem from "../components/contentItem";
import "../css/app.css";
import "../css/about.css";
import Quote from "../components/quote";

const About = () => {
  return (
    <div className="AppStyles">
      <Quote />
      <div className="ConentFlexbox">
        <h1 className="Header1Styled">About</h1>
        <ContentItem />
      </div>
    </div>
  );
};

export default About;
