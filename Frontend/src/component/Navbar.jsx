import React from "react";
import image from "../assets/duranto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="fixed w-full top-0 z-20 bg-[rgb(8,20,51)] text-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFacebook} />
            <p className="text-sm">ফেসবুকে নতুন নতুন আপডেট পেতে ক্লিক করুন</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWhatsapp} />
            <p className="text-sm">
              হোয়াটসঅ্যাপের মাধ্যমে বুকিং দিতে ক্লিক করুন
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <p className="text-sm">01519400800 or 01735150555</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="text-sm">durontotravelsbd@gmail.com</p>
          </div>
        </div>
      </div>
      {/* main navbar */}
      <div className="navbar bg-base-100 px-12 mx-auto mt-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <NavLink to={"/find-invoice"}>Find Invoice</NavLink>
              </li>
              <li>
                <NavLink to={"/gallary"}>Gallary</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/condition"}>Conditions</NavLink>
              </li>
              <li>
                <NavLink to={"/my-account"}>My Account</NavLink>
              </li>
            </ul>
          </div>

          <img className="w-14 h-14" src={image} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold text-gray-500">
            <li>
              <a>Home</a>
            </li>
            <li>
              <NavLink to={"/find-invoice"}>Find Invoice</NavLink>
            </li>
            <li>
              <NavLink to={"/gallary"}>Gallary</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/condition"}>Conditions</NavLink>
            </li>
            <li>
              <NavLink to={"/my-account"}>My Account</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
