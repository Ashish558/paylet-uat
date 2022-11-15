import React from "react";
import Table from "./table";
import Collapse from "@mui/material/Collapse";
const SearchEnquiry = () => {
  const [expand, setExpand] = React.useState(true);
  const tableHeadings = [
    { id: "refNo", label: "Reference Number", numeric: false },
    { id: "date", label: "Creation Date", numeric: false },
    { id: "status", label: "Reference Status", numeric: false },
    { id: "action", label: "Action", numeric: false },
  ];
  const tableData = [
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "13/11/2020",
      status: "Authorized",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "13/11/2020",
      status: "	Transaction Open Status",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "14/11/2020",
      status: "Initiated",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "14/11/2020",
      status: "Authorized",
      action: "view",
    },
  ];
  return (
    <div style={{ margin: "85px 0" }}>
      <div class="row mt-5 pt-3">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="/enquiry">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Search Enquiry</span>
          </h4>
        </div>
        <div class="col-md-6">
          <ul class="nav justify-content-end mr-3 mt-2">
            <li class="nav-item">
              <a class="nav-link" href="/create-enquiry">
                <i class="fas fa-plus mr-2"></i>
                <span>Create Enquiry</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="mt-0 ml-4 mr-4 mb-2 mt-0" />
      <div class="row sector2 mr-1 mb-4">
        <div class="col-md-6">
          <h5 class="mb-0">Search Enquiry</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">List of Enquiry</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Search Enquiry</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6">
          <div
            class="btn-toolbar mb-2 mr-4 mb-md-0 float-right"
            onClick={() => setExpand(!expand)}
          >
            <a href="#" style={{ textDecoration: "none" }}>
              Show/Hide Filters
            </a>
          </div>
        </div>
      </div>

      <Collapse in={expand}>
        <div class="sector3 ml-4 mr-4 mb-5 pb-5 ">
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">
                  Initiated between
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="email"
                  id="materialSubscriptionFormEmail"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Reference 1</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="email"
                  id="materialSubscriptionFormEmail"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Email</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">Account</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="email"
                  id="materialSubscriptionFormEmail"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Mandate Status
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="email"
                  id="materialSubscriptionFormEmail"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Consumer name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">
                  Account Number
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="email"
                  id="materialSubscriptionFormEmail"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Email</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="email"
                  id="materialSubscriptionFormEmail"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Created by</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-4 text-center">
              <button class="btn btn-primary">search</button>
              <a href="/">
                <button
                  type="button"
                  class="btn btn-outline-primary waves-effect"
                >
                  cancel
                </button>
              </a>
            </div>
          </div>
        </div>
      </Collapse>
      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={`Search Enquiry Details`}
        defaultSort={`date`}
      />
      <div class="row pb-5 mb-5">
        <div class="col-md-12 text-center">
          <a href="/">
            <button type="button" class="btn btn-outline-primary waves-effect">
              cancel
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SearchEnquiry;
