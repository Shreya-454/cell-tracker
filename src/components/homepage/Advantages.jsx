import Buttons from "../common/Buttons";
import leftellipse from "../../assets/images/svg/leftAdvantage.svg";
import rightellipse from "../../assets/images/svg/rightAdvantage.svg";
import { AdvantageData } from "../common/Helper";

const Advantages = () => {
  return (
    <div className="pt-11 pb-14 relative z-1">
      <div className="container max-w-[1140px] mx-auto sm:px-3 px-6">
        <h2 className="font-light text-center text-darkBlue lg:text-5xl md:text-4xl sm:text-3xl text-2xxl leading-full">
          Advantages of <span className="font-extrabold">Celltracker</span>
        </h2>
        <p className="md:pt-2 pt-3 text-center text-lightBlack  lg:mb-[50px] mb-12 sm:max-w-[472px] max-w-[278px] mx-auto sm:text-base text-sm font-normal">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-wrap xl:pb-12 pb-[42px] flex-row -mx-3 justify-center">
          {AdvantageData.map((obj, i) => (
            <div
              key={i}
              className="xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full xl:mt-2 xl:mb-0 mb-[18px] px-3"
            >
              <div
                className={`border border-lightGrey group hover:shadow-common-shadow duration-300 hover:border-darkBlue rounded-xl ${
                  i % 2 !== 0 ? "xl:mt-[23px]" : ""
                }`}
              >
                <div className="p-[18px] xl:h-[253px] md:h-[236px] sm:h-[228px] h-[184px]  hover:border-transparent duration-300 w-full rounded-[11.20px] border border-lightGrey ">
                  <img src={obj.icons} alt="instant" />
                  <h3 className="mt-1 text-darkBlue font-normal leading-sm sm:text-2xl text-xl">
                    {obj.title}
                  </h3>
                  <p className="pt-[6px] xl:max-w-[231px] font-normal sm:text-base text-sm text-lightBlack">
                    {obj.dec}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="xl:mt-1 flex max-sm:w-full justify-center">
          <Buttons text="Create your Account" />
        </div>
      </div>
      <img
        src={leftellipse}
        alt="left"
        className="absolute md:top-[10%] top-0 z-[-1] max-sm:w-[41px] max-lg:max-w-[64px] left-0"
      />
      <img
        src={rightellipse}
        alt="right"
        className="absolute md:bottom-0 bottom-[2%] z-[-1] max-sm:w-[41px] max-lg:max-w-[64px] right-0"
      />
    </div>
  );
};

export default Advantages;
