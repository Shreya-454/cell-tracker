import { useState } from "react";
import Buttons from "../common/Buttons";
import { NavLogo, QuickHelpIcon } from "../common/Icons";

const NavBar = () => {
  const [navShow, setnavShow] = useState(false);
  return (
    <nav>
      <div className="container max-w-[1188px] pt-8 sm:py-[11px] flex items-center justify-between">
        <a className="relative z-20 " href="http://">
          <NavLogo className={`${navShow ? "fill-darkBlue" : "fill-white"}`} />
        </a>
        <div
          className={`flex items-center ${
            navShow ? "top-0" : "-top-full"
          } navbar-toggle duration-300 max-sm:pt-[120px] text-nowrap`}
        >
          <a
            href="http://"
            className="content leading-[26.59px] text-black sm:text-white flex items-center gap-[6px]"
          >
            <QuickHelpIcon /> Quick Help
          </a>
          <a
            href="http://"
            className="content leading-[26.59px] text-black sm:text-white flex items-center gap-[6px] max-sm:pt-5 sm:ml-6 sm:mr-[14px]"
          >
            Log in
          </a>
          <div className="max-sm:px-[30px] flex justify-center w-full">
            <Buttons
              name=" sm:!bg-white sm:!text-darkBlue max-sm:!mt-[115px] !w-full !max-w-[400px] "
              text="Create an Account"
            />
          </div>
        </div>
        <button
          onClick={() => setnavShow(!navShow ? true : false)}
          className={`menu-icon ${
            navShow
              ? "bg-transparent after:bg-black before:bg-black before:h-[2px] before:w-3 after:h-[2px] after:w-3 after:rotate-45 before:-rotate-45 "
              : "after:w-3 after:bg-white after:h-[3px] after:-top-[6px] after:left-0 after:rounded-full before:w-3 before:bg-white before:h-[3px] before:-bottom-[6px] before:right-0 before:rounded-full"
          }`}
        ></button>
      </div>
    </nav>
  );
};

export default NavBar;
