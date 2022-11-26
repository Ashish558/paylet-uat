import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { registerAdmin } from "../services/auth";
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';

let initialState = {
   firstname: '',
   lastname: '',
   emailId: '',
   mobileNumber: '',
   userType: '',
   country: '',
   address: '',
   pinCode: '',
}

const AddWebUser = () => {

   const [values, setValues] = useState(initialState)
console.log(values)
   const handleSubmit = e => {
      e.preventDefault()
      let body = {
         ...values,
         pinCode: parseInt(values.pinCode)
      }
      registerAdmin(body, (err, res) => {
         if (err) return console.log(err)
         console.log(res)
         if (res.data.messageDiscription === 'OK') {
            alert('User successfully added')
            setValues(initialState)
         } else {
            alert(res.data.messageDiscription)
         }
      })
   }

   return (
      <div style={{ margin: "85px 0" }}>
         {/* <div class="row">
            <div class="col-md-6">
               <h4 class="ml-4 mt-3 heading-color">
                  <Link data-toggle="tooltip" title="Back" to="/web-user">
                     <i class="fas fa-chevron-left"></i>
                  </Link>&nbsp;
                  <span class="heading-color">Add Web User</span>
               </h4>
            </div>
         </div> */}
         <hr class="mt-0 ml-4 mr-4" />
         <div class="row sector2">
            <div class="col-md-12">
               <h5 class="mb-0">
                  <Link data-toggle="tooltip" title="Back" to="/web-user">
                     <i class="fas fa-chevron-left"></i>
                  </Link>&nbsp;
                  Add Web User
               </h5>
               <nav aria-label="breadcrumb">
                  <ol class="breadcrumb ml-2 mb-3 pb-2 pt-0">
                     <li class="breadcrumb-item"><a href="/">Home</a></li>
                     <li class="breadcrumb-item"><a href="/add-web-user">Web User</a></li>
                  </ol>
               </nav>
            </div>
         </div>
         <div id="main_content">

            <div class="row mr-auto col-md-6">
               <div class="col pl-0">
                  <li class="selected" id="page1">Add Web User</li>

               </div>
            </div>
            <form id="page_content" onSubmit={handleSubmit}>

               <div class="row col-md-6 mr-auto pl-0">
                  <div class="col-md-6">
                     <TextField label="First Name"
                        name="firstName"
                        variant="standard"
                        fullWidth
                        value={values.firstname}
                        onChange={e => setValues({ ...values, firstname: e.target.value })}
                     />
                  </div>
                  <div class="col-md-6">
                     <TextField label="Last Name"
                        name="lastName"
                        variant="standard"
                        fullWidth
                        value={values.lastname}
                        onChange={e => setValues({ ...values, lastname: e.target.value })} />
                  </div>
                  <div class="col-md-6">
                     <TextField label="Mobile Number"
                        name="mobileNumber"
                        variant="standard"
                        fullWidth
                        value={values.mobileNumber}
                        onChange={e => setValues({ ...values, mobileNumber: e.target.value })} />
                  </div>
                  <div class="col-md-6">
                     <TextField type="email"
                        label="Email"
                        name="email" variant="standard"
                        fullWidth
                        value={values.emailId}
                        onChange={e => setValues({ ...values, emailId: e.target.value })} />
                  </div>
                  <div class="col-md-6">
                     <TextField label="Address"
                        name="address"
                        variant="standard"
                        fullWidth
                        value={values.address}
                        onChange={e => setValues({ ...values, address: e.target.value })} />
                  </div>
                  <div class="col-md-6">
                     <TextField label="Pincode"
                        name="pincode"
                        variant="standard"
                        fullWidth
                        value={values.pinCode}
                        onChange={e => setValues({ ...values, pinCode: e.target.value })} />
                  </div>
                  <div class="col-md-6">
                     <FormControl variant="standard" sx={{ m: 1, width: '100%', minWidth: 120, margin: '0' }}>
                        <InputLabel id="country-select">Country</InputLabel>
                        <Select
                           labelId="country-select"
                           id="demo-simple-select-standard"
                           label="Country"
                           value={values.country}
                           onChange={e => setValues({ ...values, country: e.target.value })}
                        >
                           <MenuItem value="India">India</MenuItem>
                           <MenuItem value="India">India</MenuItem>
                        </Select>
                     </FormControl>
                  </div>
                  <div class="col-md-6">

                     <FormControl variant="standard" sx={{ m: 1, width: '100%', minWidth: 120, margin: '0' }}>
                        <InputLabel id="user-type-select">User Type</InputLabel>
                        <Select
                           labelId="user-type-select"
                           id="demo-simple-select-standard"
                           label="User Type"
                           value={values.userType}
                           onChange={e => setValues({ ...values, userType: e.target.value })}
                        >
                           <MenuItem value="4">Admin</MenuItem>
                           <MenuItem value="5">Support</MenuItem>
                        </Select>
                     </FormControl>

                  </div>
               </div>
               <div class="row justify-content-center">
                  <div class="col-md-6 mt-4">
                     <button class="btn btn-primary" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false">ADD</button>
                     <a href="home.html"><button type="button" class="btn btn-outline-primary waves-effect" onclick="myFunction()">cancel</button></a>
                  </div>
               </div>
            </form>

            {/* </div> */}
         </div>
         {/* <form id="page_content" onSubmit={handleSubmit} >

            <div class="row col-md-6 mr-auto pl-0">
               <div class="col-md-6">
                  <div class="md-form">
                     <input required={true} type="text" id="firstName" class="form-control"
                        value={values.firstname}
                        onChange={e => setValues({ ...values, firstname: e.target.value })}
                     />
                     <label for="">First Name</label>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="md-form">
                     <input required={true} type="text" id="lastName" class="form-control"
                        value={values.lastname}
                        onChange={e => setValues({ ...values, lastname: e.target.value })} />
                     <label for="">Last Name</label>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="md-form">
                     <input required={true} type="number" id="mobilenumber" class="form-control"
                        value={values.mobileNumber}
                        onChange={e => setValues({ ...values, mobileNumber: e.target.value })} />
                     <label for="">Mobile Number</label>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="md-form">
                     <input required={true} type="email" id="email" class="form-control"
                        value={values.emailId}
                        onChange={e => setValues({ ...values, emailId: e.target.value })} />
                     <label for="">Email</label>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="md-form">
                     <input required={true} type="text" id="address" class="form-control"
                        value={values.address}
                        onChange={e => setValues({ ...values, address: e.target.value })} />
                     <label for="">Address</label>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="md-form">
                     <input required={true} type="number" id="pincode" class="form-control"
                        value={values.pinCode}
                        onChange={e => setValues({ ...values, pinCode: e.target.value })} />
                     <label for="">Pincode</label>
                  </div>
               </div>
               <div class="col-md-6">
                  <FormControl required={true} variant="standard" sx={{ mt: 1, minWidth: 120, width: '100%' }}>
                     <InputLabel id="country-select">Country</InputLabel>
                     <Select
                        labelId="country-select"
                        id="demo-simple-select-standard"
                        label="Country"
                        value={values.country}
                        onChange={e => setValues({ ...values, country: e.target.value })}
                     >
                        <MenuItem value="India">India</MenuItem>
                        <MenuItem value="India">India</MenuItem>
                     </Select>
                  </FormControl>
               </div>
               <div class="col-md-6">

                  <FormControl required={true} variant="standard" sx={{ mt: 1, width: '100%', minWidth: 120 }}>
                     <InputLabel id="user-type-select">User Type</InputLabel>
                     <Select
                        labelId="user-type-select"
                        id="demo-simple-select-standard"
                        label="User Type"
                        value={values.userType}
                        onChange={e => setValues({ ...values, userType: e.target.value })}
                     >
                        <MenuItem value="4">Admin</MenuItem>
                        <MenuItem value="5">Support</MenuItem>
                     </Select>
                  </FormControl>

               </div>
            </div>
            <div class="row justify-content-center">
               <div class="col-md-6 mt-4">
                  <button class="btn btn-primary" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" >ADD</button>
                  <a href="home.html"><button type="button" class="btn btn-outline-primary waves-effect" onclick="myFunction()">cancel</button></a>
               </div>
            </div>

         </form> */}

      </div>
   )
}
export default AddWebUser;