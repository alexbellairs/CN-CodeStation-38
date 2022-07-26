// import ContentItem from "../components/contentItem";
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
            <img
              id="prettyCodeLightImg"
              src={prettyCodeLight}
              alt="Woman in tech"
            />
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
                  <img className="ProfilePicture" src={blankFace} alt="Profile pic"></img>
                  <div className="ProfileName">Kat</div>
                  <a class="ProfileButton" href="https://github.com/Indykatz">Link to Git</a>
                </div>
                {/* PROFILE 2 */}
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace} alt="Profile pic"></img>
                  <div className="ProfileName">Dom</div>
                  <a class="ProfileButton" href="https://github.com/harb0t">Link to Git</a>
                </div>

                {/* PROFILE 3 */}
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace} alt="Profile pic"></img>
                  <div className="ProfileName">Wren</div>
                  <a class="ProfileButton" href="https://github.com/Wren4Wren">Link to Git</a>
                </div>
              </div>

              <div className="MiddleThreeProfiles">
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace} alt="Profile pic"></img>
                  <div className="ProfileName">Alex B</div>
                  <a class="ProfileButton" href="https://github.com/alexbellairs">Link to Git</a>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace} alt="Profile pic"></img>
                  <div className="ProfileName">Gaz</div>
                  <a class="ProfileButton" href="https://github.com/garethhough">Link to Git</a>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace} alt="Profile pic"></img>
                  <div className="ProfileName">Karl</div>
                  <a class="ProfileButton" href="https://github.com/KarlEvans70">Link to Git</a>
                </div>
              </div>

              <div className="BottomThreeProfiles">
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace} alt="Profile pic"></img>
                  <div className="ProfileName">James</div>
                  <a class="ProfileButton" href="https://github.com/jamlindsay97">Link to Git</a>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace} alt="Profile pic"></img>
                  <div className="ProfileName">Abdelbar</div>
                  <a class="ProfileButton" href="https://github.com/Javabar">Link to Git</a>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={blankFace} alt="Profile pic"></img>
                  <div className="ProfileName">John</div>
                  <a class="ProfileButton" href="https://github.com/jbridges373">Link to Git</a>
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