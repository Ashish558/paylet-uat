import React, { useEffect, useState } from "react";
import Table from "./table";
import Collapse from "@mui/material/Collapse";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addPaymentMode, getAllPaymentMode } from "../services/payment";

const PaymentMode = () => {
  const [expand, setExpand] = React.useState(true);
  const tableHeadings = [
    { id: "payment_mode_id", label: "Payment Mode Id", numeric: true },
    { id: "paymentMode", label: "Payment Mode Name", numeric: false },
    { id: "status", label: "Status", numeric: false },
    { id: "action", label: "Action", numeric: false },
  ];
  const data = [
    {
      slNo: 1,
      paymentMode: "ACH",
      status: "Active",
      action: "Deactivate",
    },
    {
      slNo: 2,
      paymentMode: "Credit Card",
      status: "	Active",
      action: "Deactivate",
    },
    {
      slNo: 3,
      paymentMode: "UPI",
      status: "Inactive",
      action: "Activate",
    },
  ];

  const [paymentName, setPaymentName] = useState('')
  const [paymentStatus, setPaymentStatus] = useState('')
  const [tableData, setTableData] = useState([])

  const handleSubmit = () => {
    if (paymentName.trim() === '') return

    addPaymentMode({ paymentmodename: paymentName, status: getStatus(paymentStatus) }, (err, res) => {
      setPaymentName('')
      setPaymentStatus(0)
      if (err) return console.log(err.response)
      fetchPaymentModes()
      if (res.data.messageDiscription) {
        alert(res.data.messageDiscription)
      }
    })
  }

  const getStatus = stat => stat === 'Active' ? 10 : 20

  const handleStatusChange = e => setPaymentStatus(e.target.value)

  const handleAction = row => {
    console.log(row)

    if (row.action === 'Deactivate') {
      addPaymentMode({
        paymentmodename: row.payment_mode_name,
        status: 20,
        payment_mode_id: row.payment_mode_id
      }, (err, res) => {
        if (err) return console.log(err.response)
        fetchPaymentModes()
      })
    } else {
      addPaymentMode({
        paymentmodename: row.payment_mode_name,
        status: 10,
        payment_mode_id: row.payment_mode_id
      }, (err, res) => {
        if (err) return console.log(err.response)
        fetchPaymentModes()
      })
    }

  }

  const fetchPaymentModes = () => {
    getAllPaymentMode((err, res) => {
      if (err) return console.log(err.response)
      // console.log(res)
      setTableData(res.data.map(curr => {
        return {
          ...curr,
          action: curr.status === 10 ? 'Deactivate' : 'Activate',
          status: curr.status === 10 ? 'Active' : 'Inactive'
        }
      }))
    })
  }

  useEffect(() => {
    fetchPaymentModes()
  }, [])

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
          <h5 class="mb-0">Payment Mode</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Master Data</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Payment Mode</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6">
          <div class="btn-toolbar mb-2 mr-4 mb-md-0 float-right">
            <a
              href="#"
              style={{ textDecoration: "none" }}
              onClick={() => setExpand(!expand)}
            >
              Add Payment Mode
            </a>
          </div>
        </div>
      </div>
      <Collapse in={expand}>
        <div class="sector3 ml-4 mr-4 mb-5 pb-5">
          <div id="myDIV">
            <div class="row justify-content-center col-md-6 ml-auto mr-auto">
              <div class="col-12 d-flex align-items-center">
                <div class="md-form flex-1 col-md-8 pl-0 pr-0">
                  <input
                    type="text"
                    id="materialSubscriptionFormEmail"
                    class="form-control"
                    value={paymentName}
                    onChange={e => setPaymentName(e.target.value)}
                  />
                  <label for="materialSubscriptionFormEmail">
                    Payment Mode Name
                  </label>
                </div>
                <div class="col-md-4"></div>
              </div>
              <div class="col-12 d-flex align-items-center">
                <div class="md-form flex-1 col-md-8 pl-0 pr-0">
                  <FormControl variant="standard" sx={{ m: 1, width: '100%', marginLeft: '0' }}>
                    <InputLabel id="payment-mode-status-select"
                      className={paymentStatus === '' ? 'in-active' : 'active'}>
                      Payment Mode Status
                    </InputLabel>
                    <Select
                      labelId="payment-mode-status-select"
                      id="demo-simple-select-standard"
                      label="Payment Mode Status"
                      value={paymentStatus}
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
        tableName={`Payment Mode Details`}
        defaultSort={`slNo`}
        onClickAction={handleAction}
      />
    </div>
  );
};
export default PaymentMode;
