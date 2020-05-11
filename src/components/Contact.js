import React from "react";
import contactImg from "../assets/contact.png";

const Contact = () => (
  <div id="contact">
    <div className="main-contact">
      <div class="form-container">
        <h1>Get In Touch</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            size="20"
            height="40px"
          />
          <br></br>

          <input type="email" name="name" placeholder="Email address" />
          <br></br>

          <input type="textArea" name="name" placeholder="Message..." />
          <br></br>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
