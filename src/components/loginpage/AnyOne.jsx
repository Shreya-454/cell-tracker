
import React from "react";
import {
  MobileNum,
  Celltracker,
  Chat,
  RealTime,
  LocationelleipesLeft,
  LocationelleipesRight,
  UnLimited,
} from "../common/Icons";
import AnyMobile from "../../assets/images/AnyMobile.webp";

const AnyOne = () => {
  return (
    <section
    id="features"
    className="lg:mt-[132px] pb-[67px] mt-[79px] relative z-[1]"
  >
    <div className="max-w-[1164px] mx-auto px-6 sm:px-3">
      <h2
        data-aos="fade-down"
        className="lg:text-5xl text-2xxl !leading-7 lg:!leading-[48px] text-center text-darkBlue font-light"
      >
        Find Anyone Anywhere
        <span className="font-extrabold max-sm:block"> for Under $1</span>
      </h2>
      <p className="max-w-[472px] max-sm:max-w-[275px] mx-auto font-normal text-sm md:text-base !leading-[21px] md:!leading-6 text-center text-lightBlack mt-2">
        Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
        elit rhoncus vestibulum fames libero id.
      </p>
      <div className="flex justify-between max-lg:flex-wrap items-center mt-[31px]  md:mt-[56px]">
        <div className="lg:w-1/3 lg:px-[2px] max-lg:order-1 max-lg:mt-12 max-md:mt-12 w-full">
          <div data-aos="fade-right" className="group relative overflow-hidden z-[1] after:absolute after:bg-blueGradient after:duration-300  after:z-[-1] after:top-0 after:bottom-0 after:left-0 after:right-[100%] hover:after:right-0 hover:border-transparent border max-w-[376px] mx-auto border-gray-low-300 rounded-[4px] lg:min-h-[156px] min-h-[152px] flex  lg:p-[12px_18px_12px_0] h-full p-[16px_16px_16px_0]">
            <div className="flex gap-[14px] items-center">
              <div className="md:p-[17px_19px_17px_20px] p-[14px_16px] inline-block group-hover:bg-white duration-300  bg-light-Blue">
                <Celltracker/>
              </div>
              <p className="font-normal text-lg xl:text-xl !leading-[29px] group-hover:text-white group-hover:opacity-70 duration-300  lg:!leading-[33px]">
                Cell Tracker runs on all phones and configurations, of all
                brands
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="group relative overflow-hidden z-[1] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-[100%] hover:after:right-0 hover:border-transparent after:bg-blueGradient  after:duration-300  after:z-[-1] max-w-[376px] mx-auto max-md:mt-[18px] mt-6 border border-gray-low-300 rounded-[4px] lg:min-h-[156px] min-h-[152px] flex  lg:p-[12px_18px_12px_0] h-full p-[16px_16px_16px_0]">
            <div className="flex gap-[14px] items-center">
              <div className="md:p-[17px_19px_17px_20px] p-[14px_16px] inline-block group-hover:bg-white duration-300 bg-light-Blue">
                <Chat />
              </div>
              <p className="group-hover:text-white group-hover:opacity-70 duration-300  font-normal text-lg xl:text-xl !leading-[29px] lg:!leading-[33px]">
                Customize the message you want the recipient to recieve. Or
                use the one suggested by default
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3  lg:px-[2px]  w-full">
          <img
            src={AnyMobile}
            alt="mobile"
            className="w-full max-md:max-h-[386px] md:w-[300px] max-md:max-w-[213px] lg:max-w-[256px] mx-auto"
          />
        </div>
        <div className="lg:w-1/3 lg:px-[2px] max-lg:mt-[18px] max-lg:order-2 max-md:mt-[18px] w-full">
          <div data-aos="fade-left" className="group relative overflow-hidden z-[1] after:absolute  after:bg-blueGradient  after:duration-300  after:z-[-1] max-w-[376px] mx-auto border after:top-0 after:bottom-0 after:left-0 after:right-[100%] hover:after:right-0 hover:border-transparent border-gray-low-300 rounded-[4px] lg:min-h-[156px] min-h-[152px] flex  lg:p-[12px_18px_12px_0] h-full p-[16px_16px_16px_0]">
            <div className="flex gap-[14px] items-center">
              <div className="md:p-[17px_19px_17px_20px] p-[14px_16px] inline-block group-hover:bg-white duration-300 bg-light-Blue">
                <RealTime />
              </div>
              <p className="group-hover:text-white group-hover:opacity-70 duration-300 font-normal text-lg xl:text-xl !leading-[29px] lg:!leading-[33px]">
                Grab real-time location as precise coordinates
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="group relative overflow-hidden z-[1] after:absolute  after:bg-blueGradient  after:duration-300 after:top-0 after:bottom-0 after:left-0 after:right-[100%] hover:after:right-0 hover:border-transparent after:z-[-1] max-md:mt-[18px] max-w-[376px] mx-auto mt-6 border border-gray-low-300 rounded-[4px] lg:min-h-[156px] min-h-[152px] flex  lg:p-[12px_18px_12px_0] h-full p-[16px_16px_16px_0]">
            <div className="flex gap-[14px] items-center">
              <div className="md:p-[17px_19px_17px_20px] p-[14px_16px] inline-block group-hover:bg-white duration-300 bg-light-Blue">
                <MobileNum />
              </div>
              <p className="group-hover:text-white group-hover:opacity-70 duration-300  font-normal text-lg xl:text-xl !leading-[29px] lg:!leading-[33px]">
                Any mobile number in the world can be tracked
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="group relative z-[1] after:absolute after:bg-blueGradient after:duration-300 after:top-0 after:bottom-0 after:left-0 after:right-[100%] hover:after:right-0  after:z-[-1] max-w-[376px] mx-auto mt-[21px] w-full">
        <div className="max-md:mt-[18px] mt-[21px] border border-gray-low-300 rounded-[4px] lg:min-h-[156px] min-h-[152px] flex  lg:p-[12px_18px_12px_0] h-full p-[16px_16px_16px_0]">
          <div className="flex gap-[14px] items-center">
            <div className="md:p-[17px_19px_17px_20px] p-[14px_16px] inline-block group-hover:bg-white duration-300 bg-light-Blue">
              <UnLimited />
            </div>
            <p className="group-hover:text-white group-hover:opacity-70 duration-300  font-normal text-lg xl:text-xl !leading-[29px] lg:!leading-[33px]">
              Send unlimited geo-location requests
            </p>
          </div>
        </div>
      </div>
    </div>
    <span className="absolute -top-8 md:top-1 left-0">
      <LocationelleipesLeft />
    </span>
    <span className="absolute max-md:hidden md:-bottom-2 right-0">
      <LocationelleipesRight />
    </span>
  </section>
  );
}

export default AnyOne

