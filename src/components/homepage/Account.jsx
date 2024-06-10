import React from "react";
import {
  Arrows,
  Calender,
  Card,
  Circle,
  EmailIcon,
  Home,
  Location,
  Lock,
  Money,
  Private,
  Protect,
  Track,
} from "../common/Icons";
import visa from "../../assets/svg/visa.svg";
import mastercard from "../../assets/svg/Mastercard.svg";
import accountVector1 from "../../assets/svg/accountVector1.svg";
import accountVector2 from "../../assets/svg/accountVector2.svg";
import Buttons from "../common/Buttons";
import Heading from "../common/Heading";
import CommonPara from "../common/CommonPara";

const Account = () => {
  return (
    <div
      id="contact"
      className=" xl:pt-[98px] max-sm:pt-[54px]  relative z-[1]"
    >
      <img
        src={accountVector1}
        alt="vector"
        className=" absolute left-0 md:top-[15%] top-[0%] z-[-1] max-sm:w-[41px]"
      />
      <img
        src={accountVector2}
        alt="vector"
        className=" absolute right-0 sm:bottom-[15%] bottom-[-6%] z-[-1] max-sm:w-[41px]"
      />
      <div className="container max-w-[1164px] sm:px-3 px-6 ">
        <Heading textLight="Create your  " textBold="account" />
        <CommonPara text="Join now and protect your family's phones" />
        <div className="flex flex-row flex-wrap -mx-3 items-center">
          <div className="lg:w-5/12 w-full px-3  mb-[42px] lg:mb-0 sm:flex flex-col items-center lg:block">
            <h3
              data-aos="fade-right"
              className=" md:text-3xxl sm:text-2xxl text-2xl !leading-sm text-darkBlue font-light mb-6"
            >
              Get a <span className=" font-extrabold">24 hour</span> trial!
            </h3>
            <div>
              <div
                data-aos="fade-right"
                className="flex gap-2 items-centermd:mb-[11px] mb-[18px]"
              >
                <div className=" animate-wiggle  max-sm:w-[38px] max-sm:h-[30px] bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Location />
                </div>
                <p className=" sm:text-base max-sm:!leading-md text-sm text-lightBlack font-normal">
                  Unlimited location searches
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="flex gap-2 items-center md:mb-[11px] mb-[18px]"
              >
                <div className=" max-sm:w-[38px] max-sm:h-[30px] animate-wiggle1 bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Track />
                </div>
                <p className=" max-sm:!leading-md sm:text-base text-sm text-lightBlack font-normal">
                  Track up to 5 phones
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="flex gap-2 items-center md:mb-[11px] mb-[18px]"
              >
                <div className=" max-sm:w-[38px] max-sm:h-[30px] animate-wiggle2 bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Arrows />
                </div>
                <p className=" max-sm:!leading-md sm:text-base text-sm text-lightBlack font-normal">
                  Multiple ways to locate a phone
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="flex gap-2 items-center md:mb-[11px] mb-[18px]"
              >
                <div className=" animate-wiggle3 max-sm:w-[38px] max-sm:h-[30px] bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Protect />
                </div>
                <p className=" max-sm:!leading-md sm:text-base text-sm text-lightBlack font-normal">
                  Protect your family
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="flex gap-2 items-center md:mb-[11px] mb-[18px]"
              >
                <div className=" animate-wiggle max-sm:w-[38px] max-sm:h-[30px] bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Money />
                </div>
                <p className=" max-sm:!leading-md sm:text-base text-sm text-lightBlack font-normal">
                  14 day money back guarantee
                </p>
              </div>
              <div
                data-aos="fade-right"
                className="flex gap-2 items-center md:mb-10 mb-[27.62px]"
              >
                <div className=" animate-wiggle1 max-sm:w-[38px] max-sm:h-[30px] bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Private />
                </div>
                <p className=" max-sm:!leading-md sm:text-base text-sm text-lightBlack font-normal">
                  Private & confidential
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="  flex justify-center lg:block"
            >
              <div
                className=" lg:max-w-[424px] max-w-[700px] w-full shadow-[0px_0px_9.5px_0px_#00000014] md:p-[18px] p-6
    "
              >
                <p className=" max-sm:!leading-md sm:text-base text-sm text-center text-lightBlack font-normal">
                  Terms: Users must be 16 or over. Pricing options are shown on
                  the payment page. Create an account to start a 24 hour trial
                  with full access to all our tools. The service can be
                  cancelled by the user at any time from within their account.{" "}
                  <span className=" text-skyBlue max-sm:block">
                    View full terms.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 flex justify-center w-full px-3">
            <div className="shadow-common-shadow rounded-xl" data-aos="zoom-in">
              <div
                className="xl:w-[679px] w-full shadow-[0px_0px_11.3px_0px_#00B5D81A]  border border-solid border-lightGrey rounded-xl overflow-hidden
    "
              >
                <div className="flex justify-between items-center md:px-5 px-2 md:py-[15px] py-[24.5px] bg-darkBlue">
                  <div className=" flex  gap-3 items-center">
                    <Circle />
                    <p className="  text-white md:text-3xxl text-2xl !leading-sm">
                      Debit/Credit Card
                    </p>
                  </div>
                  <div className="flex sm:gap-[34px] gap-[6px] items-center">
                    <img
                      src={visa}
                      alt="visa"
                      className=" max-sm:!w-[27.77px]"
                    />
                    <div className="flex flex-col items-center ">
                      <img
                        src={mastercard}
                        alt="card"
                        className=" max-sm:!max-w-[23.97px]"
                      />
                      <p className=" text-white sm:text-xs text-[5.14px] !leading-sm">
                        mastercard
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" md:px-6 px-2 md:pt-[30px] py-[42px] md:pb-9">
                  <form>
                    <p className=" text-darkBlue sm:text-base text-sm max-sm:!leading-md">
                      Your Address
                    </p>
                    <div className=" bg-whiteBg   mt-2 border  border-solid border-blueBorder rounded flex overflow-hidden max-sm:h-[45px] h-[52px] mb-1">
                      <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                        <Home />
                      </div>
                      <label htmlFor="address" hidden></label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Address Line 1"
                        className=" max-sm:!pl-5 text-darkBlue bg-whiteBg w-full max-sm:!leading-md max-sm:placeholder:!leading-md p-[14px] focus:outline-none placeholder:text-darkBlue sm:text-base text-sm md:placeholder:text-base placeholder:text-sm "
                      />
                    </div>
                    <p className=" text-grey max-sm:!leading-md sm:text-base text-sm font-normal md:mb-5 mb-[18px]">
                      Our enter address manually
                    </p>
                    <p className=" text-darkBlue max-sm:!leading-md sm:text-base text-sm ">
                      Email Address
                    </p>
                    <div className=" bg-whiteBg mt-2 border border-solid max-sm:h-[45px] border-blueBorder rounded flex overflow-hidden h-[52px] md:mb-5 mb-[18px]">
                      <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                        <EmailIcon />
                      </div>
                      <label htmlFor="email" hidden></label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Email Address"
                        className=" text-darkBlue  max-sm:!leading-md max-sm:placeholder:!leading-md bg-whiteBg w-full max-sm:!pl-5 p-[14px] focus:outline-none placeholder:text-darkBlue sm:text-base text-sm md:placeholder:text-base placeholder:text-sm "
                      />
                    </div>
                    <p className=" text-darkBlue max-sm:!leading-md sm:text-base text-sm ">
                      Card Number (Visa or Mastercard)
                    </p>
                    <div className=" bg-whiteBg mt-2 max-sm:h-[45px] border border-solid border-blueBorder rounded flex overflow-hidden h-[52px] md:mb-5 mb-[18px]">
                      <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                        <Card />
                      </div>
                      <label htmlFor="card" hidden></label>
                      <input
                        type="text"
                        id="card"
                        placeholder="Valid Card Number"
                        className=" text-darkBlue  max-sm:!leading-md max-sm:placeholder:!leading-md max-sm:!pl-5 bg-whiteBg w-full p-[14px] focus:outline-none placeholder:text-darkBlue sm:text-base text-sm md:placeholder:text-base placeholder:text-sm "
                      />
                    </div>
                    <div className=" flex w-full gap-[19px] md:gap-[17px] md:mb-[46px] mb-[38px]">
                      <div className="w-1/2">
                        <p className=" text-darkBlue max-sm:!leading-md  sm:text-base text-sm">
                          Expiry Date
                        </p>{" "}
                        <div className=" bg-whiteBg mt-2 border max-sm:h-[45px] border-solid border-blueBorder rounded flex overflow-hidden h-[52px] ">
                          <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                            <Calender />
                          </div>
                          <label htmlFor="date" hidden></label>
                          <input
                            type="text"
                            id="date"
                            placeholder="MM/YY"
                            className=" text-darkBlue  max-sm:!leading-md max-sm:placeholder:!leading-md max-sm:!pl-5 w-full p-[14px] bg-whiteBg focus:outline-none placeholder:text-darkBlue sm:text-base text-sm md:placeholder:text-base  placeholder:text-sm"
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <p className=" text-darkBlue max-sm:!leading-md sm:text-base text-sm ">
                          Card Security Code
                        </p>{" "}
                        <div className=" bg-whiteBg mt-2 border max-sm:h-[45px] border-solid border-blueBorder rounded flex overflow-hidden h-[52px]">
                          <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                            <Lock />
                          </div>
                          <label htmlFor="password" hidden></label>
                          <input
                            type="text"
                            id="password"
                            placeholder="E.x @ 0123"
                            className=" text-darkBlue   max-sm:!leading-md max-sm:placeholder:!leading-md max-sm:!pl-5 w-full p-[14px] bg-whiteBg focus:outline-none placeholder:text-darkBlue sm:text-base text-sm md:placeholder:text-base placeholder:text-sm "
                          />
                        </div>
                      </div>
                    </div>
                    <Buttons
                      text="Buy Now (50C)"
                      name=" !w-full !max-w-[631px]"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
