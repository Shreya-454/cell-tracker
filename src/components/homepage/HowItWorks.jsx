import workMobile from "../../assets/images/workMobile.webp";
import leftEllipse from "../../assets/svg/leftAdvantage.svg";
import rightEllipse from "../../assets/svg/rightAdvantage.svg";
import { WorkData } from "../common/Helper";
import Buttons from "../common/Buttons";
import Heading from "../common/Heading";
import CommonPara from "../common/CommonPara";
const HowItWorks = () => {
  return (
    <div className=" sm:pt-12 pb-16 relative z-[1]">
      <div className="container max-w-[1140px] mx-auto sm:px-3 px-6">
        <Heading textLight=" How it " textBold="works" />
        <CommonPara
          text=" Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id."
        />
        <div className="flex flex-row flex-wrap -mx-3 items-center">
          <div className="xl:w-1/2 lg:mt-0 mt-8 flex justify-center w-full px-3 xl:hidden max-sm:hidden">
            {WorkData.map((obj, i) => (
              <div
                key={i}
                data-aos="fade-left"
                className={` ${
                  i === 1
                    ? "!p-5 hidden"
                    : "sm:px-5 pl-5 pr-[17.5px] sm:pb-[37px] pb-[55px] pt-5"
                } sm:pt-5 sm:pb-[37px] px-4 pt-4 pb-[55px] mb-[18px]  max-md:w-full max-lg:mx-4 hover:border-darkBlue duration-300 rounded-xl max-xs:h-[327px] max-md:mx-auto  border shadow-common-shadow max-w-[536px] border-lightGrey`}
              >
                <div
                  className={`w-12  h-[41px] bg-lightBlue flex justify-center items-center max-sm:w-[39px] max-sm:h-[33px] ${
                    i === 1 ? "animate-wiggle2" : "animate-wiggle3"
                  } `}
                >
                  <img
                    src={obj.icons}
                    alt="locate"
                    className="max-sm:w-[18px]"
                  />
                </div>
                <h3 className="pt-4 max-sm:pt-2 font-normal sm:text-2xl text-xl mb-[6px] text-darkBlue !leading-sm">
                  {obj.heading}
                </h3>
                <p
                  className={`font-normal lg:max-w-[496px] max-sm:!leading-md max-xs:max-w-[289px] text-lightBlack sm:text-base text-sm ${
                    i === 1 ? "max-w-[275.59px]" : ""
                  }`}
                >
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="xl:w-1/2 max-xl:flex   w-full px-3 relative z-[1] flex justify-center lg:block max-lg:overflow-x-clip max-sm:mb-8 md:mb-0 ">
            <div className="xl:w-[577.99px] md:w-[577.99px] w-[344.18px] sm:w-[500px] lg:w-[500px] md:h-[577.95px] h-[296.32px] sm:h-[450px] xl:h-[577.95px] lg:h-[450px] bg-ellipse absolute rotate-[161.89deg] animate-wiggle5 xl:left-[-13%] left-1/2 max-md:-translate-x-1/2  md:left-[20%] lg:left-[23%] z-[-1]"></div>
            <div className=" xl:w-[569px] md:w-[569px] w-[349.54px] sm:w-[500px] max-sm:top-[2%] lg:w-[500px] lg:h-[420px] h-[348.9px] sm:h-[420px] md:h-[490.95px] xl:h-[490.95px] bg-ellipse absolute animate-wiggle4 left-1/2 max-md:-translate-x-1/2 md:left-[13%] lg:left-[30%] xl:left-[-7%] z-[-1]"></div>
            <img
              src={workMobile}
              alt="workmobile"
              data-aos="fade-right"
              className=" xl:min-w-[680.1px] max-sm:min-w-[401.29px] max-xl:mx-auto max-sm:h-[365.32px] xl:h-[626.55px] xl:max-w-[unset] xl:!-translate-x-28"
            />
          </div>
          <div className="xl:w-1/2 lg:mt-0 mt-8 max-xl:flex max-xl:flex-col items-center w-full px-3">
            {WorkData.map((obj, i) => (
              <div
                key={i}
                data-aos="fade-left"
                className={` ${
                  i === 1
                    ? "!p-5"
                    : "sm:px-5 pl-5 pr-[17.5px] sm:pb-[37px] pb-[55px] pt-5 max-xl:!hidden max-sm:!block"
                } sm:pt-5 sm:pb-[37px] px-4 pt-4 pb-[55px] mb-[18px]  max-md:w-full max-lg:mx-4 hover:border-darkBlue duration-300 rounded-xl max-xs:h-[327px] max-md:mx-auto  border shadow-common-shadow max-w-[536px] border-lightGrey`}
              >
                <div
                  className={`w-12  h-[41px] bg-lightBlue flex justify-center items-center max-sm:w-[39px] max-sm:h-[33px] ${
                    i === 1 ? "animate-wiggle2" : "animate-wiggle3 "
                  } `}
                >
                  <img
                    src={obj.icons}
                    alt="locate"
                    className="max-sm:w-[18px]"
                  />
                </div>
                <h3 className="pt-4 max-sm:pt-2 font-normal sm:text-2xl text-xl mb-[6px] text-darkBlue !leading-sm">
                  {obj.heading}
                </h3>
                <p
                  className={`font-normal lg:max-w-[496px] max-sm:!leading-md max-xs:max-w-[289px] text-lightBlack sm:text-base text-sm ${
                    i === 1 ? "lg:max-w-[275.59px]" : ""
                  }`}
                >
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:flex max-sm:flex-col xl:mt-10 md:mt-9 mt-[22px] justify-center sm:gap-[14px]">
          <Buttons
            name="max-sm:!mb-[18px] max-sm:!w-full"
            text="Create your Account"
          />
          <Buttons
            name="!bg-transparent !border-darkBlue border after:!bg-darkBlue  hover:!text-white !text-darkBlue max-sm:!w-full"
            text="Got more Question?"
          />
        </div>
      </div>
      <img
        src={leftEllipse}
        alt="left"
        className="absolute md:top-[16%] top-[8%] z-[-1] max-sm:w-[41px] max-lg:max-w-[64px] left-0"
      />
      <img
        src={rightEllipse}
        alt="right"
        className="absolute bottom-0  z-[-1] max-sm:w-[41px] max-lg:max-w-[64px] right-0"
      />
    </div>
  );
};

export default HowItWorks;
