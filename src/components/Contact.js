import React from "react";
import VanillaTilt from "vanilla-tilt";
// import contactImg from "../assets/contact.png";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", message: "" };
  }
  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    VanillaTilt.init(document.querySelectorAll(".main-content"), {
      max: 25,
      speed: 400,
    });
  }
  render() {
    const { name, email, message } = this.state;
    return (
      <div class="try">
        <div id="main-content" className="appear">
          <div className="main-content data-tilt">
            <form onSubmit={this.handleSubmit}>
              <p>
                <label>
                  Your Name:{" "}
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Your Email:{" "}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Message:{" "}
                  <textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
