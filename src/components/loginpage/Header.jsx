import React from "react";
import DoubleMobile from "../../assets/images/mobile-header.webp";
import {
  Flag,
  Locate,
  Location1,
  LocationLightElippes,
} from "../common/Icons";
import NavBar from "../homepage/NavBar";

const Header = () => {
  return (
    <div className=" h-full   bg-[url(./assets/images/logInHeadbg.webp)] relative z-[1] flex flex-col bg-no-repeat bg-cover bg-center lg:bg-full min-h-[810px]">
      <NavBar/>
    <div className="max-w-[1164px] w-full mt-[66px] lg:mt-[104px] px-6 sm:px-3 mx-auto">
      <div className="flex flex-row flex-wrap -mx-3">
        <div className="lg:w-1/2 w-full px-3 lg:mt-[71px]">
          <h1 className=" text-white max-lg:text-center text-[32px] sm:text-5xl lg:text-[52px] xl:text-[64px] leading-[37px] sm:leading-[49px] lg:leading-[64px] font-extrabold font-mukta">
            Locate any phone,
            <span className=" font-light"> anywhere, anytime</span>
          </h1>
          <p className=" font-normal max-lg:text-center text-base sm:text-base leading-6 text-white mt-3 sm:mt-2 lg:pe-8">
            Lorem ipsum dolor sit amet consectetur. Nisl vitae arcu volutpat
            nunc cursus. Lacus ornare aliquet condimentum elementum elementum
            nisl nibh sed. Egestas aliquam id quam nunc.
          </p>
          <div className=" max-lg:mx-auto bg-white rounded shadow-inputNumber flex items-center justify-between ps-2.5 max-w-[448px] mt-6">
            <div className=" flex items-center gap-[7px] ">
              <span>
         <Flag/>
              </span>
              <select
                className="outline-none text-sm leading-[23px] font-Mukta md:leading-[26px] md:text-base"
                name="number"
                id="number"
              >
                <option value="91" className="flex items-center gap-2 ">
                  +91
                </option>
                <option value="01" className="flex items-center gap-2 ">
                  +01
                </option>
                <option value="92" className="flex items-center gap-2 ">
                  +92
                </option>
                <option value="02" className="flex items-center gap-2 ">
                  +02
                </option>
                <option value="21" className="flex items-center gap-2 ">
                  +21
                </option>
              </select>
            </div>
            <input type="number" className="outline-none w-[35%] sm:w-1/2" />
            <button className=" bg-dark-blue rounded font-semibold text-sm md:text-base group text-white leading-[166%] py-[13.5px] px-[22.2px] flex items-center gap-1 hover:text-dark-blue hover:bg-white duration-300 relative border-transparent border-2  hover:border-dark-blue z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-dark-blue hover:after:animate-moveToX">
            <Locate/>
              Locate
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full px-3 max-lg:mt-[68px]">
          <div className=" relative  max-lg:max-w-[600px] max-md:max-w-[322px] mx-auto z-[1]">
            <img
              src={DoubleMobile}
              className="xl:min-w-[612px]  max-md:h-[321px] w-full xl:h-[599px]"
              alt="phoneHeader"
            />
            <div className=" absolute z-[2] -bottom-4 md:bottom-[80px] right-0 xl:right-[-42px] inline-block bg-white bg-headcard rounded-xl shadow-[0px_9px_13.9px_0_#0000001C]">
              <div className="relative z-[1] md:p-[16px_16px_12px_14px] p-2">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <span>
                    <Location1 />
                  </span>
                  <p className="text-lg lg:text-xl leading-[30px] lg:leading-[33px] font-normal text-dark-blue">
                    Geolocation found!
                  </p>
                </div>
                <a
                  href="tel:+44633427390"
                  className="font-semibold text-xl lg:text-2xl leading-[33px] lg:leading-[39px] mt-2"
                >
                  +44 633 427 390
                </a>
                <p className=" max-md:mt-[6px] font-normal text-sm lg:text-base max-w-[189px] md:max-w-[216px] leading-[21px] lg:leading-6 text-black">
                  3 Succession Walk, Fish Island, London E3 2RX, United
                  Kingdom
                </p>
                <span className=" sm:mt-3 mt-[14px] font-light text-xs sm:text-sm leading-[18px] sm:leading-[21px] text-end block">
                June 02,2024 17:34
                </span>
                <span className="absolute z-[-1] left-0 bottom-3 lg:bottom-[3px]">
                  <LocationLightElippes />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header
