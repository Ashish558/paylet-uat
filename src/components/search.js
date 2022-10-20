import React from "react";
import Table from "./table";

import Collapse from "@mui/material/Collapse";
const Search = () => {
  const [expand, setExpand] = React.useState(true);
  const tableHeadings = [
    { id: "refNo", label: "Reference Number", numeric: false },
    { id: "date", label: "Creation Date", numeric: false },
    { id: "status", label: "Status", numeric: false },
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
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "15/11/2020",
      status: "Rejected By NPCI",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "15/11/2020",
      status: "Authorized",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "17/11/2020",
      status: "Authorization Request Rejected",
      action: "view",
    },
  ];
  return (
    <div style={{ margin: "85px 0" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-3 mt-3">
            <a data-toggle="tooltip" title="Back" href="mandate.html">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span>Search Mandate</span>
          </h4>
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
        <div id="myDIV">
          <div class="row sector3" id="myDIV">
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
        </div>
      </Collapse>

      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={``}
        defaultSort={`date`}
      />
    </div>
  );
};
export default Search;
