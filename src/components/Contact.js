import React from "react";
import VanillaTilt from "vanilla-tilt";
// import contactImg from "../assets/contact.png";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", message: "" };
  }
  // handleSubmit = (e) => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", ...this.state }),
  //   })
  //     .then(() => alert("Success!"))
  //     .catch((error) => alert(error));

  //   e.preventDefault();
  // };
  // handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    VanillaTilt.init(document.querySelectorAll(".main-content"), {
      max: 25,
      speed: 400,
    });
  }
  render() {
    return (
      <div class="try">
        <div id="main-content" className="appear">
          <div className="main-content data-tilt">
            <form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
            ,
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
