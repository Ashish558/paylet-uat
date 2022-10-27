import React from "react";
import Table from "./table";
const MandateReports = () => {
  const tableHeadings = [
    { id: "slNo", label: "SL No", numeric: true },
    { id: "transactionID", label: "Mandate ID", numeric: false },
    { id: "date", label: "Mandate Date", numeric: false },
    { id: "userName", label: "Owner / Tenant Name", numeric: false },
    { id: "frequency", label: "Frequency", numeric: false },
    { id: "noOfPayment", label: "No Of Payment", numeric: true },
    { id: "amount", label: "Amount", numeric: true },
    { id: "paymentMode", label: "Payment Mode", numeric: false },
    { id: "status", label: "Status", numeric: false },
  ];
  const tableData = [
    {
      slNo: 1,
      transactionID: "#2345",
      date: "2022-08-26",
      userName: "Prakash",
      frequency: "Monthly",
      noOfPayment: 10,
      amount: 1200,
      paymentMode: "ACH",
      status: "Intiated",
    },
    {
      slNo: 2,
      transactionID: "#2345",
      date: "2022-08-26",
      userName: "Prakash",
      frequency: "Monthly",
      noOfPayment: 10,
      amount: 1200,
      paymentMode: "ACH",
      status: "Processed",
    },
    {
      slNo: 3,
      transactionID: "#2345",
      date: "2022-08-26",
      userName: "Prakash",
      frequency: "Monthly",
      noOfPayment: 10,
      amount: 1200,
      paymentMode: "ACH",
      status: "Expired",
    },
    {
      slNo: 4,
      transactionID: "#2345",
      date: "2022-08-26",
      userName: "Prakash K",
      frequency: "Monthly",
      noOfPayment: 10,
      amount: 1200,
      paymentMode: "ACH",
      status: "Intiated",
    },
    {
      slNo: 5,
      transactionID: "#2345",
      date: "2022-08-26",
      userName: "Prakash",
      frequency: "Monthly",
      noOfPayment: 10,
      amount: 1200,
      paymentMode: "ACH",
      status: "Processed",
    },
    {
      slNo: 6,
      transactionID: "#2345",
      date: "2022-08-26",
      userName: "Prakash K",
      frequency: "Monthly",
      noOfPayment: 10,
      amount: 1200,
      paymentMode: "ACH",
      status: "Expired",
    },
  ];
  return (
    <div style={{ marginTop: "85px" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="/">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Back</span>
          </h4>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />
      <div class="row sector2 mr-1">
        <div class="col-md-6">
          <h5 class="mb-0">Mandate Report</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Master Data</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Reports</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Mandate Report</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6">
          <div class="btn-toolbar mb-2 mr-4 mb-md-0 float-right">
            <a href="#">Show/Hide Filters</a>
          </div>
        </div>
      </div>
      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={`Mandate Report`}
        defaultSort={`slNo`}
      />
    </div>
  );
};
export default MandateReports;
