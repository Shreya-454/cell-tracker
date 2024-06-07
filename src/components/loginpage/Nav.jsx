import { useState } from "react";

import { NavLogo } from "../common/Icons";
import Buttons from "../common/Buttons";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [navShow, setnavShow] = useState(false);
    if (navShow === true) {
   document.body.classList.add("max-md:overflow-hidden");
  } else {
   document.body.classList.remove("max-md:overflow-hidden");
  }
  return (
    <nav>
      <div className="container max-w-[1188px] pb-[10px] pt-8 md:pt-[27px] md:pb-[21px] flex items-center justify-between">
        <a className="relative z-50 " href="http://">
          <NavLogo
            className={` !fill-white ${navShow ? "max-md:!fill-darkBlue" : ""}`}
          />
        </a>
        <div
          className={`flex items-center ${
            navShow ? "top-0" : "-top-full"
          } navbar-toggle duration-300 max-md:pt-[120px] text-nowrap md:w-[60%] md:justify-between`}
        >
          <ul className="flex items-center gap-5 md:gap-[35px] max-md:flex-col">
            <li>
              <NavLink
                to="/"
                rel="noopener noreferrer"
                onClick={() => setnavShow(!navShow)}
                className={`!leading-[26.59px] text-black text-base font-normal navlinkhover md:text-white flex items-center gap-[6px] ${({
                  isActive,
                  isPending,
                }) =>
                  isActive
                    ? "after:absolute relative hover:after:left-[0] after:bottom-0 after:w-0 after:left-[50%] after:rounded-[10px] after:h-[2px] after:bg-white hover:after:w-full after:duration-300"
                    : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <a
                rel="noopener noreferrer"
                href="#work"
                onClick={() => setnavShow(!navShow)}
                className={`!leading-[26.59px] text-black text-base font-normal navlinkhover md:text-white flex items-center gap-[6px] ${({
                  isActive,
                  isPending,
                }) =>
                  isActive
                    ? "after:absolute relative hover:after:left-[0] after:bottom-0 after:w-0 after:left-[50%] after:rounded-[10px] after:h-[2px] after:bg-white hover:after:w-full after:duration-300"
                    : ""}`}
              >
                How It Works
              </a>
            </li>
            <li>
              {" "}
              <NavLink
                onClick={() => setnavShow(!navShow)}
                className={`!leading-[26.59px] text-black text-base font-normal navlinkhover md:text-white flex items-center gap-[6px] ${({
                  isActive,
                  isPending,
                }) =>
                  isActive
                    ? "after:absolute relative hover:after:left-[0] after:bottom-0 after:w-0 after:left-[50%] after:rounded-[10px] after:h-[2px] after:bg-white hover:after:w-full after:duration-300"
                    : ""}`}
              >
                Features
              </NavLink>
            </li>
          </ul>
          <div className="max-md:px-[30px] max-md:flex justify-center max-md:w-full">
            <Buttons
              name=" max-md:!bg-darkBlue max-md:after:!bg-white max-md:hover:!text-darkBlue !bg-white !text-darkBlue after:bg-darkBlue hover:!text-white after:!bg-darkBlue   max-md:!text-white max-md:mt-[68px] w-full max-w-[400px] "
              text="Log In"
            />
          </div>
        </div>
        <button
          onClick={() => setnavShow(!navShow ? true : false)}
          className={`menu-icon ${
            navShow
              ? "bg-transparent after:bg-black before:bg-black before:h-[1px] before:w-[14px] after:h-[1px] after:w-[14px] after:rotate-45 before:-rotate-45 "
              : "after:w-3 after:bg-white after:h-[3px] after:-top-[6px] after:left-0 after:rounded-full before:w-3 before:bg-white before:h-[3px] before:-bottom-[6px] before:right-0 before:rounded-full"
          } my-2.5`}
        ></button>
      </div>
    </nav>
  );
};

export default Nav;