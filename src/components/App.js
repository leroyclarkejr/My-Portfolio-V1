import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Main from "./Main.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import JA from "../assets/JA.png";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <div id="nav" className="">
          <NavLink to="/" className="nav-links home nav-appear">
            Home
          </NavLink>

          <NavLink to="/projects" className="nav-links projects nav-appear">
            Projects
          </NavLink>

          <NavLink to="/contact" className="nav-links contact nav-appear">
            Contact
          </NavLink>
          <div className="nav-links social nav-appear">Social</div>

          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
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
