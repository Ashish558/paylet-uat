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
  AddWebUser,
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
  TransactionReport,
  TransactionReports,
  WebReport,
  WebResult,
  ImportMandateRequest,
  InitiateMandateRequest,
  SearchMandateRequest,
  SearchPayments,
  SearchReport,
  MyDownload,
  MyJobs,
  Mandate,
  MandateDetails,
  MandateReports,
  MyMandate,
  PaymentFrequency,
  PaymentMode,
  Payments,
  PaymentsDetails,
} from "./components";
const App = () => {
  const [user, setUser] = React.useState({ name: "ankeeta" });

  return (
    <BrowserRouter>
      {user && <Header user={user} />}

      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/add-web-user" exact component={AddWebUser}/>
        <Route path="/asset-type" exact component={AssetsType} />
        <Route path="/reports-new" exact component={ReportsNew} />
        <Route path="/report-details" exact component={ReportDetails} />
        <Route path="/report" exact component={Report} />
        <Route path="/currency" exact component={Currency} />
        <Route path="/enquiry" exact component={Enquiry} />
        <Route path="/my-download" exact component={MyDownload} />
        <Route path="/my-jobs" exact component={MyJobs} />
        <Route path="/my-mandate" exact component={MyMandate} />
        <Route path="/mandate" exact component={Mandate} />
        <Route path="/mandate-details" exact component={MandateDetails} />
        <Route path="/mandate-reports" exact component={MandateReports} />
        <Route path="/payment-frequency" exact component={PaymentFrequency} />
        <Route path="/payment-mode" exact component={PaymentMode} />
        <Route path="/payments" exact component={Payments} />
        <Route path="/payments-details" exact component={PaymentsDetails} />
        <Route
          path="/import-mandate-request"
          exact
          component={ImportMandateRequest}
        />
        <Route
          path="/initiate-mandate-request"
          exact
          component={InitiateMandateRequest}
        />
        <Route
          path="/search-mandate-request"
          exact
          component={SearchMandateRequest}
        />
        <Route path="/search-payments" exact component={SearchPayments} />
        <Route path="/search-report" exact component={SearchReport} />
        <Route path="/enquiry-details" exact component={EnquiryDetails} />
        <Route path="/create-enquiry" exact component={CreateEnquiry} />
        <Route path="/create-payment" exact component={CreatePayment} />
        <Route path="/create-report" exact component={CreateReport} />
        <Route path="/search" exact component={Search} />
        <Route path="/search-enquiry" exact component={SearchEnquiry} />
        <Route path="/today-mandate" exact component={TodayMandate} />
        <Route path="/web-report" exact component={WebReport} />
        <Route path="/web-result" exact component={WebResult} />
        <Route path="/transaction-report" exact component={TransactionReport} />
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
