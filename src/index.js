import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// styles
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import CodeParallaxisPage from "views/CodeParallaxisPage/CodeParallaxisPage.js";
import FmlaLeavePage from "views/FmlaLeavePage/FmlaLeavePage.js";
import LmsPortalPage from "views/LmsPortalPage/LmsPortalPage.js"
import EmployeeManagerPage from "views/EmployeeManagerPage/EmployeeManagerPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/employee-manager-page" component={EmployeeManagerPage} />
      <Route path="/code-parallaxis-page" component={CodeParallaxisPage} />
      <Route path="/fmla-leave-page" component={FmlaLeavePage} />
      <Route path="/lms-portal-page" component={LmsPortalPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
