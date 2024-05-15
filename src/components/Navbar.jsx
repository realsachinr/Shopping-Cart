import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="w-full bg-slate-500 fixed z-10 h-16 shadow-lg shadow-black   py-4 flex justify-center items-center">
      <div className="flex w-[70rem] flex-row justify-between">
        <NavLink to={"/"} className="w-20 i">
          <img
            className="w-20"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
            alt=""
          />
        </NavLink>

        <div className="flex font-medium items-center justify-center gap-5">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={"/cart"}>
            <div className="relative">
              <FaCartPlus className="text-2xl" />
              {cart.length > 0 && (
                <span className="text-[10px] text-white absolute -top-3 -right-2 bg-gray-900 w-5 h-5 flex drop-shadow-lg justify-center  items-center animate-bounce rounded-full  ">{cart.length}</span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
