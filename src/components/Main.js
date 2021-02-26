import React from "react";
import VanillaTilt from "vanilla-tilt";
import me from "../assets/me.png";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import Dots from "react-carousel-dots";
import { helmetJsonLdProp } from "react-schemaorg";
import Helmet from "react-helmet";

let pageNumber = 0;

const bodyTag = document.querySelector("body");

const content = [
  {
    copy:
      "A Front End Web Developer specializing in pixel perfect, responsive websites.",
    background: "#09678c",
    dots: "",
  },
  {
    copy: "Skilled in HTML5, CSS3, & JavaScript ES6.",

    background: "#bcced2",
    dots: "",
  },
  {
    copy: "Familiar with Bootstrap, SASS, JQuery, React, APIs, NPM, and Git.",
    background: "#00A896",
  },

  {
    copy:
      "Eager to help bring your website ideas to life! Contact me today & lets create something great.",
    background: " #6970B4",
    dots: "",
  },
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: `${content[pageNumber].copy}`,
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage() {
    pageNumber = pageNumber + 1;

    if (pageNumber > content.length - 1) {
      pageNumber = 0;
    }
    bodyTag.style.backgroundColor = content[pageNumber].background;
    this.setState({
      content: `${content[pageNumber].copy}`,
    });
  }

  prevPage() {
    pageNumber = pageNumber - 1;
    if (pageNumber < 0) {
      pageNumber = content.length - 1;
    }
    bodyTag.style.backgroundColor = content[pageNumber].background;
    this.setState({
      content: `${content[pageNumber].copy}`,
    });
  }

  componentDidMount() {
    VanillaTilt.init(document.querySelector(".main-content"), {
      max: 25,
      speed: 400,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10,
    });
  }

  render() {
    return (
      <div>
        <Helmet
          script={[
            helmetJsonLdProp({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Drug",
                  name: "Doptelet",
                  alternateName: "avatrombopag",
                  manufacturer: {
                    "@type": "Organization",
                    name: "Dova Pharmaceuticals",
                  },
                  dosageForm: "Pill",
                },
                {
                  "@type": "WebSite",
                  about: {
                    "@type": "Thing",
                    description:
                      "To inform patients of Doptelet (avatrombopag), a prescription medicine used to treat low blood platelet counts in adults with chronic immune thrombocytopenia when other treatments have not worked well enough. Doptelet (avatrombopag) is also a prescription medicine used to treat low blood platelet counts in adults with long-lasting (chronic) liver disease who are scheduled to have a medical or dental procedure.",
                  },
                  url: "https://doptelethcp.com/",
                },
                {
                  "@type": "Brand",
                  logo: "DOPTELET LOGO URL TBD",
                },
                {
                  "@type": "Brand",
                  logo: "DOVA PHARMACEUTICALS LOGO URL TBD",
                },
                {
                  "@type": "MedicalAudience",
                  audienceType:
                    "Patients with chronic immune thrombocytopenia when other treatments have not worked well enough.Patients long-lasting (chronic) liver disease who are scheduled to have a medical or dental procedure.",
                  healthCondition: {
                    "@type": "MedicalCondition",
                    alternateName:
                      "Immune Thrombocytopenia (ITP) and Chronic Liver Disease (CLD)",
                  },
                  requiredMinAge: "18",
                },
                {
                  "@type": "MedicalTherapy",
                  seriousAdverseOutcome: {
                    "@type": "MedicalEntity",
                    description:
                      "DOPTELET may cause serious side effects, including blood clots. People with chronic liver disease or chronic immune thrombocytopenia and people with certain blood clotting conditions may have an increased risk of developing blood clots. Tell your healthcare provider right away if you have signs and symptoms of a blood clot, including:, Swelling, pain, or tenderness in your legs, Shortness of breath, Chest pain, Fast heartbeat, Stomach (abdominal) pain or tenderness.",
                  },
                },

                {
                  "@type": "SideEffectsHealthAspect",
                  name:
                    "The most common side effects of DOPTELET when used to treat low blood platelet counts in adults with chronic immune thrombocytopenia (ITP) are: headache, tiredness, bruising, nosebleed, upper-respiratory tract infection, joint pain, gum bleeding, purple or red spots on your skin, runny nose",
                },
                {
                  "@type": "SideEffectsHealthAspect",
                  name:
                    "The most common side effects of DOPTELET in people with chronic liver disease are: fever, stomach (abdominal) pain, nausea, headache, tiredness, swelling of the hands or feet",
                },
              ],
            }),
          ]}
        >
          <title>2This should overide but lets see</title>
        </Helmet>
        <div id="main-content" className="appear">
          <div className="main-content data-tilt">
            <img className="tilt-s" src={me} alt="Beautiful Leroy Clarke Jr." />
            <h1 className="tilt-m">Leroy Clarke Jr. is...</h1>
            <div className="content">
              <p className="tilt-b">{this.state.content}</p>
            </div>
          </div>
        </div>
        <div id="navigation">
          <img
            className="prev"
            src={prevIcon}
            alt="previous"
            onClick={this.prevPage}
          />

          <div className="the-dots">
            <Dots
              length={4}
              active={pageNumber}
              visible={5}
              size={7}
              margin={10}
            />
            {/* <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span> */}
          </div>
          <img
            className="next"
            src={nextIcon}
            alt="next"
            onClick={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default Main;
