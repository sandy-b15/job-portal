import React from "react";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="background-footer footer">
      <div className="container-fluid padzero full-height">
        <div className="container footer-container">
          <div className="row footer-row">
            <div className="col-md-12 row-content">
              <div className="col-md-3 footer-wid company-block">
                <h1>COMPANY</h1>
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="about">
                      <p>About</p>
                    </a>
                  </li>
                  <li>
                    <a className="google" href="index#services">
                      <p>Services</p>
                    </a>
                  </li>

                  <li>
                    <a className="skype" href="blogs">
                      <p>Blogs/White Paper</p>
                    </a>
                  </li>
                  <li>
                    <a className="skype" href="contact.php">
                      <p>Contact Us</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 move-left footer-wid">
                <h1>CONTACT</h1>
                <div className="col-md-12 padzero">
                  <div className="footer-widget">
                    <ul>
                      <li>
                        <span>
                          <p>Phone Number: +91-9739049299</p>
                        </span>
                      </li>
                      <p></p>

                      <li>
                        <span>
                          <p>Email: info@lucidatechnologies.com</p>
                        </span>
                      </li>
                      <li>
                        <span>
                          <p>Website: www.lucidatechnologies.com</p>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget social-widget">
                    <ul className="social-icons">
                      <li>
                        <a className="facebook">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a className="twitter">
                          <FaTwitter />
                        </a>
                      </li>

                      <li>
                        <a className="linkedIn">
                          <FaLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 move-left footer-wid">
                <h1>ADDRESS</h1>
                <div>
                  <p>
                    #3980/3981, 80 Feet Rd
                    <br /> 1st phase, Girinagar, 3rd Block
                    <br />
                    BSK 3rd Stage
                    <br />
                    Bengaluru - 560 085
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* copyright */}
          <div className="copyright-section">
            <div className="row">
              <div className="col-md-6">
                <p>© 2022 Lucida Technologies Pvt Ltd | All Rights Reserved.</p>
              </div>
              <div className="col-md-6 footer-col">
                <ul className="footer-nav">
                  <li>
                    <a>Privacy Policy</a>
                  </li>
                  <li>
                    <a>Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end-copyright  */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
