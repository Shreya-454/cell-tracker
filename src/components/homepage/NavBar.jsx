import { useState } from "react";
import Buttons from "../common/Buttons";
import { NavLogo, QuickHelpIcon } from "../common/Icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navShow, setnavShow] = useState(false);

  if (navShow === true) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }

  return (
    <nav className="max-md:pt-8 max-md:pb-2.5">
      <div className="container sm:px-3 px-6 max-w-[1188px] py-[5px]  md:py-[11px] flex items-center justify-between">
        <Link to="/"  className="relative z-50 ">
          <NavLogo
            className={`!fill-white ${navShow ? "max-md:!fill-darkBlue" : ""}`}
          />
        </Link>
        <div
          className={`flex items-center ${
            navShow ? "top-0" : "-top-full"
          } navbar-toggle duration-300 max-md:pt-[120px] text-nowrap`}
        >
          <a
            rel="noopener noreferrer"
            onClick={() => setnavShow(!navShow)}
            href="#"
            className="content !leading-[26.59px] navlinkhover text-black md:text-white flex items-center gap-[6px]"
          >
            <QuickHelpIcon /> Quick Help
          </a>
          <Link
            to="/login"
            rel="noopener noreferrer"
            onClick={() => setnavShow(!navShow)}
            className="content !leading-[26.59px] navlinkhover text-black md:text-white flex items-center gap-[6px] max-md:pt-5 md:ml-6 md:mr-[14px]"
          >
            Log in
          </Link>
          <div className="max-md:px-[30px] flex justify-center w-full">
            <Buttons
              name=" md:!bg-white md:!text-darkBlue max-md:!mt-[115px] !w-full max-md:hover:!text-darkBlue max-md:after:!bg-white  !max-w-[400px] after:!bg-darkBlue hover:!text-white "
              text="Create an Account"
            />
          </div>
        </div>
        <button
          onClick={() => setnavShow(!navShow ? true : false)}
          aria-label="name"
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

export default NavBar;
