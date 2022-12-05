import React, { useState } from "react";
import Table from "./table";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { transactionReport } from "../services/payment";
import { useHistory } from "react-router-dom";

const initialState = {
  fromDate: '',
  toDate: '',
  name: '',
  transactionId: '',
  assetNumber: '',
  paymentType: '',
}

const TransactionReports = ({ transactionData, setTransactionData }) => {
  const [isTransaction, setTransaction] = React.useState(true);
  // const tableHeadings = [
  //   { id: "refNo", label: "Reference Number", numeric: false },
  //   { id: "date", label: "Creation Date", numeric: false },
  //   { id: "status", label: "Status", numeric: false },
  //   { id: "action", label: "Action", numeric: false },
  // ];

  let history = useHistory();
  const tableHeadings = [
    { id: "slNo", label: "SL No", numeric: true },
    { id: "transactionID", label: "Mandate ID", numeric: false },
    { id: "date", label: "Mandate Date", numeric: false },
    { id: "userName", label: "Owner / Tenant Name", numeric: false },
    { id: "frequency", label: "Frequency", numeric: false },
    { id: "noOfPayment", label: "No Of Payment", numeric: true },
    { id: "amount", label: "Amount", numeric: true },
    { id: "paymentMode", label: "Payment Mode", numeric: false },
    { id: "status", label: "Status", numeric: false },
  ];

  const [data, setData] = useState(initialState)
  const [tableData, setTableData] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    setTransactionData(data)
    history.push('/transaction-report')
    return
    transactionReport(data, (err, res) => {
      if (err) return console.log(err.response)
      console.log(res)
      const tempdata = res.data.map((item, idx) => {
        const { transectionId, fromDate, name, paymentFreq, numberOfPayment, amount, paymentType, transectionStatus } = item
        return {
          slNo: idx + 1,
          transactionId: transectionId,
          fromDate: fromDate,
          name: name,
          paymentFreq: paymentFreq,
          numberOfPayment: numberOfPayment,
          amount: amount,
          paymentType: paymentType,
          transectionStatus: transectionStatus
        }
      })
      setTableData(tempdata)
    })
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
                <a href="/create-report">Create Report</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div id="main_content">
        <div class="row mr-auto ml-auto col-md-6">
          <div class="col pl-0">
            <li
              className={isTransaction ? "selected" : "notselected"}
              id="page1"
              onClick={() => setTransaction(true)}
            >
              Transaction Report
            </li>
            <li
              className={!isTransaction ? "selected" : "notselected"}
              id="page2"
              onClick={() => setTransaction(false)}
            >
              Payment Report
            </li>
          </div>
        </div>
        {/* <li class="notselected" id="page3" onclick="change_tab(this.id);">Page3</li> */}

        <div class="hidden_desc" id="page1_desc">
          <div class="row mr-auto ml-auto w-100 col-md-6">
            <h4 class="mt-3">Transaction Report</h4>
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

              <FormControl variant="standard" sx={{ m: 1, width: '100%', marginLeft: '0' }}>
                <InputLabel id="transaction-status-select">Transaction Status</InputLabel>
                <Select
                  labelId="transaction-status"
                  id="demo-simple-select-standard"

                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Owner /Tenant Name
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Account Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Transaction Id / Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Assets Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Transaction Type
                </label>
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
                  onclick="myFunction()"
                >
                  cancel
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="hidden_desc" id="page2_desc">
          <div class="row mr-auto ml-auto w-100 col-md-6">
            <h4 class="mt-3">Payments Report</h4>
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

              <FormControl variant="standard" sx={{ m: 1, width: '100%', marginLeft: '0' }}>
                <InputLabel id="transaction-status-select">Transaction Status</InputLabel>
                <Select
                  labelId="transaction-status"
                  id="demo-simple-select-standard"

                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Owner /Tenant Name
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Account Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Transaction Id / Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Assets Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Transaction Type
                </label>
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
                  onclick="myFunction()"
                >
                  cancel
                </button>
              </a>
            </div>
          </div>
        </div>

        <form id="page_content" onSubmit={handleSubmit}>
          <div class="row mr-auto ml-auto w-100 col-md-6">
            <h4 class="mt-3">
              {isTransaction ? "Transaction" : "Payment"} Report
            </h4>
          </div>
          <div class="row col-md-6 ml-auto mr-auto pl-0">
            <div class="col-md-6">
              <div class="md-form">
                <input
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
                <input
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="To Date"
                  class="form-control"
                  value={data.toDate}
                  onChange={e => setData({ ...data, toDate: e.target.value })}
                />
                <label for="materialSubscriptionFormEmail">To Date</label>
              </div>
            </div>
            {/* <div class="col-md-6">
              <FormControl variant="standard" sx={{ m: 1, width: '100%', marginLeft: '0' }}>
                <InputLabel id="transaction-status-select">Transaction Status</InputLabel>
                <Select
                  labelId="transaction-status"
                  id="demo-simple-select-standard"

                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>
            </div> */}
            <div class="col-md-6">
              <TextField label="Owner /Tenant Name" name="name" variant="standard" fullWidth
                value={data.name}
                onChange={e => setData({ ...data, name: e.target.value })} />
            </div>

            <div class="col-md-6">
              <TextField label="Transaction Id / Number" name="transactionId" variant="standard"
                fullWidth
                value={data.transactionId}
                onChange={e => setData({ ...data, transactionId: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField label="Assets Number" name="assetsNumber" variant="standard" fullWidth
                value={data.assetNumber}
                onChange={e => setData({ ...data, assetNumber: e.target.value })} />
            </div>
            <div class="col-md-6">
              <TextField label="Payment Type" name="PaymentType" variant="standard" fullWidth
                value={data.paymentType}
                onChange={e => setData({ ...data, paymentType: e.target.value })} />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 mt-4">
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
                type="submit"
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
        tableName={``}
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
export default TransactionReports;
