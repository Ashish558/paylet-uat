import React from "react";
import Table from "./table";
import TextField from '@mui/material/TextField';
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
            <a data-toggle="tooltip" title="Back" href="/mandate">
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
            <TextField label="Initiated between" name="initiatedBetween" variant="standard" fullWidth />
            </div>
            <div class="col-md-4">
            <TextField label="Reference 1" name="reference1" variant="standard" fullWidth />
            </div>
            <div class="col-md-4">
              <TextField type="email" label="Email" name="email" variant="standard" fullWidth />
              </div>

              <div class="col-md-4">
              <TextField label="Account" name="account" variant="standard" fullWidth />
              </div>
              <div class="col-md-4">
              <TextField label="Mandate Status" name="mandateStatus" variant="standard" fullWidth />
              </div>
              <div class="col-md-4">
              <TextField label="Consumer name" name="consumerName" variant="standard" fullWidth />
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
