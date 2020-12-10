import React from "react";
import VanillaTilt from "vanilla-tilt";

import Mailchimp from "react-mailchimp-form";
import { helmetJsonLdProp } from "react-schemaorg";
import Helmet from "react-helmet";

class Contact extends React.Component {
  componentDidMount() {
    VanillaTilt.init(document.querySelectorAll(".main-contact"), {
      max: 25,
      speed: 400,
    });
  }
  // On Tap - Navigation

  render() {
    return (
      <div class="try">
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
                  drugUnit:
                    "Doptelet is a 20 mg pill taken with any food. Your doctor will decide how much Doptelet you need to take, and for how long, based on your unique platelet count. You and your doctor can work together to set your treatment goal with Doptelet.",
                },
                {
                  "@type": "WebSite",
                  about: {
                    "@type": "Thing",
                    description:
                      "To inform patients of Doptelet (avatrombopag), a prescription medicine used to treat low blood platelet counts in adults with chronic immune thrombocytopenia when other treatments have not worked well enough. Doptelet (avatrombopag) is also a prescription medicine used to treat low blood platelet counts in adults with long-lasting (chronic) liver disease who are scheduled to have a medical or dental procedure.",
                  },
                  url: "https://doptelethcp.com/itp/doptelet-dosing/",
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
                    "Patients with chronic immune thrombocytopenia when other treatments have not worked well enough. ",
                  healthCondition: {
                    "@type": "Medical Condition",
                    alternateName: "Immune Thrombocytopenia (ITP)",
                  },
                  requiredMinAge: "18",
                },
                {
                  "@type": "SideEffectsHealthAspect",
                  name:
                    "The most common side effects of DOPTELET when used to treat low blood platelet counts in adults with chronic immune thrombocytopenia (ITP) are: headache, tiredness, bruising, nosebleed, upper-respiratory tract infection, joint pain, gum bleeding, purple or red spots on your skin, runny nose",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: {
                    "@type": "Question",
                    name: "What if I miss a dose?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "this is athe answer to the question",
                    },
                    "@type": "Question",
                    name: "What if I manother on?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "this is sdfsdfsdathe answer to the question",
                    },
                  },
                },
              ],
            }),
          ]}
        ></Helmet>
        <div id="contact" className="appear">
          <div className="main-contact data-tilt">
            <h1 className="tilt-s">Contact Leroy</h1>

            <Mailchimp
              className="tilt-m"
              action="https://gmail.us19.list-manage.com/subscribe/post?u=1aec3676a5129a658a34bf752&amp;id=9d775d3c7a"
              fields={[
                {
                  name: "LNAME",
                  placeholder: "Your name",
                  type: "text",
                  required: true,
                },
                {
                  name: "EMAIL",
                  placeholder: "me@domain.com",
                  type: "email",
                  required: true,
                },
                {
                  name: "MMERGE3",
                  placeholder: "Message...",
                  type: "text",
                  required: true,
                },
              ]}
              messages={{
                sending: "Sending...",
                success:
                  "Thank you! I will get back to you as soon as possible.",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: "Get in touch!",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
