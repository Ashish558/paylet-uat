import React from "react";
import Table from "./table";

const MyJobs = () => {
  const tableHeadings = [
    { id: "jobName", label: "Job Name", numeric: false },
    { id: "date", label: "Date", numeric: false },
    { id: "batch", label: "Batch", numeric: false },
    { id: "action", label: "Action", numeric: false },
  ];
  const tableData = [
    {
      jobName: "d13d7632368a4f28a5986f65174fd44b",
      date: "13/11/2020",
      batch: "Initiated",
      action: "view",
    },
    {
      jobName: "d13d7632368a4f28a5986f65174fd44b",
      date: "13/11/2020",
      batch: "Initiated",
      action: "view",
    },
    {
      jobName: "d13d7632368a4f28a5986f65174fd44b",
      date: "14/11/2020",
      batch: "Initiated",
      action: "view",
    },
    {
      jobName: "d13d7632368a4f28a5986f65174fd44b",
      date: "14/11/2020",
      batch: "Initiated",
      action: "view",
    },
  ];
  return (
    <div style={{ margin: "85px 0" }}>
      <div class="ml-2 mr-2 mt-5 pt-3">
        <div class="row">
          <div class="col-md-6">
            <h4 class="ml-3 mt-3 heading-color">
              <a data-toggle="tooltip" title="Back" href="/">
                <i class="fas fa-chevron-left"></i>
              </a>
              &nbsp;
              <span class="heading-color">My-Jobs</span>
            </h4>
          </div>
        </div>
        <hr class="mt-0 ml-3 mr-3" />
      </div>

      <div class="row sector2 mb-0">
        <div class="col-md-12">
          <h5 class="mb-0">My-jobs</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">My-jobs</a>
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
export default MyJobs;
