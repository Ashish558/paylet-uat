import "./css/bootstrap.min.css";
import "./css/bootstrap.css";

import "./css/style.css";

import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  Login,
  OTP,
  Report,
  ReportDetails,
  ReportsNew,
  AssetsType,
  Currency,
} from "./components";
const App = () => {
  const [user, setUser] = React.useState({ name: "ankeeta" });

  return (
    <BrowserRouter>
      {user && <Header user={user} />}

      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/asset-type" exact component={AssetsType} />
        <Route path="/reports-new" exact component={ReportsNew} />
        <Route path="/report-details" exact component={ReportDetails} />
        <Route path="/report" exact component={Report} />
        <Route path="/currency" exact component={Currency} />
        <Route
          path="/otp"
          exact
          component={() => (
            <div>
              <Header register={true} />
              <OTP />
            </div>
          )}
        />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
