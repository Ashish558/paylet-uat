import React from "react";
import paycordBrand from "./../images/paycorp-brand.png";

const Home = () => {
  return (
    <div class="container section3">
      <div class="row mt-md-5 pt-md-4">
        <div class="col-md-4 mt-md-5 text-center">
          <img class="img-responsive ml-md-3" src={paycordBrand} />
        </div>
        <div class="col-md-5 section4">
          <div class="row mt-md-5">
            <div class="col-md-4">
              <a href="/mandate">
                <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background"></i>
                  <i class="fa fa-file-alt fa-stack-1x"></i>
                  <h6>Mandate</h6>
                </span>
              </a>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-2"></div>
            <div class="col-md-2">
              <a href="/payments">
                <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background"></i>
                  <i class="fa fa-rupee-sign fa-stack-1x"></i>
                  <h6>Payments</h6>
                </span>
              </a>
            </div>
          </div>
          <div class="row mt-md-5 mt-3">
            <div class="col-md-2"></div>
            <div class="col-md-2">
              <a href="/enquiry">
                <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background"></i>
                  <i class="fa fa-search fa-stack-1x"></i>
                  <h6>Enquiry</h6>
                </span>
              </a>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-2">
              <a href="/report">
                <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background"></i>
                  <i class="fa fa-file fa-stack-1x"></i>
                  <h6>Reports</h6>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 mt-4 mb-5 pb-5 rightmenu">
          <ul>
            <li class="list-group-item pl-0 pb-0">
              <h4>Quick Links</h4>
            </li>
            <a href="/initiate-mandate-request">
              <li class="list-group-item pb-2 pt-2 border-bottom">
                Create Mandate
              </li>
            </a>
            <a href="/search-mandate-request">
              <li class="list-group-item pb-2 pt-2 border-bottom">
                Search Mandate
              </li>
            </a>
            <a href="/import-mandate-request">
              <li class="list-group-item pb-2 pt-2 border-bottom">
                Import Mandate{" "}
              </li>
            </a>

            <li class="list-group-item pl-0 pb-0">
              <h4 class="mt-2">Saved Reports</h4>
            </li>
            <a href="/today-mandate">
              <li class="list-group-item pb-2 pt-2 border-bottom">
                Today's Mandate
              </li>
            </a>
            <a href="/my-mandate">
              <li class="list-group-item pb-2 pt-2 border-bottom">
                My Mandate
              </li>
            </a>
            <a href="/my-jobs">
              <li class="list-group-item pb-2 pt-2 border-bottom">
                My Transactions
              </li>
            </a>

            <a href="/my-download">
              <li class="list-group-item pb-2">Downloads</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
