import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Main from "./Main.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <div id="nav" className="">
          <NavLink
            className="nav-links home"
            key="/"
            to="/"
            as={NavLink}
            activeClassName="active"
            exact
          >
            {"Home"}
          </NavLink>

          <NavLink
            key="/projects"
            to="/projects"
            as={NavLink}
            className="nav-links projects "
            activeClassName="active"
            exact
          >
            {"Projects"}
          </NavLink>

          <NavLink
            key="/contact"
            to="/contact"
            as={NavLink}
            className="nav-links contact "
            activeClassName="active"
            exact
          >
            {"Contact"}
          </NavLink>
          <div className="nav-links social">Social</div>
        </div>

        {/* <Switch> */}
        {/* <Route exact path="/">
            <Main />
          </Route> */}
        {/* <Route path="/projects">
            <Projects />
          </Route> */}
        {/* <Route path="/contact">
            <Contact />
          </Route> */}

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
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Topics() {
//   // The `path` lets us build <Route> paths that are
//   // relative to the parent route, while the `url` lets
//   // us build relative links.
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <NavLink to={`${url}/rendering`}>Rendering with React</NavLink>
//         </li>
//         <li>
//           <NavLink to={`${url}/components`}>Components</NavLink>
//         </li>
//         <li>
//           <NavLink to={`${url}/props-v-state`}>Props v. State</NavLink>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

export default App;
