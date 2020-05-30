import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ReactGA from "react-ga";

import Main from "./Main.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";

ReactGA.initialize("UA-167200825-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="nav" className="">
          <NavLink
            className="nav-links home"
            key="/"
            to="/"
            as={NavLink}
            activeClassName="selected"
            exact
          >
            {"Home"}
          </NavLink>

          <NavLink
            key="/projects"
            to="/projects"
            as={NavLink}
            className="nav-links projects "
            activeClassName="selected"
            exact
          >
            {"Projects"}
          </NavLink>

          <NavLink
            key="/contact"
            to="/contact"
            as={NavLink}
            className="nav-links contact "
            activeClassName="selected"
            exact
          >
            {"Contact"}
          </NavLink>

          <div className="nav-links social">
            <a href="https://github.com/ldcjrStudio">
              <img src={github} alt="Github logo" />
            </a>

            <a href="https://www.linkedin.com/in/leroy-clarke-jr/">
              <img src={linkedIn} alt="LinkedIn logo" />
            </a>
          </div>
        </div>

        <div class="footer">
          {/* <footer>
            Designed & Developed by Leroy Clarke Jr.
          </footer> */}
        </div>

        <div className="container">
          <Route key="/projects" exact path="/projects">
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div class="page">
                  <Projects />
                </div>
              </CSSTransition>
            )}
          </Route>
          <Route key="/contact" exact path="/contact">
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div class="page">
                  <Contact />
                </div>
              </CSSTransition>
            )}
          </Route>
          <Route key="/" exact path="/">
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div class="page">
                  <Main />
                </div>
              </CSSTransition>
            )}
          </Route>
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}
export default App;
