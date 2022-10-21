import React from "react";
import Table from "./table";

const Payments = () => {
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
          <h4 class="ml-4 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="/">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Payments</span>
          </h4>
        </div>

        <div class="col-md-6">
          <ul class="nav justify-content-end mt-2 mr-2">
            <li class="nav-item">
              <a class="nav-link" href="/create-payment">
                <i class="fas fa-plus mr-2"></i>
                <span>Create Payments</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/search-payments">
                <i class="fas fa-search mr-2"></i>
                <span>Search Payments</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />
      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={`List of Payments`}
        defaultSort={`date`}
      />
      <div class="row mb-5 pb-5">
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
export default Payments;
