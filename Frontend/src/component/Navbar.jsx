import React from "react";
import image from "../assets/duranto.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="sticky top-0 z-20 mb-3 bg-blue-500 text-white shadow-md">
        <div className="flex items-center justify-between px-6 py-2">
          <p className="text-sm font-medium">
            📢 Admissions are open! Apply Now!
          </p>
          <a
            href="#apply"
            className="text-sm font-semibold underline hover:text-gray-200"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="navbar bg-base-100 px-12 mx-auto">
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
                <a>Find Invoice</a>
              </li>
              <li>
                <a>Gallary</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Conditions</a>
              </li>
              <li>
                <a>My Account</a>
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
              <a>Find Invoice</a>
            </li>
            <li>
              <a>Gallary</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Conditions</a>
            </li>
            <li>
              <a>My Account</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
