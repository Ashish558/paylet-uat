import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const AddWebUser=()=>{
 return (
  <div style={{ margin: "85px 0" }}>
        <div class="row">
            <div class="col-md-6">
                <h4 class="ml-4 mt-3 heading-color">
                    <a data-toggle="tooltip" title="Back" href="index.html">
                        <i class="fas fa-chevron-left"></i>
                    </a>&nbsp;
                    <span class="heading-color">Add Web User</span>
                </h4>
            </div>
        </div>
        <hr class="mt-0 ml-4 mr-4"/>
        <div class="row sector2">
            <div class="col-md-12">
                <h5 class="mb-0">Add Web User</h5>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb ml-2 mb-3 pb-2 pt-0">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Web User</a></li>
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
            <div id="page_content">
                
                <div class="row col-md-6 mr-auto pl-0">
                    <div class="col-md-6">
                        <div class="md-form">
                            <input type="text" id="firstName"  class="form-control"/>
                            <label for="">First Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form">
                            <input type="text" id="lastName"  class="form-control"/>
                            <label for="">Last Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form">
                            <input type="number" id="mobilenumber"  class="form-control"/>
                            <label for="">Mobile Number</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form">
                            <input type="email" id="email"  class="form-control"/>
                            <label for="">Email</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form">
                            <input type="text" id="address"  class="form-control"/>
                        <label for="">Address</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form">
                            <input type="number" id="pincode"  class="form-control"/>
                        <label for="">Pincode</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="country-select">Age</InputLabel>
                          <Select
                            labelId="country-select"
                            id="demo-simple-select-standard"
                            label="Country"
                          >
                            <MenuItem value="Indian">India</MenuItem>
                            <MenuItem value="Indian">India</MenuItem>
                          </Select>
                        </FormControl>
                    </div> 
                    <div class="col-md-6">
                       
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="user-type-select">User Type</InputLabel>
                          <Select
                            labelId="user-type-select"
                            id="demo-simple-select-standard"
                            label="User Type"
                          >
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="Support">Support</MenuItem>
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
            </div>

        </div>
  </div>
 )
}
export default AddWebUser;