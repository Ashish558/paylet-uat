import React from "react";
import Table from "./table";
const WebResult = () => {
  const tableHeadings = [
    { id: "slNo", label: "SL No", numeric: true },
    { id: "userID", label: "User ID", numeric: false },
    { id: "date", label: "Registration Date", numeric: false },
    { id: "userName", label: "User Name", numeric: false },
    { id: "mobileNo", label: "MobileNumber", numeric: false },
    { id: "email", label: "Email Id", numeric: false },
    { id: "userType", label: "UserType", numeric: false },
    { id: "status", label: "Status", numeric: false },
    { id: "action", label: "Action", numeric: false },
  ];
  const tableData = [
    {
      slNo: 1,
      userID: "#2345",
      date: "2022-08-26",
      userName: "Prakash",
      mobileNo: "7845145896",
      email: "abc@gmail.com",
      userType: "Admin",
      status: "Intiated",
      action: "Edit/view",
    },
    {
      slNo: 2,
      userID: "#2345",
      date: "2022-08-26",
      userName: "Prakash",
      mobileNo: "7845145896",
      email: "abc@gmail.com",
      userType: "Support",
      status: "Processed",
      action: "Edit/view",
    },
    {
      slNo: 3,
      userID: "#2345",
      date: "2022-08-26",
      userName: "Prakash",
      mobileNo: "7845145896",
      email: "abc@gmail.com",
      userType: "Admin",
      status: "Expired",
      action: "Edit/view",
    },
    {
      slNo: 4,
      userID: "#2345",
      date: "2022-08-26",
      userName: "Prakash K",
      mobileNo: "7845145896",
      email: "abc@gmail.com",
      userType: "Admin",
      status: "Intiated",
      action: "Edit/view",
    },
    {
      slNo: 5,
      userID: "#2345",
      date: "2022-08-26",
      userName: "Prakash",
      mobileNo: "7845145896",
      email: "abc@gmail.com",
      userType: "Support",
      status: "Processed",
      action: "Edit/view",
    },
    {
      slNo: 6,
      userID: "#2345",
      date: "2022-08-26",
      userName: "Prakash K",
      mobileNo: "7845145896",
      email: "abc@gmail.com",
      userType: "Admin",
      status: "Expired",
      action: "Edit/view",
    },
  ];
  return (
    <div style={{ margin: "85px 0" }}>
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
          <h5 class="mb-0">User Reports</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Master Data</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Reports</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">User Report</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6">
          <div class="btn-toolbar mb-2 mr-4 mb-md-0 float-right">
            <a style={{ textDecoration: "none" }} href="#">
              Show/Hide Filters
            </a>
          </div>
        </div>
      </div>
      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={`User Reports`}
        defaultSort={`slNo`}
      />
    </div>
  );
};
export default WebResult;
