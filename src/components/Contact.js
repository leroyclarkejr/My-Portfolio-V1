import React from "react";
import VanillaTilt from "vanilla-tilt";

import Mailchimp from "react-mailchimp-form";

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
