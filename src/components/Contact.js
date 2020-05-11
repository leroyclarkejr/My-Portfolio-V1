import React from "react";
import contactImg from "../assets/contact.png";

const Contact = () => (
  <div id="contact">
    <div className="main-contact">
      <div class="form-container">
        <h1>Get In Touch</h1>
        <form>
          <input type="text" name="name" placeholder="Name" height="40px" />
          <br></br>

          <input type="email" name="email" placeholder="Email address" />
          <br></br>

          <textarea
            type="text"
            className="message"
            name="message"
            placeholder="Message..."
            rows={3}
          />
          <br></br>
        </form>
        <input className="submit" type="submit" value="Submit" />
      </div>
    </div>
  </div>
);

export default Contact;
