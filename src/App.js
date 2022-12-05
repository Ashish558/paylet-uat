import "./css/bootstrap.min.css";
import "./css/bootstrap.css";

import "./css/style.css";

import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Redirect, Switch, useHistory } from "react-router-dom";
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
  WebUser,
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
import DashBoard from "./components/Dashboard/dashboard";
const App = () => {

  const [user, setUser] = useState({ name: "ankeeta" });
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginProps = { isLoggedIn, setIsLoggedIn }

  const [transactionData, setTransactionData] = useState({
    fromDate: '',
    toDate: '',
    name: '',
    transactionId: '',
    assetNumber: '',
    paymentType: '',
  })

  const [mandateData, setMandateData] = useState({
    mandateStatus: '',
    name: '',
    accountNumber: '',
    mandateId: '',
    assetNumber: '',
    assetType: '',
  })

  let history = useHistory();

  const transactionProps = { transactionData, setTransactionData }
  const mandateProps = { mandateData, setMandateData }

  useEffect(() => {
    const status = sessionStorage.getItem('userStatus')
    if (status === '1') {
      setIsLoggedIn(true)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogout = () => {
    setIsLoggedIn(false)
    sessionStorage.clear()
    window.location = '/'
  }

  if (loading) return <></>

  return (
    <BrowserRouter>
      {user && <Header user={user} handleLogout={handleLogout} />}

      <Switch>
        <Route path="/" exact render={() => isLoggedIn ? <Home /> : <Login  {...loginProps} />} />

        <Route path="/login" exact
          render={() => <Login {...loginProps} />} />
        {ProtectRoute(isLoggedIn, '/dashboard', DashBoard)}
        {ProtectRoute(isLoggedIn, '/asset-type', AssetsType)}
        {ProtectRoute(isLoggedIn, '/report-details', ReportDetails)}
        {ProtectRoute(isLoggedIn, '/report', ReportsNew, mandateProps)}
        {ProtectRoute(isLoggedIn, '/currency', Currency)}
        {ProtectRoute(isLoggedIn, '/enquiry', Enquiry)}
        {ProtectRoute(isLoggedIn, '/my-download', MyDownload)}

        {ProtectRoute(isLoggedIn, '/my-jobs', MyJobs)}
        {ProtectRoute(isLoggedIn, '/my-mandate', MyMandate)}
        {ProtectRoute(isLoggedIn, '/mandate', Mandate)}
        {ProtectRoute(isLoggedIn, '/mandate-details', MandateDetails)}
        {ProtectRoute(isLoggedIn, '/mandate-reports', MandateReports, mandateProps)}
        {ProtectRoute(isLoggedIn, '/payment-frequency', PaymentFrequency)}
        {ProtectRoute(isLoggedIn, '/payment-mode', PaymentMode)}
        {ProtectRoute(isLoggedIn, '/payments', Payments)}
        {ProtectRoute(isLoggedIn, '/payments-details', PaymentsDetails)}
        {ProtectRoute(isLoggedIn, '/import-mandate-request', ImportMandateRequest)}
        {ProtectRoute(isLoggedIn, '/initiate-mandate-request', InitiateMandateRequest)}
        {ProtectRoute(isLoggedIn, '/search-mandate-request', SearchMandateRequest)}

        {ProtectRoute(isLoggedIn, '/search-payments', SearchPayments)}
        {ProtectRoute(isLoggedIn, '/search-report', SearchReport)}
        {ProtectRoute(isLoggedIn, '/enquiry-details', EnquiryDetails)}
        {ProtectRoute(isLoggedIn, '/create-enquiry', CreateEnquiry)}
        {ProtectRoute(isLoggedIn, '/create-payment', CreatePayment)}
        {ProtectRoute(isLoggedIn, '/create-report', CreateReport)}

        {ProtectRoute(isLoggedIn, '/search-enquiry', SearchEnquiry)}
        {ProtectRoute(isLoggedIn, '/today-mandate', TodayMandate)}
        {ProtectRoute(isLoggedIn, '/web-report', WebReport)}
        {ProtectRoute(isLoggedIn, '/web-result', WebResult)}
        {ProtectRoute(isLoggedIn, '/web-user', WebUser)}
        {ProtectRoute(isLoggedIn, '/add-web-user', AddWebUser)}
        {ProtectRoute(isLoggedIn, '/transaction-report', TransactionReport, transactionProps)}

        {ProtectRoute(isLoggedIn, '/search', Search)}
        {ProtectRoute(isLoggedIn, '/transaction-reports', TransactionReports, transactionProps)}


        {/* <Route path="/add-web-user" exact component={AddWebUser} />
        <Route path="/asset-type" exact component={AssetsType} />
        <Route path="/report-details" exact component={ReportDetails} />
        <Route path="/report" exact component={ReportsNew} />
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

        <Route path="/search-enquiry" exact component={SearchEnquiry} />
        <Route path="/today-mandate" exact component={TodayMandate} />
        <Route path="/web-report" exact component={WebReport} />
        <Route path="/web-result" exact component={WebResult} />
        <Route path="/web-user" exact component={WebUser} />
        <Route path="/transaction-report" exact component={TransactionReport} />
        <Route path="/search" exact component={Search} />
        <Route
          path="/transaction-reports"
          exact
          component={TransactionReports}
        /> */}
        {/* <Route
          path="/otp"
          exact
          component={() => (
            <div>
              <Header register={true} />
              <OTP />
            </div>
          )}
        /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

const ProtectRoute = (isLoggedIn, path, Component, props) => {
  return <Route path={path} exact render={() => isLoggedIn ? <Component {...props} /> : window.location = '/'} />
}

export default App;
