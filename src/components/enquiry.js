import React from "react";
import Table from "./table";
const Enquiry = () => {
  const [isMandate, setMandate] = React.useState(true);
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
            <span class="heading-color">Enquiry</span>
          </h4>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />
      <div id="main_content">
        <li
          id="page1"
          className={isMandate ? "selected" : "notselected"}
          onClick={() => setMandate(true)}
        >
          Mandate Enquiry
        </li>
        <li
          className={!isMandate ? "selected" : "notselected"}
          id="page2"
          onClick={() => setMandate(false)}
        >
          Payment Enquiry
        </li>
        {/* <li class="notselected" id="page3" onclick="change_tab(this.id);">Page3</li> */}

        <div class="hidden_desc" id="page1_desc">
          <h4 class="mt-3">Mandate Enquiry</h4>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">
                  Initiated between
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
                <label for="materialSubscriptionFormEmail">Reference 1</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="email"
                  id="materialSubscriptionFormEmail"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Reference 2</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">Account</label>
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
                  Mandate Status
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
                <label for="materialSubscriptionFormEmail">Consumer name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">
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
                <label for="materialSubscriptionFormEmail">Created by</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-4 text-center">
              <a href="">
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

        <div class="hidden_desc" id="page2_desc">
          <h4 class="mt-3">Payments Enquiry</h4>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">
                  Initiated between
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
                <label for="materialSubscriptionFormEmail">Reference 1</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="email"
                  id="materialSubscriptionFormEmail"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Reference 2</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">Account</label>
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
                  Mandate Status
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
                <label for="materialSubscriptionFormEmail">Consumer name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">
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
                <label for="materialSubscriptionFormEmail">Created by</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-4 text-center">
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

        <div id="page_content">
          <h4 class="mt-3">{isMandate ? "Mandate" : "Payment"} Enquiry</h4>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">
                  Initiated between
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
                <label for="materialSubscriptionFormEmail">Reference 1</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="email"
                  id="materialSubscriptionFormEmail"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Reference 2</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">Account</label>
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
                  Mandate Status
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
                <label for="materialSubscriptionFormEmail">Consumer name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormPasswords"
                  class="form-control"
                />
                <label for="materialSubscriptionFormPasswords">
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
                <label for="materialSubscriptionFormEmail">Created by</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-4 text-center">
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
      </div>
      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={`Enquiry Details`}
        defaultSort={`date`}
      />
       <div class="row pb-5 mb-5">
            <div class="col-md-12 text-center">
                <a href="/"><button type="button" class="btn btn-outline-primary waves-effect">cancel</button></a>
            </div>
        </div>
    </div>
  );
};
export default Enquiry;
