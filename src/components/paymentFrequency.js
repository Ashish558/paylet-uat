import React, { useEffect, useState } from "react";
import Table from "./table";
import Collapse from "@mui/material/Collapse";
import { addPaymentFrequency, getFrequency } from "../services/payment";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { checkIfIdExist } from "../utils/utils";
import { Link } from "react-router-dom";

const data = [
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

const PaymentFrequency = () => {
  const [expand, setExpand] = React.useState(true);
  const [frequencyType, setFrequencyType] = useState('')
  const [status, setStatus] = useState('')
  const [tableData, setTableData] = useState([])

  const tableHeadings = [
    { id: "slNo", label: "SL No", numeric: true },
    { id: "frequencyType", label: "Frequency Type", numeric: false },
    { id: "status", label: "Status", numeric: false },
    { id: "action", label: "Action", numeric: false },
  ];

  const handleSubmit = () => {
    if (frequencyType.trim() === '') return
    if (!status) return
    addPaymentFrequency({ paymentfreqname: frequencyType, status: getStatus(status) },
      (err, res) => {
        if (err) return console.log(err.response)

        if (checkIfIdExist(res.data.payment_freq_id, tableData, 'payment_freq_id')) {
          return alert('Payment Frequency already exists')
        }
        setFrequencyType('')
        setStatus('')
        fetchPaymentFrequency()
        alert('Payment Frequency Added Successfully')
      })
  }

  const fetchPaymentFrequency = () => {
    getFrequency((err, res) => {
      if (err) return console.log(err.response)
      // console.log(res)
      setTableData(res.data.map(frequency => {
        return {
          ...frequency,
          action: frequency.status === 10 ? 'Deactivate' : 'Activate',
          status: frequency.status === 10 ? 'Active' : 'Inactive'
        }
      }))
    })
  }

  const getStatus = stat => stat === 'Active' ? 10 : 20

  const handleStatusChange = e => setStatus(e.target.value)

  const handleAction = row => {
    console.log(row)

    if (row.action === 'Deactivate') {
      addPaymentFrequency({
        paymentfreqname: row.payment_freq_name,
        status: 20,
        payment_freq_id: row.payment_freq_id
      }, (err, res) => {
        if (err) return console.log(err.response)
        fetchPaymentFrequency()
      })
    } else {
      addPaymentFrequency({
        paymentfreqname: row.payment_freq_name,
        status: 10,
        payment_freq_id: row.payment_freq_id
      }, (err, res) => {
        if (err) return console.log(err.response)
        fetchPaymentFrequency()
      })
    }
  }

  useEffect(() => {
    fetchPaymentFrequency()
  }, [])

  return (
    <div style={{ margin: "85px 0" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <Link data-toggle="tooltip" title="Back" to="/">
              <i class="fas fa-chevron-left"></i>
            </Link>
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
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/">Master Data</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/payment-frequency">Payment Frequency</a>
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
            {/* <div class="row justify-content-center col-md-6 ml-auto mr-auto"> */}
            <div class="row justify-content-start col-md-6">
              <div class="col-12 d-flex align-items-center px-0">
                <div class="md-form flex-1 col-md-8 pl-0 pr-0">
                  <input
                    type="text"
                    id="materialSubscriptionFormEmail"
                    class="form-control"
                    value={frequencyType}
                    onChange={e => setFrequencyType(e.target.value)}
                  />
                  <label for="materialSubscriptionFormEmail">
                    Frequency Type
                  </label>
                </div>
                <div class="col-md-4"></div>
              </div>
              <div class="col-12 d-flex align-items-center px-0">
                <div class="md-form flex-1 col-md-8 pl-0 pr-0 mt-2">
                  <FormControl variant="standard" sx={{ m: 1, width: '100%', marginLeft: '0' }}>
                    <InputLabel id="frequency-status-select"
                      className={status === '' ? 'in-active' : 'active'}>
                      Frequency Status
                    </InputLabel>
                    <Select
                      labelId="frequency-status-select"
                      id="demo-simple-select-standard"
                      label="Frequency Status"
                      value={status}
                      onChange={e => handleStatusChange(e)}
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="InActive">InActive</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div class="col-md-4">
                  <a
                    href="#."
                    class="btn swatch-gray btn-sm btn-rounded waves-effect waves-light login_btn"
                    onClick={handleSubmit}
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
        onClickAction={handleAction}
      />
    </div>
  );
};
export default PaymentFrequency;
