import workLine from "../../assets/svg/workLine.svg";
import { HowData } from "../common/Helper";

const Work = () => {
  return (
    <div className="lg:pt-16 md:pt-14 pt-12">
      <div className="container max-w-[1140px] px-3">
        <h2 className="font-light text-center text-darkBlue lg:text-5xl md:text-4xl sm:text-3xl text-2xxl leading-full">
          How it 
          <span className="font-extrabold"> works</span>
        </h2>
        <p className="md:pt-2 pt-3 text-center text-lightBlack  lg:mb-14 md:mb-10 mb-[31px] sm:max-w-[472px] max-w-[278px] mx-auto sm:text-base text-sm font-normal">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-row relative z-[1] justify-center flex-wrap -mx-3">
          <img
            src={workLine}
            alt="workline"
            className="absolute md:left-[24%] sm:left-[42%] max-sm:rotate-90 max-lg:w-[111px] md:top-[16%] top-[28%] sm:top-[8%]"
          />
          <img
            src={workLine}
            alt="workline"
            className="absolute md:right-[24%] sm:top-[48%] top-[68%] max-md:rotate-90 max-lg:w-[111px] md:top-[16%]"
          />
          {HowData.map((data, i) => (
            <div key={i} className="md:w-1/3  sm:w-1/2 w-full">
              <div
                className={`max-md:flex  max-md:justify-center ${
                  i === 2 ? "flex md:justify-end md:mt-0 mt-[111px]" : ""
                } ${i === 1 ? "flex md:justify-center max-sm:mt-[111px]" : ""}`}
              >
                <div className="md:p-[28px_14px_32px_13px] py-[19px] px-[9px] sm:h-[298px]  w-[267px] ">
                  <div className="flex justify-center">
                    <div className="w-[75px] h-[70px] bg-skyBlue flex justify-center items-center">
                      <img src={data.icons} alt="provide" />
                    </div>
                  </div>
                  <h3 className="font-normal sm:text-2xl text-center sm:pt-[14px] pt-6 text-xl text-black leading-6 md:leading-[28.8px]">
                    {data.heading}
                  </h3>
                  <p className="pt-[6px] sm:text-base text-center font-normal text-lightBlack text-sm">
                    {data.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
