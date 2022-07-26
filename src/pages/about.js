import ContentItem from "../components/contentItem";
import "../css/app.css";
import "../css/about.css";
//import Quote from "../components/quote"; // nOT NEEDED?
import prettyCodeLight from "../images/prettyCodeLight.jpg";
import Quote from "../pageComponents/quote/quote";

const About = () => {
  return (
    <div className="AppStyles">
      <Quote />

    <div className = "AboutPageMainContainer">

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
                tempus. Nunc metus sapien, luctus et dui sagittis, cursus lacinia
                arcu. Nulla euismod, nisl eu consectetur consectetur, nisl nunc.
              </p>
              <p className="aboutP">
                Donec elementum elit tristique mauris consectetur volutpat. Donec
                eget nisl neque. Nullam quis nisl a turpis dignissim dapibus. In
                et metus quam. Phasellus mollis pulvinar purus, at rhoncus dolor
                congue nec.
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
                <div className="ProfilePicture">
                </div>
                  <div className="ProfileName">       
                </div>
                    <div className="ProfileButton">
                    </div>
                </div>
{/* PROFILE 2 */}
<div className="ProfileBox">
                <div className="ProfilePicture">
                </div>
                  <div className="ProfileName">       
                </div>
                    <div className="ProfileButton">
                    </div>
                </div>

{/* PROFILE 3 */}
<div className="ProfileBox">
                <div className="ProfilePicture">
                </div>
                  <div className="ProfileName">       
                </div>
                    <div className="ProfileButton">
                    </div>
                </div>


            </div>




            <div className="MiddleThreeProfiles">

            <div className="ProfileBox">
                <div className="ProfilePicture">
                </div>
                  <div className="ProfileName">       
                </div>
                    <div className="ProfileButton">
                    </div>
                </div>

                <div className="ProfileBox">
                <div className="ProfilePicture">
                </div>
                  <div className="ProfileName">       
                </div>
                    <div className="ProfileButton">
                    </div>
                </div>

                <div className="ProfileBox">
                <div className="ProfilePicture">
                </div>
                  <div className="ProfileName">       
                </div>
                    <div className="ProfileButton">
                    </div>
                </div>




            </div>
              


            <div className="BottomThreeProfiles">




            <div className="ProfileBox">
                <div className="ProfilePicture">
                </div>
                  <div className="ProfileName">       
                </div>
                    <div className="ProfileButton">
                    </div>
                </div>

                <div className="ProfileBox">
                <div className="ProfilePicture">
                </div>
                  <div className="ProfileName">       
                </div>
                    <div className="ProfileButton">
                    </div>
                </div>

                <div className="ProfileBox">
                <div className="ProfilePicture">
                </div>
                  <div className="ProfileName">       
                </div>
                    <div className="ProfileButton">
                    </div>
                </div>

            </div></div>

          

            </div>




          {/* <ContentItem /> */}
          </div>
    </div>
  </div>

  );
};

export default About;
