import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
// import { IoCloseOutline } from "react-icons/io5";
import "./Navbar.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from '../assets/Supreme-Logo.png';

// var cnt = 0;
// const click = () => {
//   if (cnt == 0) {
//     document.getElementById("menu1").style.opacity = "1";
//     document.getElementById("menu1").style.visibility = "visible";
//     // document.getElementById('menu1').style.top="105px";
//     cnt = 2;
//     // console.log(cnt)
//   } else {
//     document.getElementById("menu1").style.opacity = "0";
//     document.getElementById("menu1").style.visibility = "hidden";
//     // document.getElementById('menu1').style.top="-130px";
//     cnt = 0;
//     // console.log(cnt)
//   }
// };
// var cnt = 0;
// const remove = () => {
//   document.getElementById("menu1").style.opacity = "0";
//   document.getElementById("menu1").style.visibility = "hidden";
//   cnt = 0;
// };

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");

    if (navbar && logo) {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.padding = "0px 50px 0px";
        logo.style.fontSize = "30px";
      } else {
        navbar.style.padding = "40px 50px 0px";
        logo.style.fontSize = "35px";
      }
    }
  }

  return (
    <>
      <div className="bg" id="navbar">
        <div className="navbar slide ">
          <div className="logo" id="logo">
              <img src={logo} alt="" />
          </div>
          <div className="menu">
            <ul className="main_menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Resume</a>
              </li>

              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contect</a>
              </li>
            </ul>
          </div>
          <div className="bar">
            <FaBarsStaggered className="bars" onClick={handleShow} />
          </div>
        </div>
      </div>
      <div className="bar">
        <div className="mobi_header" id="menu1">
          <Offcanvas show={show} onHide={handleClose} className="offcanvas">
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
              <ul className="mobilemenu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Resume</a>
                </li>

                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Contect</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default Navbar;
