import ContentItem from "../components/contentItem";
import "../css/app.css";
import "../css/about.css";
//import Quote from "../components/quote"; // nOT NEEDED?
import prettyCodeLight from "../images/Used Stock Photos/prettyCodeLight.jpg";
import Quote from "../pageComponents/quote/quote";

const About = () => {
  return (
    <div className="AppStyles">
      <Quote />
      <h1 className="Header1Styled">About</h1>

      <div className="Wrapper">
        <div className="subTitles">
          <h2>What is Code Station?</h2>
          <h2>Who made this?</h2>
        </div>
        <div className="whatIsCodestation">
          <div className="whatIsText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia accumsan sagittis. Mauris gravida lorem eu nulla gravida
              tempus. Nunc metus sapien, luctus et dui sagittis, cursus lacinia
              arcu. Nulla euismod, nisl eu consectetur consectetur, nisl nunc.
            </p>
            <p>
              Donec elementum elit tristique mauris consectetur volutpat. Donec
              eget nisl neque. Nullam quis nisl a turpis dignissim dapibus. In
              et metus quam. Phasellus mollis pulvinar purus, at rhoncus dolor
              congue nec.
            </p>
          </div>
          <div className="whatIsImage">
            <img src={prettyCodeLight} />
          </div>
        </div>
        <div className="ConentFlexbox">
          <ContentItem />
        </div>
      </div>
    </div>
  );
};

export default About;
