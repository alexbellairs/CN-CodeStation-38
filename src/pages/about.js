// import ContentItem from "../components/contentItem";
import "../css/app.css";
import "../css/about.css";
import Quote from "../pageComponents/quote/quote";

// images
import prettyCodeLight from "../images/prettyCodeLight.jpg";
import Dom from "../images/Dom.png";
import John from "../images/John.png";
import Abdelbar from "../images/Abdelbar.png";
import Kat from "../images/Kat.png";
import Wren from "../images/Wren.png";
import Gaz from "../images/Gaz.png";
import Karl from "../images/Karl.png";
import Alex from "../images/Alex.png";
import James from "../images/James.png";


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
                  <img className="ProfilePicture" src={Kat} alt="Profile pic"></img>
                  <div className="ProfileName">Kat</div>
                  <a class="ProfileButton" href="https://github.com/Indykatz">Link to Git</a>
                </div>
                {/* PROFILE 2 */}
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={Dom} alt="Profile pic"></img>
                  <div className="ProfileName">Dom</div>
                  <a class="ProfileButton" href="https://github.com/harb0t">Link to Git</a>
                </div>

                {/* PROFILE 3 */}
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={Wren} alt="Profile pic"></img>
                  <div className="ProfileName">Wren</div>
                  <a class="ProfileButton" href="https://github.com/Wren4Wren">Link to Git</a>
                </div>
              </div>

              <div className="MiddleThreeProfiles">
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={Alex} alt="Profile pic"></img>
                  <div className="ProfileName">Alex B</div>
                  <a class="ProfileButton" href="https://github.com/alexbellairs">Link to Git</a>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={Gaz} alt="Profile pic"></img>
                  <div className="ProfileName">Gaz</div>
                  <a class="ProfileButton" href="https://github.com/garethhough">Link to Git</a>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={Karl} alt="Profile pic"></img>
                  <div className="ProfileName">Karl</div>
                  <a class="ProfileButton" href="https://github.com/KarlEvans70">Link to Git</a>
                </div>
              </div>

              <div className="BottomThreeProfiles">
                <div className="ProfileBox">
                  <img className="ProfilePicture" src={James} alt="Profile pic"></img>
                  <div className="ProfileName">James</div>
                  <a class="ProfileButton" href="https://github.com/jamlindsay97">Link to Git</a>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={Abdelbar} alt="Profile pic"></img>
                  <div className="ProfileName">Abdelbar</div>
                  <a class="ProfileButton" href="https://github.com/Javabar">Link to Git</a>
                </div>

                <div className="ProfileBox">
                  <img className="ProfilePicture" src={John} alt="Profile pic"></img>
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