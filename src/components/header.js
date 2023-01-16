import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logoWhite from "./../images/logo-color-white-1.png";
import Dropdown from "react-bootstrap/Dropdown";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { getUserDetails } from "../services/auth";

const Header = (props) => {
  const { handleLogout, isLoggedIn } = props
  const location = useLocation();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  // useEffect(() => {
  //   let body = { id: 24 }
  //   if (isLoggedIn) {
  //     getUserDetails(body, (err, res) => {
  //       if (err) return console.log(err.response)
  //       // console.log(res.data)
  //       if (res.data.id) {
  //         setUser(res.data)
  //       }
  //     })
  //   }
  // }, [isLoggedIn])

  let user = JSON.parse(sessionStorage.getItem('user'))
  if (user === null || user === undefined) {
    user = {}
  }
  const anchor = "left";
  const list = (anchor) => (
    <div class="modal-content ">
      <div class="modal-header">
        <img class="img-responsive ml-3 float-left" alt="" src={logoWhite} />

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
              href="/"
            >
              Home
            </a>
          </div>
          {2 === 2 ? <>
            <div class="nav_item">
              <a class="list-group-item list-group-item-action waves-effect onclick_info">
                Master Data
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="/currency">Add Currency</a>
                </li>
                <li>
                  <a href="/asset-type">Add Assets Type</a>
                </li>
                <li>
                  <a href="/payment-frequency">Add Payment Frequency</a>
                </li>
                <li>
                  <a href="/payment-mode">Add Payment Modes</a>
                </li>
              </ul>
            </div>
            <div class="nav_item">
              <a class="list-group-item list-group-item-action waves-effect onclick_info">
                User Details
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="/web-user">Web user</a>
                </li>
              </ul>
            </div>
            <div class="nav_item">
              <a class="list-group-item list-group-item-action waves-effect onclick_info">
                Reports
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="/mandate-reports">Mandate Reports</a>
                </li>
                <li>
                  <a href="/transaction-reports">Transaction Reports</a>
                </li>
                <li>
                  <a href="/web-result">Web Reports</a>
                </li>
              </ul>
            </div>
          </> :
            <>
              <div class="nav_item">
                <a
                  class="list-group-item active list-group-item-action waves-effect"
                  href="/mandate"
                >
                  Mandate
                </a>
              </div>
              <div class="nav_item">
                <a
                  class="list-group-item active list-group-item-action waves-effect"
                  href="/payments"
                >
                  Payments
                </a>
              </div>
              <div class="nav_item">
                <a
                  class="list-group-item active list-group-item-action waves-effect"
                  href="/enquiry"
                >
                  Enquiry
                </a>
              </div>
              <div class="nav_item">
                <a
                  class="list-group-item active list-group-item-action waves-effect"
                  href="/report"
                >
                  Reports
                </a>
              </div>
            </>
          }

          <h4 class="mt-4 ml-3">Quick Links</h4>
          <div class="list-group list-group-flush ">
            <a
              class="list-group-item active list-group-item-action waves-effect"
              href="/today-mandate"
            >
              Today's Mandate
            </a>
            <a
              class="list-group-item list-group-item-action waves-effect"
              href="/my-mandate"
            >
              My Mandate
            </a>
            <a
              class="list-group-item list-group-item-action waves-effect"
              href="/my-jobs"
            >
              My Transaction
            </a>
            <a
              class="list-group-item list-group-item-action waves-effect"
              href="/my-download"
            >
              Downloads
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  if (props.register)
    return (
      <nav class="navbar navbar-expand-md navbar-dark">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <img class="img-responsive float-left" src={logoWhite} alt="" />
            </li>
          </ul>
        </div>
        <div class="mx-auto order-0">
          <a class="navbar-brand mx-auto" href="#">
            E-Mandate Registration
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2"></div>
      </nav>
    );
  return (
    <header class="navbar fixed-top navbar-expand-lg navbar-light ripshadow white scrolling-navbar botborder">
      <nav style={{ width: "100%" }}>
        <div class="container-fluid">
          {isLoggedIn &&
            <a style={{ color: "white" }} onClick={toggleDrawer(anchor, true)} >
              <i class="fas fa-bars mr-3"></i>
            </a>
          }
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
          <a href="/">
            <img src={logoWhite} class="img-fluid" alt="" />
          </a>
          <div
            class="collapse navbar-collapse topspace"
            id="navbarSupportedContent"
          >
            <div class="md-form mr-auto">
              <label for="form1"></label>
            </div>
            {isLoggedIn &&
              <Dropdown >
                <Dropdown.Toggle id="dropdown-basic">
                  <i class="fas fa-user"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: '270px' }}>
                  <div class="text-center">
                    <i class="fas fa-user-circle  fa-3x text-center"></i>
                  </div>
                  <Dropdown.Item>
                    <label>
                      <span>First Name</span>
                    </label>
                    <p class="border-bottom">
                      <span> {user.firstname ? user.firstname : '-'} </span>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    {" "}
                    <label>
                      <span>Last Name</span>
                    </label>
                    <p class="border-bottom">
                      <span>{user.lastname ? user.lastname : '-'}</span>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item class="dropdown-item">
                    {" "}
                    <label>
                      <span> Email </span>
                    </label>
                    <p class="border-bottom">
                      <span>{user.emailId ? user.emailId : '-'}</span>
                    </p>
                  </Dropdown.Item>

                  <div onClick={handleLogout} >
                    <div class="profile2 text-center">
                      <button class="btn btn-rounded btn-sm swatch-gray text-center mt-3 logoutbtn">
                        Logout
                      </button>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            }
          </div>
        </div>
      </nav>

    </header>
  );
};
export default Header;
