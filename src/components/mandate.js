import React from "react";
import Table from "./table";

const Mandate = () => {
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
            <a data-toggle="tooltip" title="Back" href="index.html">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Mandates</span>
          </h4>
        </div>

        <div class="col-md-6">
          <ul class="nav justify-content-end mt-2 mr-2">
            <li class="nav-item">
              <a class="nav-link" href="initiate-mandate-request.html">
                <i class="fas fa-plus mr-2"></i>
                <span>Create Mandate</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="search-mandate-request.html">
                <i class="fas fa-search mr-2"></i>
                <span>Search Mandate</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="import-mandate-request.html">
                <i class="fas fa-file-import mr-2"></i>
                <span>Bulk Upload</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />

      <div class="row sector2">
        <div class="col-md-12">
          <h5 class="mb-0">List of Mandates</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">List of Mandates</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={``}
        defaultSort={`date`}
      />
      <div class="row mt-3 mb-5 pb-5">
        <div class="col-md-12 text-center">
          <button type="button" class="btn btn-outline-primary waves-effect">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Mandate;
