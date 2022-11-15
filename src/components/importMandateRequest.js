import React from "react";
import Table from "./table";

const ImportMandateRequest = () => {
  const tableHeadings = [
    { id: "refNo", label: "Batch Reference", numeric: false },

    { id: "date", label: "File Name", numeric: false },

    { id: "status", label: "Status", numeric: false },
    { id: "successCount", label: "Success Count", numeric: false },
  ];
  const tableData = [
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "13/11/2020",
      status: "Authorized",
      successCount: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "13/11/2020",
      status: "	Transaction Open Status",
      successCount: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "14/11/2020",
      status: "Initiated",
      successCount: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "14/11/2020",
      status: "Authorized",
      successCount: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "15/11/2020",
      status: "Rejected By NPCI",
      successCount: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "15/11/2020",
      status: "Authorized",
      successCount: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "17/11/2020",
      status: "Authorization Request Rejected",
      successCount: "view",
    },
  ];

  return (
    <div style={{ margin: "85px 0" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-3 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="/mandate">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Import Mandate Requests</span>
          </h4>
        </div>

        <div class="col-md-6">
          <ul class="nav justify-content-end mt-2">
            <li class="nav-item">
              <a class="nav-link" href="/initiate-mandate-request">
                <i class="fas fa-plus mr-2"></i>
                <span>Create Mandate</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/search-mandate-request">
                <i class="fas fa-file-import mr-2"></i>
                <span>Search Mandate</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="mt-0 ml-3 mr-3" />

      <div class="row sector2">
        <div class="col-md-12">
          <h5 class="mb-0 ml-3">Import Mandate</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">List of Mandates</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Import Mandates</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <form method="POST">
        <div class="card ml-3 mr-3 mt-4">
          <div class="card-header" id="uploadFileHeader">
            <h3 class="mb-0 align-text-center">
              <i class="fa fa-upload"></i> Upload File
            </h3>
          </div>
          <div class="card-body">
            <div class="form-group form-row align-items-center mb-0">
              <div class="col-md-4">
                <input
                  type="file"
                  name="file"
                  class="form-control-file"
                  id="mandateFile"
                />
              </div>
              <div class="col-md-4">
                <button
                  type="submit"
                  class="btn btn-primary sm-mt-5"
                  role="submit"
                >
                  Clear
                </button>
                <button type="reset" class="btn swatch-gray sm-mt-5">
                  Upload
                </button>
              </div>
              <div class="col-md-4 float-right">
                <h4>
                  <i class="fa fa-upload"></i>Upload
                </h4>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={`Import Mandate Details`}
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
export default ImportMandateRequest;
