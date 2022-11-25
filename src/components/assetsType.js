import React from "react";
import Table from "./table";
import Collapse from "@mui/material/Collapse";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
const AssetsType = () => {
  const [expand, setExpand] = React.useState(true);
  const tableHeadings = [
    { id: "slNo", label: "SL No", numeric: true },
    { id: "assetType", label: "Asset Type", numeric: false },

    { id: "assetStatus", label: "Asset Status", numeric: false },
    { id: "action", label: "Action", numeric: false },
  ];
  const tableData = [
    {
      slNo: 1,
      assetType: "Building",
      assetStatus: "Active",
      action: "Deactivate",
    },
    {
      slNo: 2,
      assetType: "Computer",
      assetStatus: "Active",
      action: "Deactivate",
    },
    {
      slNo: 3,
      assetType: "Flat",
      assetStatus: "Inactive",
      action: "Activate",
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
            <span class="heading-color">Back</span>
          </h4>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />
      <div class="row sector2 mr-1">
        <div class="col-md-6">
          <h5 class="mb-0">Asset Type</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/">Master Data</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/asset-type">Asset Type</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6">
          <div class="btn-toolbar mb-2 mr-4 mb-md-0 float-right">
            <a
              href="#"
              onClick={() => setExpand(!expand)}
              style={{ textDecoration: "none" }}
            >
              Add Asset Type
            </a>
          </div>
        </div>
      </div>
      <Collapse in={expand}>
        <div class="sector3 ml-4 mr-4 mb-5 pb-5 ">
          <div id="myDIV">
            <div class="row justify-content-center col-md-6 ml-auto mr-auto">
              <div class="col-12 d-flex align-items-center">
                <div class="flex-1 col-md-8 pl-0 pr-0">
                  <TextField label="Asset Type" name="assetType" variant="standard" fullWidth />
                </div>
                <div class="col-md-4"></div>
              </div>
              <div class="col-12 d-flex align-items-center">
                <div class="flex-1 col-md-8 pl-0 pr-0">
                <FormControl variant="standard" sx={{ m: 1, width:'100%',marginLeft:'0'}}>
                          <InputLabel id="asset-type-status-select">Asset Type Status</InputLabel>
                          <Select
                            labelId="asset-type-status-select"
                            id="demo-simple-select-standard"
                            label="Asset Type Status"
                          >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="InActive">InActive</MenuItem>
                          </Select>
                        </FormControl>
                </div>
                <div class="col-md-4">
                  <a
                    href="#"
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
        tableName={`Asset Type Details`}
        defaultSort={`assetType`}
      />
    </div>
  );
};
export default AssetsType;
