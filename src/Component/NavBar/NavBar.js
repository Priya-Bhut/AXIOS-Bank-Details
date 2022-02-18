import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavBar.css";
export default function NavBar() {
  return (
    <>
      <div className="main-navbar">
        <nav>
          <Link to="/home">Home</Link>

          <Link to="/adddetails">Add Details</Link>

          <Link to="/readdetails">Read Details</Link>
          <div id="indicator"></div>
        </nav>

        {/* <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <Link to="https://translate.google.co.in/">
                <FaFacebookSquare className="facebook" />
              </Link>
            </li>
            <li>
              <Link to="https://translate.google.co.in/">
                <FaInstagramSquare className="instagram" />
              </Link>
            </li>
            <li>
              <Link to="https://translate.google.co.in/">
                <FaYoutubeSquare className="youtube" />
              </Link>
            </li>
          </ul>
          <div className="hamburger-menu">
            <GiHamburgerMenu />
          </div>
        </div>
        </div></div>
      </nav> */}
      </div>
    </>
  );
}
