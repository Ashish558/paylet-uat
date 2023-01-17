import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getWebUser } from '../services/get';
import Table from "./table";

const tableData = [
  {
    slNo: 1,
    userId: '#2345',
    date: '2022-08-26',
    userName: 'Prakash',
    mobileNumber: '9825416048',
    email: 'abc@gmail.com',
    userType: 'Admin',
    status: 'Initiated',
    action: 'Edit/View'
  },
  {
    slNo: 2,
    userId: '#2345',
    date: '2022-08-26',
    userName: 'Prakash K',
    mobileNumber: '9825416048',
    email: 'abc@gmail.com',
    userType: 'Support',
    status: 'Initiated',
    action: 'Edit/View'
  },
  {
    slNo: 3,
    userId: '#2345',
    date: '2022-08-26',
    userName: 'Prakash',
    mobileNumber: '9825416048',
    email: 'abc@gmail.com',
    userType: 'Admin',
    status: 'Expired',
    action: 'Edit/View'
  }

];
const tableHeadings = [
  { id: "slNo", label: "SL No", numeric: true },
  { id: "userId", label: "User ID", numeric: false },
  { id: "date", label: "Registration Date", numeric: false },
  { id: "userName", label: "User Name", numeric: false },
  { id: "mobileNumber", label: "MobileNumber", numeric: false },
  { id: "email", label: "Email ID", numeric: false },
  { id: "userType", label: "User Type", numeric: false },
  { id: "status", label: "Status", numeric: false },
  { id: "action", label: "Action", numeric: false },
];
const WebUser = () => {

  const [webUsers, setWebUsers] = useState(tableData)
  // const [webUsers, setWebUsers] = useState([])

  useEffect(() => {
    getWebUser((err, res) => {
      if (err) return console.log(err)
      console.log(res)
      if (res.data.length > 0) {
        let tempData = res.data.map((user, idx) => {
          const { id, address, country, emailId, firstname, lastname, mobile, pinCode, status, userType } = user
          return {
            slNo: idx + 1,
            userId: id,
            date: '-',
            userName: lastname !== null ? `${firstname} ${lastname}` : '-',
            mobileNumber: mobile,
            email: emailId,
            userType: userType === '4' ? 'Admin' : userType === '5' ? 'Support' : '-',
            status: status === 10 ? 'Initiated' : status === 20 ? 'Expired' : 'Processed',
            action: 'Edit / View'
          }
        })
        setWebUsers(tempData)
      }
    })
  }, [])

// console.log(webUsers)

  return (
    <div style={{ margin: "85px 0" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <Link data-toggle="tooltip" title="Back" to="/">
              <i class="fas fa-chevron-left"></i>
            </Link>&nbsp;
            <span class="heading-color">Back</span>
          </h4>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />
      <div class="row sector2 mr-1">
        <div class="col-md-6">
          <h5 class="mb-0">Web User</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">User Details</a></li>
              <li class="breadcrumb-item"><a href="#">Web User</a></li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6">
          <div class="btn-toolbar mb-2 mr-4 mb-md-0 float-right">
            <a href="/add-web-user" >Add Web User</a>
          </div>
        </div>

      </div>

      <Table
        tableHeadings={tableHeadings}
        tableData={webUsers}
        tableName={`User Reports`}
        defaultSort={`slNo`}
      />
    </div>
  )
}
export default WebUser;