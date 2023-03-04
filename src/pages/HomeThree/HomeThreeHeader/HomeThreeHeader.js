import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

// { h4class, btn_text = "Get a Quote", btn_class = "z-btn-3" }

const HomeThreeHeader = ({ h4class, btn_text = "Get a Quote", btn_class = "z-btn-3" }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();

  return (
    <>
      <header>
        <div className="header__area p-relative header__transparent">
          {/* <div className="header__shape p-absolute ">
            <div className='logo_adj'>
              <img src="assets/img/icon/slider/03/icon-5.png" alt="" />
            </div>
          </div> */}
          <div id="header__sticky" className={stickyMenu ? `sticky header__bottom header__bottom-2 ${h4class && h4class}`
          :`header__bottom header__bottom-2 ${h4class && h4class}`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6">
                  {/* <div className=""> */}
                    <NavLink to="/">
                      <img src="assets/img/logo/rsz_9.png" alt="logo" />
                    </NavLink>
                  {/* </div> */}
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center">
                    <div className="main-menu main-menu-3 menu_three_wrapper">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <NavLink to={`${h4class ? '/headerStyleFour' : '/homeThree'}`}>Home</NavLink>
                            <ul className="submenu">
                              <li><NavLink to="/home">Home Style 1</NavLink></li>
                              <li>
                                <NavLink to="/homeTwo">Home Style 2</NavLink>
                                <ul className="submenu">
                                  <li><NavLink to="/home">Home Style 1</NavLink></li>
                                  <li><NavLink to="/homeTwo">Home Style 2</NavLink></li>
                                  <li><NavLink to="/homeThree">Home Style 3</NavLink></li>
                                </ul>
                              </li>
                              <li>
                                <NavLink to="/homeThree">Home Style 3</NavLink>
                                <ul className="submenu">
                                  <li><NavLink to="/headerStyleFour">Header Syle 4</NavLink></li>
                                  <li><NavLink to="/headerStyleFive">Header Syle 5</NavLink></li>
                                  <li><NavLink to="/headerStyleSix">Header Syle 6</NavLink></li>
                                  <li><NavLink to="/headerStyleSeven">Header Syle 7</NavLink></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li><NavLink to="/platform">Platform</NavLink></li>
                          <li>
                            <NavLink to="/solutions">Solutions</NavLink>
                            <ul className="submenu">
                              <li><NavLink to="/services">Services</NavLink></li>
                              <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/service">Services</NavLink>
                            <ul className="submenu">
                              <li><NavLink to="/portfolio">portfolio</NavLink></li>
                              <li><NavLink to="/portfolioDetails">portfolio Details</NavLink></li>
                              <li><NavLink to="/team">team</NavLink></li>
                              <li><NavLink to="/teamDetails">team Details</NavLink></li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/startnow">Start now</NavLink>
                          </li>
                          <li>
                            <NavLink to="/aiacademy">AI Academy</NavLink>
                            <ul className="submenu">
                              <li><NavLink to="/blogs">Blog</NavLink></li>
                              <li><NavLink to="/blogDetails">Blog Details</NavLink></li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/">About Us</NavLink>
                            <ul className="submenu">
                              <li><NavLink to="/ourteam">Our Team</NavLink></li>
                              <li><NavLink to="/partner">Partners</NavLink></li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="ml-25">
                    <a href="https://calendly.com/onenine/15min?month=2023-03" target="_blank">
                              <button className='z-btn-2'>Book Demo</button>
                           </a>
                      {/* <Link to="/contact" className={`z-btn ${btn_class}`}>{btn_text}</Link> */}
                    </div>
                    <div onClick={handleShow} className="sidebar__menu d-lg-none">
                      <div className="sidebar-toggle-btn sidebar-toggle-btn-3" id="sidebar-toggle">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default HomeThreeHeader;