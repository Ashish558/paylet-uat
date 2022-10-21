import React from "react";
import Table from "./table";
import Collapse from "@mui/material/Collapse";
const PaymentFrequency = () => {
  const [expand, setExpand] = React.useState(true);
  const tableHeadings = [
    { id: "slNo", label: "SL No", numeric: true },
    { id: "frequencyType", label: "Frequency Type", numeric: false },
    { id: "status", label: "Status", numeric: false },
    { id: "action", label: "Action", numeric: false },
  ];
  const tableData = [
    {
      slNo: 1,
      frequencyType: "Monthly",
      status: "Active",
      action: "Deactivate",
    },
    {
      slNo: 2,
      frequencyType: "Quaterly",
      status: "	Active",
      action: "Deactivate",
    },
    {
      slNo: 3,
      frequencyType: "Monthly",
      status: "Inactive",
      action: "Activate",
    },
  ];
  return (
    <div style={{ margin: "85px 0" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="home.html">
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
          <h5 class="mb-0">Payment Frequency</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Master Data</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Payment Frequency</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6">
          <div class="btn-toolbar mb-2 mr-4 mb-md-0 float-right">
            <a
              role="button"
              href="#"
              style={{ textDecoration: "none" }}
              onClick={() => setExpand(!expand)}
            >
              Add Payment Frequency
            </a>
          </div>
        </div>
      </div>
      <Collapse in={expand}>
        <div class="sector3 ml-4 mr-4 mb-5 pb-5 ">
          <div id="myDIV">
            <div class="row justify-content-center col-md-6 ml-auto mr-auto">
              <div class="col-12 d-flex align-items-center">
                <div class="md-form flex-1 col-md-8 pl-0 pr-0">
                  <input
                    type="email"
                    id="materialSubscriptionFormEmail"
                    class="form-control"
                  />
                  <label for="materialSubscriptionFormEmail">
                    Frequency Type
                  </label>
                </div>
                <div class="col-md-4"></div>
              </div>
              <div class="col-12 d-flex align-items-center">
                <div class="md-form flex-1 col-md-8 pl-0 pr-0">
                  <input
                    type="email"
                    id="PaymentFrequency_code"
                    class="form-control"
                  />
                  <label for="PaymentFrequency_code">Frequency Status</label>
                </div>
                <div class="col-md-4">
                  <a
                    href="#."
                    class="btn swatch-gray btn-sm btn-rounded waves-effect waves-light login_btn"
                  >
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={`Payment Frequency Details`}
        defaultSort={`slNo`}
      />
    </div>
  );
};
export default PaymentFrequency;
