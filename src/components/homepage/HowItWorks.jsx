import workMobile from "../../assets/images/workMobile.webp";
import locate from "../../assets/svg/locate.svg";
import { WorkData } from "../common/Helper";
const HowItWorks = () => {
  return (
    <div className=" pt-14 relative z-1">
      <div className="container max-w-[1140px] mx-auto sm:px-3 px-6">
        <h2 className="font-light text-center text-darkBlue lg:text-5xl md:text-4xl sm:text-3xl text-2xxl leading-full">
          How it <span className="font-extrabold">works</span>
        </h2>
        <p className="md:pt-2 pt-3 mb-8 text-center text-lightBlack sm:max-w-[472px] max-w-[278px] mx-auto sm:text-base text-sm font-normal">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex items-center flex-row flex-wrap -mx-3">
          <div className="lg:w-1/2 flex justify-center w-full px-3">
            <img
              src={workMobile}
              alt="workmobile"
              className=""
            />
          </div>
          <div className="lg:w-1/2 w-full px-3">
            {WorkData.map((obj, i) => (
              <div
                key={i}
                className="sm:p-5 p-4 mb-[18px] rounded-xl max-sm:h-[327px] mx-auto lg:mt-0 mt-8 border shadow-common-shadow max-w-[536px] border-lightGrey"
              >
                <img src={obj.icons} alt="locate" />
                <h3 className="pt-4 font-normal sm:text-2xl text-xl mb-[6px] text-darkBlue leading-sm">
                  {obj.heading}
                </h3>
                <p className="font-normal lg:max-w-[496px] max-sm:leading-[21px] max-sm:max-w-[289px] text-lightBlack sm:text-base text-sm">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
