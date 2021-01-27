import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Comment from "./Pages/Comment/Comment";
import Footer from "./Components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Comment} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
