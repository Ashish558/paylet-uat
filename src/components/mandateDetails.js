import React from "react";
const MandateDetails = () => {
  return (
    <div style={{ marginTop: "85px" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="mandate.html">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Mandate Details</span>
          </h4>
        </div>
      </div>

      <hr class="mt-0 ml-4 mr-4" />

      <div class="row sector2 mr-1">
        <div class="col-md-6">
          <h5 class="mb-0">Mandate Details</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Mandate</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Mandate Details</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row ml-2 mt-3  mb-md-5 pb-md-5 labelcolor">
        <div class="col-xl-3 col-md-3 mb-2">
          <label>Reference Number</label>
          <p>d13d7632368a4f28a5986f65174fd44b</p>
        </div>

        <div class="col-xl-3 col-md-3 mb-2">
          <label>Creation Date</label>
          <p>18/04/2019</p>
        </div>

        <div class="col-xl-3 col-md-3 mb-2">
          <label>Status</label>
          <p>Initiated</p>
        </div>
        <div class="col-xl-3 col-md-3 mb-2">
          <label>Action</label>
          <p>View</p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <button class="btn btn-primary">edit</button>
          <button class="btn btn-danger">delete</button>
          <a href="mandate.html">
            <button type="button" class="btn btn-outline-primary waves-effect">
              cancel
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default MandateDetails;
