import React from "react";
import logoWhite from "./../images/logo-color-white-1.png";
import Dropdown from "react-bootstrap/Dropdown";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
const Header = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  const anchor = "left";
  const list = (anchor) => (
    <div class="modal-content ">
      <div class="modal-header">
        <img class="img-responsive ml-3 float-left" src={logoWhite} />

        <button
          type="button"
          class="close "
          onClick={toggleDrawer(anchor, false)}
        >
          <span aria-hidden="true" class="white-text">
            &times;
          </span>
        </button>
      </div>

      <div class="modal-body">
        <div class="list-group list-group-flush ">
          <div class="nav_item">
            <a
              class="list-group-item active list-group-item-action waves-effect"
              href="home.html"
            >
              Home
            </a>
          </div>
          <div class="nav_item">
            <a class="list-group-item list-group-item-action waves-effect onclick_info">
              Master Data
            </a>
            <ul class="sub-menu">
              <li>
                <a href="Currency.html">Add Currency</a>
              </li>
              <li>
                <a href="AssetsType.html">Add Assets Type</a>
              </li>
              <li>
                <a href="PaymentFrequency.html">Add Payment Frequency</a>
              </li>
              <li>
                <a href="PaymentMode.html">Add Payment Modes</a>
              </li>
            </ul>
          </div>
          <div class="nav_item">
            <a class="list-group-item list-group-item-action waves-effect onclick_info">
              User Details
            </a>
            <ul class="sub-menu">
              <li>
                <a href="WebReport.html">Web user</a>
              </li>
              <li>
                <a href="AssetsType.html">Add Assets Type</a>
              </li>
              <li>
                <a href="PaymentFrequency.html">Payment Frequency</a>
              </li>
              <li>
                <a href="PaymentMode.html">Payment Modes</a>
              </li>{" "}
            </ul>
          </div>
          <div class="nav_item">
            <a class="list-group-item list-group-item-action waves-effect onclick_info">
              Reports
            </a>
            <ul class="sub-menu">
              <li>
                <a href="mandate-reports.html">Mandate Reports</a>
              </li>
              <li>
                <a href="TransactionReport.html">Transaction Reports</a>
              </li>
              <li>
                <a href="WebResult.html">Web Reports</a>
              </li>
              <li>
                <a href="PaymentMode.html">Payment Modes</a>
              </li>
            </ul>
          </div>
          <h4 class="mt-4 ml-3">Quick Links</h4>
          <div class="list-group list-group-flush ">
            <a
              class="list-group-item active list-group-item-action waves-effect"
              href="today-mandate.html"
            >
              Today's Mandate
            </a>
            <a
              class="list-group-item list-group-item-action waves-effect"
              href="my-mandate.html"
            >
              My Mandate
            </a>
            <a
              class="list-group-item list-group-item-action waves-effect"
              href="myjobs.html"
            >
              My Transaction
            </a>
            <a
              class="list-group-item list-group-item-action waves-effect"
              href="my-download.html"
            >
              Downloads
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <header>
      <nav
        // th:fragment="navbar-fragment"
        // xmlns:th="http://www.w3.org/1999/xhtml"
        // xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5"
        class="navbar fixed-top navbar-expand-lg navbar-light ripshadow white scrolling-navbar botborder"
      >
        <div class="container-fluid">
          <a style={{ color: "white" }} onClick={toggleDrawer(anchor, true)}>
            <i class="fas fa-bars mr-3"></i>
          </a>

          <a href="/home">
            <img src={logoWhite} class="img-fluid" alt="" />
          </a>
          <div
            class="collapse navbar-collapse topspace"
            id="navbarSupportedContent"
          >
            <div class="md-form mr-auto">
              <label for="form1"></label>
            </div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <i class="fas fa-user"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div class="text-center">
                  <i class="fas fa-user-circle  fa-3x text-center"></i>
                </div>
                <Dropdown.Item href="#/action-1">
                  <label>
                    <span>Username</span>
                  </label>
                  <p class="border-bottom">
                    <span>abcde</span>
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <label>
                    <span>Corporate Id</span>
                  </label>
                  <p class="border-bottom">
                    <span>abcde</span>
                  </p>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" class="dropdown-item">
                  {" "}
                  <label>
                    <span>Corporate Name</span>
                  </label>
                  <p class="border-bottom">
                    <span>abcde</span>
                  </p>
                </Dropdown.Item>

                <form method="POST" action="#">
                  <div class="profile2 text-center">
                    <button class="btn btn-rounded btn-sm swatch-gray text-center mt-3 logoutbtn">
                      Logout
                    </button>
                  </div>
                </form>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </header>
  );
};
export default Header;
