import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import Table from "./table";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { mandateReport } from "../services/reports";
import { useHistory } from "react-router-dom";

const initialState = {
  // fromDate: '',
  // toDate: '',
  mandateStatus: '',
  name: '',
  accountNumber: '',
  mandateId: '',
  assetNumber: '',
  assetType: '',
}

const ReportsNew = ({ setMandateData }) => {
  const [isMandate, setMandate] = React.useState(true);
  const tableHeadings = [
    { id: "Sl no", label: "Sl No", numeric: true },
    { id: "Mandate ID", label: "Mandate ID", numeric: true },
    { id: "Mandate Date", label: "Mandate Date", numeric: false },
    { id: "Frequency", label: "Frequency", numeric: false },
    { id: "No of Payment", label: "No of Payment", numeric: true },
    { id: "Amount", label: "Amount", numeric: true },
    { id: "Payment", label: "Payment Mode", numeric: false },
    { id: "mandateStatus", label: "MandateS tatus", numeric: false },
    { id: "action", label: "Owner / Tenant Name", numeric: false },
  ];

  const [data, setData] = useState(initialState)
  const [tableData, setTableData] = useState([])
const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    setMandateData(data)
    history.push('/mandate-reports')
    return
    if (isMandate) {
      mandateReport(data, (err, res) => {
        if (err) return console.log(err.response)
        console.log(res)
        if (res.data.messageDiscription) {
          alert(res.data.messageDiscription)
          return
        }

        let tempdata = res.data.map((item, idx) => {
          return {
            slno: idx + 1,
            mandateId: item.mandateId,
            date: 'date',
            name: item.name,
            paymentFreq: item.paymentFreq,
            numberOfPayment: item.numberOfPayment,
            amount: item.amount,
            paymentMode: item.paymentMode,
            mandateStatus: item.mandateStatus,
          }
        })
        setTableData(tempdata)
        setData(initialState)
        // alert('Mandate Report Generated Successfully')
      })
    }
  }

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
                <a href="/reports-new">Create Report</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div id="main_content">
        <div class="row col-md-6">
          <div class="col pl-0 heading-toggle">
            <li
              className={isMandate ? "selected" : "notselected"}
              id="page1"
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
          </div>
        </div>

        <form class="hidden_desc" id="page1_desc" onSubmit={handleSubmit} >
          <div class="row w-100 col-md-6">
            <h4 class="mt-3">Mandate Report</h4>
          </div>
          <div class="row col-md-6  pl-0">
            <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="date"
                  id="fromDate"
                  placeholder="From Date"
                  class="form-control"
                  value={data.fromDate}
                  onChange={e => setData({ ...data, fromDate: e.target.value })}
                />
                <label for="fromDate">From Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="date"
                  id="toDate"
                  placeholder="To Date"
                  class="form-control"
                  value={data.toDate}
                  onChange={e => setData({ ...data, toDate: e.target.value })}
                />
                <label for="toDate">From Date</label>
              </div>
            </div>
            <div class="col-md-6">

              <FormControl variant="standard" sx={{ m: 1, width: '100%' }}>
                <InputLabel id="mandate-status-select">Mandate Status</InputLabel>
                <Select
                  labelId="mandate-status"
                  id="demo-simple-select-standard"
                  defaultValue="DEFAULT"
                  value={data.mandateStatus}
                  onChange={e => setData({ ...data, mandateStatus: e.target.value })}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div class="col-md-6">
              <TextField label="Owner /Tenant Name" name="name" variant="standard" fullWidth
                value={data.name}
                onChange={e => setData({ ...data, name: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField label="Account Number" name="accountNumber" variant="standard" fullWidth
                value={data.accountNumber}
                onChange={e => setData({ ...data, accountNumber: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField label="Mandate Id / Number" name="mandateId" variant="standard" fullWidth
                value={data.mandateId}
                onChange={e => setData({ ...data, mandateId: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField label="Assets Number" name="assetsNumber" variant="standard" fullWidth
                value={data.assetNumber}
                onChange={e => setData({ ...data, assetNumber: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField label="Assets Type" name="assetsType" variant="standard" fullWidth
                value={data.assetType}
                onChange={e => setData({ ...data, assetType: e.target.value })} />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 mt-4">
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
                type='submit'
                onClick={handleSubmit}
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
        </form>

        <div class="hidden_desc" id="page2_desc">
          <div class="row w-100 col-md-6">
            <h4 class="mt-3">Payments Report</h4>
          </div>
          <div class="row col-md-6  pl-0">

            {/* <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="From Date"
                  class="form-control"
                  value={data.fromDate}
                  onChange={e => setData({ ...data, fromDate: e.target.value })}
                />
                <label for="materialSubscriptionFormEmail">From Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="To Date"
                  class="form-control"
                  value={data.toDate}
                  onChange={e => setData({ ...data, toDate: e.target.value })}
                />
                <label for="materialSubscriptionFormEmail">To Date</label>
              </div>
            </div> */}

            <div class="col-md-6">

              <FormControl variant="standard" sx={{ m: 1, width: '100%', marginLeft: '0' }}>
                <InputLabel id="mandate-status-select">Mandate Status</InputLabel>
                <Select
                  labelId="mandate-status"
                  id="demo-simple-select-standard"
                  defaultValue="DEFAULT"
                  value={data.mandateStatus}
                  onChange={e => setData({ ...data, mandateStatus: e.target.value })}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                  value={data.name}
                  onChange={e => setData({ ...data, name: e.target.value })}
                />
                <label for="materialSubscriptionFormEmail">
                  Owner /Tenant Name
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                  value={data.accountNumber}
                  onChange={e => setData({ ...data, accountNumber: e.target.value })}
                />
                <label for="materialSubscriptionFormEmail">
                  Account Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                  value={data.mandateId}
                  onChange={e => setData({ ...data, mandateId: e.target.value })}
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Mandate Id / Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                  value={data.assetNumber}
                  onChange={e => setData({ ...data, assetNumber: e.target.value })}
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Assets Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                  value={data.assetType}
                  onChange={e => setData({ ...data, assetType: e.target.value })}
                />
                <label for="materialSubscriptionFormEmail">Assets Type</label>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 mt-4">
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

        <form id="page_content" onSubmit={handleSubmit} >
          <div class="row w-100 col-md-6">
            <h4 class="mt-3">{isMandate ? "Mandate" : "Payment"} Report</h4>
          </div>
          <div class="row col-md-6  pl-0">

            {/* <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="date"
                  id="fromDate"
                  placeholder="From Date"
                  class="form-control"
                  value={data.fromDate}
                  onChange={e => setData({ ...data, fromDate: e.target.value })}
                />
                <label for="fromDate">From Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input required
                  type="date"
                  id="toDate"
                  placeholder="From Date"
                  class="form-control"
                  value={data.toDate}
                  onChange={e => setData({ ...data, toDate: e.target.value })}
                />
                <label for="toDate">To Date</label>
              </div>
            </div> */}

            <div class="col-md-6">

              <FormControl variant="standard" sx={{ m: 1, width: '100%', marginLeft: '0' }}>
                <InputLabel id="mandate-status-select">Mandate Status</InputLabel>
                <Select
                  labelId="mandate-status"
                  id="demo-simple-select-standard"
                  value={data.mandateStatus}
                  onChange={e => setData({ ...data, mandateStatus: e.target.value })}
                >
                  <MenuItem value="Initiated">Initiated</MenuItem>
                  <MenuItem value="Expired">Expired</MenuItem>
                  {/* <MenuItem value="20">Inactive</MenuItem> */}
                </Select>
              </FormControl>

            </div>
            <div class="col-md-6">
              <TextField
                label="Owner /Tenant Name" name="name" variant="standard" fullWidth
                value={data.name}
                onChange={e => setData({ ...data, name: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField
                label="Account Number" name="accountNumber" variant="standard" fullWidth
                value={data.accountNumber}
                onChange={e => setData({ ...data, accountNumber: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField
                label="Mandate Id / Number" name="mandateId" variant="standard" fullWidth
                value={data.mandateId}
                onChange={e => setData({ ...data, mandateId: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField
                label="Assets Number" name="assetsNumber" variant="standard" fullWidth
                value={data.assetNumber}
                onChange={e => setData({ ...data, assetNumber: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField
                label="Assets Type" name="assetsType" variant="standard" fullWidth
                value={data.assetType}
                onChange={e => setData({ ...data, assetType: e.target.value })} />
            </div>
          </div>
          <div class="row justify-content-start">
            <div class="col-md-6 mt-4">
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
                type='submit'
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
        </form>

      </div>

      {/* <Table
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
            <button type="button" class="btn btn-outline-primary waves-effect">
              cancel
            </button>
          </a>
        </div>
      </div> */}

    </div>
  );
};
export default ReportsNew;
