import React, { useState } from "react";
import Table from "./table";
import Collapse from "@mui/material/Collapse";

const Report = () => {
  const [isMandate, setMandate] = React.useState(true);
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

  const [accountnumber, setAccountnumber] = useState(0)

  return (
    <div style={{ marginTop: "85px" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="/">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Reports</span>
          </h4>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />

      <div class="row sector2">
        <div class="col-md-12">
          <h5 class="mb-0">Create Report</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-3 pb-2 pt-0">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Create Report</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div id="main_content">
        <li
          id="page1"
          className={isMandate ? "selected" : "notselected"}
          onClick={() => setMandate(true)}
        >
          Mandate Report
        </li>
        <li
          className={!isMandate ? "selected" : "notselected"}
          id="page2"
          onClick={() => setMandate(false)}
        >
          Payment Report
        </li>

        <div class="hidden_desc" id="page1_desc">
          <h4 class="mt-3">Mandate Report</h4>
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
                <label for="materialSubscriptionFormEmail">Reference 2</label>
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
                  value={accountnumber}
                  onChange={e => setAccountnumber(e.target.value)}
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
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
              >
                Generate Report
              </button>
              <a href="">
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

        <div class="hidden_desc" id="page2_desc">
          <h4 class="mt-3">Payments Report</h4>
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
                <label for="materialSubscriptionFormEmail">Reference 2</label>
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
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
              >
                Generate Report
              </button>
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

        <div id="page_content">
          <h4 class="mt-3">{isMandate ? "Mandate" : "Payment"} Report</h4>
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
                <label for="materialSubscriptionFormEmail">REference 2</label>
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
              <button
                class="btn btn-primary"
                onClick={() => setExpand(!expand)}
              >
                Generate Report
              </button>
              <a href="/">
                <button
                  type="button"
                  class="btn btn-outline-primary waves-effect"
                  onclick="myFunction()"
                >
                  cancel
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Collapse in={expand}>
        <Table
          tableHeadings={tableHeadings}
          tableData={tableData}
          tableName={`Generated Report`}
          defaultSort={`date`}
        />
        <div class="row pb-5 mb-5">
          <div class="col-md-12 text-center">
            <a href="">
              <button class="btn btn-primary">Download pdf</button>
            </a>
            <a href="">
              <button class="btn btn-primary">Download csv</button>
            </a>
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
      </Collapse>
    </div>
  );
};
export default Report;
