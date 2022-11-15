import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const CreatePayment = () => {
  return (
    <div style={{ margin: "85px 0" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="/payments">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Create Payments</span>
          </h4>
        </div>
        <div class="col-md-6">
          <ul class="nav justify-content-end mt-2">
            <li class="nav-item">
              <a class="nav-link" href="/search-payments">
                <i class="fas fa-search mr-2"></i>
                <span class="mr-2">Search Payments</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />
      <div class="row">
        <main role="main" class="col-md-12 ml-sm-auto col-lg-12 px-md-4">
          <form method="POST">
            <input
              type="hidden"
              name="_csrf"
              value="bee03f06-538a-41ee-9f73-2770a5c00716"
            />
            <input type="hidden" name="productCode" value="DEFAULT" />
            <input
              type="hidden"
              name="utilityCode"
              value="NACH00000000000361"
            />
            <input type="hidden" name="clientId" />
            <div>
              <div class="row sector2">
                <div class="col-md-6 pl-2">
                  <h5 class="mb-0">Payments Details</h5>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
                      <li class="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="#">List of Payments</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="#">Payments Details</a>
                      </li>
                    </ol>
                  </nav>
                </div>

                <div class="col-md-6">
                  <div class="btn-toolbar mb-2 mb-md-0 float-right">
                   
                      <form method="POST" action="#" class="form-inline">
                        <input
                          type="hidden"
                          name="_csrf"
                          value="bee03f06-538a-41ee-9f73-2770a5c00716"
                        />
                        <label class="sr-only" for="productCode">
                          Product Code
                        </label>
                        <FormControl variant="outlined" sx={{ m: 1, width:220}}>
                          
                          <Select
                            labelId="mandate-select"
                            id="demo-simple-select-standard"
                            defaultValue="DEFAULT"
                          >
                            <MenuItem value="DEFAULT">Mandate</MenuItem>
                            <MenuItem value="SPECIAL_LOAN_MANDATE">Special Loan Mandate</MenuItem>
                          </Select>
                        </FormControl>
                      </form>
                    
                  </div>
                </div>
              </div>

              <div class="row ml-1 mr-1">
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="text"
                      id="materialSubscriptionFormPasswords"
                      class="form-control"
                    />
                    <label
                      for="materialSubscriptionFormPasswords"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="The NPCI classification under which this mandate falls"
                    >
                      Category Code
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label
                      for="materialSubscriptionFormEmail"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Reference scheme for this mandate. e.g Vehicle Loan etc. Either Scheme Reference or the Consumer Reference Number must be provided."
                    >
                      Reference No 1
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label
                      for="materialSubscriptionFormEmail"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Reference number provided to the customer. e.g. Loan Number. Either Scheme Reference or the Consumer Reference Number must be provided."
                    >
                      Reference No 2
                    </label>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="text"
                      id="materialSubscriptionFormPasswords"
                      class="form-control"
                    />
                    <label
                      for="materialSubscriptionFormPasswords"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Reference number provided to the customer. e.g. Loan Number. Either Scheme Reference or the Consumer Reference Number must be provided."
                    >
                      Occurrence
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label
                      for="materialSubscriptionFormEmail"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Whether this mandate is for a one-off or repeated collection."
                    >
                      Frequency
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">
                      First Collection Date
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">
                      Final Collection Date
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">
                      Debit Type
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">Amount</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row mb-0 sector2">
                <div class="form-group col-sm-12 mb-0 pl-0 mt-4">
                  <h5 class="mt-4">Customer Details</h5>
                </div>
              </div>
              <div class="row ml-1 mr-1">
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="text"
                      id="materialSubscriptionFormPasswords"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">Name</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">
                      Mobile Number
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="text"
                      id="materialSubscriptionFormPasswords"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">Email</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">PAN</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row mb-0 sector2">
                <div class="form-group col-sm-12 mb-0 pl-0 mt-4">
                  <h5 class="mt-4">Customer Account Details</h5>
                </div>
              </div>
              <div class="row ml-1 mr-1">
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">Bank</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">
                      Account Type
                    </label>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="text"
                      id="materialSubscriptionFormPasswords"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">
                      Account Number
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="md-form">
                    <input
                      type="email"
                      id="materialSubscriptionFormEmail"
                      class="form-control"
                    />
                    <label for="materialSubscriptionFormEmail">
                      Confirm Account Number
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group form-row mb-5">
              <div class="col-sm-12 mb-4 text-center mt-4 mb-5">
                <a href="/mandate">
                  <button
                    type="button"
                    class="btn btn-outline-primary waves-effect"
                  >
                    cancel
                  </button>
                </a>
                <a
                  class="btn swatch-gray"
                  href="/home"
                  role="button"
                  formnovalidate
                >
                  save
                </a>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
export default CreatePayment;
