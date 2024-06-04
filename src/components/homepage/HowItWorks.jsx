import workMobile from "../../assets/images/workMobile.webp";
import leftEllipse from "../../assets/images/svg/leftAdvantage.svg"
import rightEllipse from "../../assets/images/svg/rightAdvantage.svg";
import { WorkData } from "../common/Helper";
import Buttons from "../common/Buttons";
const HowItWorks = () => {
  return (
    <div className=" pt-14 pb-16 relative z-1">
      <div className="container max-w-[1140px] mx-auto sm:px-3 px-6">
        <h2 className="font-light text-center text-darkBlue lg:text-5xl md:text-4xl sm:text-3xl text-2xxl leading-full">
          How it <span className="font-extrabold">works</span>
        </h2>
        <p className="md:pt-2 pt-3 lg:mb-28 md:mb-20 mb-10 text-center text-lightBlack sm:max-w-[472px] max-w-[278px] mx-auto sm:text-base text-sm font-normal">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex items-center flex-row flex-wrap -mx-3">
          <div className="lg:w-1/2 flex justify-center w-full px-3">
            <img src={workMobile} alt="workmobile" className="" />
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-8 max-lg:flex max-md:flex-col w-full px-3">
            {WorkData.map((obj, i) => (
              <div
                key={i}
                className="sm:p-5 p-4 mb-[18px] max-lg:w-[50%] max-md:w-full max-lg:mx-4 hover:border-darkBlue duration-300 rounded-xl max-xs:h-[327px] max-md:mx-auto  border shadow-common-shadow max-w-[536px] border-lightGrey"
              >
                <img src={obj.icons} alt="locate" />
                <h3 className="pt-4 font-normal sm:text-2xl text-xl mb-[6px] text-darkBlue leading-sm">
                  {obj.heading}
                </h3>
                <p className="font-normal lg:max-w-[496px] max-sm:leading-[21px] max-xs:max-w-[289px] text-lightBlack sm:text-base text-sm">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:flex max-sm:flex-col xl:mt-20 md:mt-14 mt-[42px] justify-center sm:gap-[14px]">
          <Buttons name="max-sm:!mb-[18px]" text="Create your Account" />
          <Buttons
            name="!bg-transparent !border-darkBlue border !text-darkBlue"
            text="Got more Question?"
          />
        </div>
      </div>
      <img
        src={leftEllipse}
        alt="left"
        className="absolute md:top-[20%] top-[12%] z-[-1] max-sm:w-[41px] max-lg:max-w-[64px] left-0"
      />
      <img
        src={rightEllipse}
        alt="right"
        className="absolute md:bottom-0 bottom-[2%] z-[-1] max-sm:w-[41px] max-lg:max-w-[64px] right-0"
      />
    </div>
  );
};

export default HowItWorks;
