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
  Enquiry,
  EnquiryDetails,
  CreateEnquiry,
  CreatePayment,
  Search,
  SearchEnquiry,
  CreateReport,
  TodayMandate,
  TransactionReports,
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
        <Route path="/enquiry" exact component={Enquiry} />
        <Route path="/enquiry-details" exact component={EnquiryDetails} />
        <Route path="/create-enquiry" exact component={CreateEnquiry} />
        <Route path="/create-payment" exact component={CreatePayment} />
        <Route path="/create-report" exact component={CreateReport} />
        <Route path="/search" exact component={Search} />
        <Route path="/search-enquiry" exact component={SearchEnquiry} />
        <Route path="/today-mandate" exact component={TodayMandate} />
        <Route
          path="/transaction-reports"
          exact
          component={TransactionReports}
        />
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
