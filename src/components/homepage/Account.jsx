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

const Account = () => {
  return (
    <div className=" pt-[98px] pb-[93.28px] relative z-[1]">
      <img
        src={accountVector1}
        alt="vector"
        className=" absolute left-0 md:top-[15%] top-[2%] z-[-1] max-sm:w-[41px]"
      />
      <img
        src={accountVector2}
        alt="vector"
        className=" absolute right-0 sm:bottom-[15%] bottom-[1%] z-[-1] max-sm:w-[41px]"
      />
      <div className="container max-w-[1164px] sm:px-3 px-6 ">
        <h2 className=" lg:text-5xl md:text-3xl text-3xxl text-darkBlue font-light leading-full capitalize text-center mb-2">
          Create your <span className=" font-extrabold">account</span>
        </h2>
        <p className=" md:text-base text-sm text-center text-lightBlack md:pb-[72px] pb-[33.7px] ">
          Join now and protect your family's phones
        </p>
        <div className="flex flex-row flex-wrap -mx-3 items-center">
          <div className="lg:w-5/12 w-full px-3  mb-[42px] lg:mb-0 sm:flex flex-col items-center lg:block">
            <h3 className=" md:text-3xxl text-2xxl leading-sm text-darkBlue font-light mb-6">
              Get a <span className=" font-extrabold">24 hour</span> trial!
            </h3>
            <div>
              <div className="flex gap-2 items-center mb-[11px]">
                <div className=" animate-wiggle bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Location />
                </div>
                <p className=" md:text-base text-sm text-lightBlack font-normal">
                  Unlimited location searches
                </p>
              </div>
              <div className="flex gap-2 items-center md:mb-[11px] mb-[18px]">
                <div className=" animate-wiggle1 bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Track />
                </div>
                <p className=" md:text-base text-sm text-lightBlack font-normal">
                  Track up to 5 phones
                </p>
              </div>
              <div className="flex gap-2 items-center md:mb-[11px] mb-[18px]">
                <div className=" animate-wiggle2 bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Arrows />
                </div>
                <p className=" md:text-base text-sm text-lightBlack font-normal">
                  Multiple ways to locate a phone
                </p>
              </div>
              <div className="flex gap-2 items-center md:mb-[11px] mb-[18px]">
                <div className=" animate-wiggle3 bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Protect />
                </div>
                <p className=" md:text-base text-sm text-lightBlack font-normal">
                  Protect your family
                </p>
              </div>
              <div className="flex gap-2 items-center md:mb-[11px] mb-[18px]">
                <div className=" animate-wiggle bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Money />
                </div>
                <p className=" md:text-base text-sm text-lightBlack font-normal">
                  14 day money back guarantee
                </p>
              </div>
              <div className="flex gap-2 items-center md:mb-10 mb-[27.62px]">
                <div className=" animate-wiggle1 bg-lightBlue w-12 h-10 flex justify-center items-center">
                  <Private />
                </div>
                <p className=" md:text-base text-sm text-lightBlack font-normal">
                  Private & confidential
                </p>
              </div>
            </div>
            <div className=" flex justify-center lg:block">
              <div
                className=" lg:max-w-[424px] max-w-[700px] w-full shadow-[0px_0px_9.5px_0px_#00000014] md:p-[18px] p-6
    "
              >
                <p className=" md:text-base text-sm text-center text-lightBlack font-normal">
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
            <div className="shadow-common-shadow ">
              <div
                className="xl:w-[679px] w-full shadow-[0px_0px_11.3px_0px_#00B5D81A]  border border-solid border-[#03045E1A] rounded-xl overflow-hidden
    "
              >
                <div className="flex justify-between items-center md:px-5 px-2 md:py-[15px] py-[24.5px] bg-darkBlue">
                  <div className=" flex  gap-3 items-center">
                    <Circle />
                    <p className=" text-white md:text-3xxl text-2xl leading-sm">
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
                      <p className=" text-white sm:text-xs text-[5.14px] leading-sm">
                        mastercard
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" md:px-6 px-2 md:pt-[30px] py-[42px] md:pb-9">
                  <form>
                    <label
                      htmlFor="address"
                      className=" text-darkBlue md:text-base text-sm"
                    >
                      Your Address
                    </label>
                    <div className=" bg-[#FAFAFA]  mt-2 border  border-solid border-[#03045E0F] rounded flex overflow-hidden h-[52px] mb-1">
                      <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                        <Home />
                      </div>
                      <input
                        type="text"
                        id="address"
                        placeholder="Address Line 1"
                        className=" max-sm:!pl-5 text-darkBlue bg-[#FAFAFA] w-full p-[14px] focus:outline-none placeholder:text-darkBlue md:text-base text-sm md:placeholder:text-base placeholder:text-sm "
                      />
                    </div>
                    <p className=" text-grey md:text-base text-sm font-normal md:mb-5 mb-[18px]">
                      Our enter address manually
                    </p>
                    <label
                      htmlFor="email"
                      className=" text-darkBlue md:text-base text-sm "
                    >
                      Email Address
                    </label>
                    <div className=" bg-[#FAFAFA] mt-2 border border-solid border-[#03045E0F] rounded flex overflow-hidden h-[52px] md:mb-5 mb-[18px]">
                      <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                        <EmailIcon />
                      </div>
                      <input
                        type="text"
                        id="email"
                        placeholder="Email Address"
                        className=" text-darkBlue bg-[#FAFAFA] w-full max-sm:!pl-5 p-[14px] focus:outline-none placeholder:text-darkBlue md:text-base text-sm md:placeholder:text-base placeholder:text-sm "
                      />
                    </div>
                    <label
                      htmlFor="card"
                      className=" text-darkBlue md:text-base text-sm "
                    >
                      Card Number (Visa or Mastercard)
                    </label>
                    <div className=" bg-[#FAFAFA] mt-2 border border-solid border-[#03045E0F] rounded flex overflow-hidden h-[52px] md:mb-5 mb-[18px]">
                      <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                        <Card />
                      </div>
                      <input
                        type="text"
                        id="card"
                        placeholder="Valid Card Number"
                        className=" text-darkBlue max-sm:!pl-5 bg-[#FAFAFA] w-full p-[14px] focus:outline-none placeholder:text-darkBlue md:text-base text-sm md:placeholder:text-base placeholder:text-sm "
                      />
                    </div>
                    <div className=" flex w-full gap-[19px] md:gap-[17px] md:mb-[46px] mb-[38px]">
                      <div className="w-1/2">
                        <label
                          htmlFor="date"
                          className=" text-darkBlue md:text-base text-sm"
                        >
                          Expiry Date
                        </label>{" "}
                        <div className=" bg-[#FAFAFA] mt-2 border border-solid border-[#03045E0F] rounded flex overflow-hidden h-[52px] ">
                          <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                            <Calender />
                          </div>
                          <input
                            type="text"
                            id="date"
                            placeholder="MM/YY"
                            className=" text-darkBlue max-sm:!pl-5 w-full p-[14px] bg-[#FAFAFA] focus:outline-none placeholder:text-darkBlue md:text-base text-sm md:placeholder:text-base  placeholder:text-sm"
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <label
                          htmlFor="password"
                          className=" text-darkBlue md:text-base text-sm "
                        >
                          Card Security Code
                        </label>{" "}
                        <div className=" bg-[#FAFAFA] mt-2 border border-solid border-[#03045E0F] rounded flex overflow-hidden h-[52px]">
                          <div className=" bg-[#EDEDED] max-w-12 w-full h-full flex justify-center items-center ">
                            <Lock />
                          </div>
                          <input
                            type="text"
                            id="password"
                            placeholder="E.x @ 0123"
                            className=" text-darkBlue max-sm:!pl-5 w-full p-[14px] bg-[#FAFAFA] focus:outline-none placeholder:text-darkBlue md:text-base text-sm md:placeholder:text-base placeholder:text-sm "
                          />
                        </div>
                      </div>
                    </div>
                    <button className=" text-white bg-darkBlue w-full py-4 px-7 rounded md:text-base text-sm leading-lg">
                      Buy Now (50C)
                    </button>
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
