import ContentItem from "../components/contentItem";
import "../css/app.css";
import "../css/about.css";
//import Quote from "../components/quote"; // nOT NEEDED?
import prettyCodeLight from "../images/prettyCodeLight.jpg";
import Quote from "../pageComponents/quote/quote";
import blankFace from "../images/blankFace.png";

const About = () => {
  return (
    <div className="AppStyles">
      <Quote />

      <div className="AboutPageMainContainer">
        {/* LEFT SECTION, What is Code Station */}

        <div className="whatIsCodestation">
          {/* TITLE */}
          <div className="WhatIsTitle">What Is Code Station?</div>

          <div className="TextAndPicture">
            <div className="whatIsTextBox">
              {/* COPY */}
              <p className="aboutP">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia accumsan sagittis. Mauris gravida lorem eu nulla gravida
                tempus. Nunc metus sapien, luctus et dui sagittis, cursus
                lacinia arcu. Nulla euismod, nisl eu consectetur consectetur,
                nisl nunc.
              </p>
              <p className="aboutP">
                Donec elementum elit tristique mauris consectetur volutpat.
                Donec eget nisl neque. Nullam quis nisl a turpis dignissim
                dapibus. In et metus quam. Phasellus mollis pulvinar purus, at
                rhoncus dolor congue nec.
              </p>
              {/* PHOTO */}
            </div>
            <img id="prettyCodeLightImg" src={prettyCodeLight} />
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="TeamProfiles">
          <div className="WhoMadeThisTitle">Who made this?</div>

          <div className="EveryonesProfilesBox">
            <div className="ProfileBoxPadding">
              <div className="TopThreeProfiles">
                {/* PROFILE 1 */}
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace}></img>
                  <div className="ProfileName">Kat</div>
                  <button className="ProfileButton">Link to Git</button>
                </div>
                {/* PROFILE 2 */}
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace}></img>
                  <div className="ProfileName">Dom</div>
                  <button className="ProfileButton">Link to Git</button>
                </div>

                {/* PROFILE 3 */}
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace}></img>
                  <div className="ProfileName">Wren</div>
                  <button className="ProfileButton">Link to Git</button>
                </div>
              </div>

              <div className="MiddleThreeProfiles">
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace}></img>
                  <div className="ProfileName">Alex B</div>
                  <button className="ProfileButton">Link to Git</button>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace}></img>
                  <div className="ProfileName">Gaz</div>
                  <button className="ProfileButton">Link to Git</button>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace}></img>
                  <div className="ProfileName">Karl</div>
                  <button className="ProfileButton">Link to Git</button>
                </div>
              </div>

              <div className="BottomThreeProfiles">
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace}></img>
                  <div className="ProfileName">James</div>
                  <button className="ProfileButton">Link to Git</button>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace}></img>
                  <div className="ProfileName">Abdelbar</div>
                  <button className="ProfileButton">Link to Git</button>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace}></img>
                  <div className="ProfileName">John</div>
                  <button className="ProfileButton">Link to Git</button>
                </div>
              </div>
            </div>
          </div>

          {/* <ContentItem /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
