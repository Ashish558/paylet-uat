import React from "react";
import Table from "./table";
import Collapse from "@mui/material/Collapse";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
const WebReport = () => {
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
        <div class="col-md-12">
          <div class="btn-toolbar mb-2 mr-4 mb-md-0 float-right">
            <a
              role="button"
              href="#"
              onClick={() => setExpand(false)}
              style={{ textDecoration: "none" }}
            >
              Add Web User
            </a>
          </div>
        </div>
      </div>

      <div id="main_content">
        <div class="row mr-auto ml-auto col-md-6">
          <div class="col pl-0">
            <li class="selected" id="page1">
              Web User Report
            </li>
          </div>
        </div>
        <div id="page_content">
          <div class="row mr-auto ml-auto w-100 col-md-6">
            <h4 class="mt-3">User Details Report</h4>
          </div>
          <div class="row col-md-6 ml-auto mr-auto pl-0">
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="From Date"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">From Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="To Date"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">To Date</label>
              </div>
            </div>
            <div class="col-md-6">
             
              <FormControl variant="standard" sx={{ m: 1, width:'100%',marginLeft:'0'}}>
              <InputLabel id="user-status-select">User Status</InputLabel>
                          <Select
                            labelId="user-status"
                            id="demo-simple-select-standard"
                           
                          >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="1">1</MenuItem>
                          </Select>
                </FormControl>
                
              
            </div>
            <div class="col-md-6">
            <TextField label="User name" name="userName" variant="standard" fullWidth />
            </div>
            <div class="col-md-6">
            <TextField label="Mobile Number" name="mobileNumber" variant="standard" fullWidth />
            </div>

            <div class="col-md-6">
            <TextField label="User Type" name="userType" variant="standard" fullWidth />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 mt-4">
              <button class="btn btn-primary" onClick={() => setExpand(true)}>
                Generate Report
              </button>
              <a href="/home">
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
      </div>
      <Collapse in={expand}>
        <Table
          tableHeadings={tableHeadings}
          tableData={tableData}
          tableName={`Generated Report`}
          defaultSort={`date`}
        />
      </Collapse>
    </div>
  );
};
export default WebReport;
