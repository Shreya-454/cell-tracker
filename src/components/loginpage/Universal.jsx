import rightellipse from "../../assets/images/svg/rightAdvantage.svg"
import { UniversalData } from "../common/Helper";
const Universal = () => {
  return (
    <div className=" lg:py-16 md:py-14 py-12 relative z-[1] mt-3">
      <div className="container max-w-[1140px] px-3">
        <h2 className="font-light text-center text-darkBlue lg:text-5xl md:text-4xl sm:text-3xl text-2xxl leading-full">
          Universal <span className="font-extrabold">Privacy</span>
        </h2>
        <p className="md:pt-2 pt-3 text-center text-lightBlack  lg:mb-[50px] mb-12 sm:max-w-[472px] max-w-[278px] mx-auto sm:text-base text-sm font-normal">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-wrap flex-row -mx-3 mt-14">
          {UniversalData.map((data, i) => (
            <div
              key={i}
              className="lg:w-1/4 sm:w-1/2 w-full  max-lg:mb-[18px] px-2"
            >
              <div class="md:p-[28px_14px_13px_0] 2xl:max-w-[267px] max-md:mx-auto p-[24px_12px_24px_0] h-full rounded bg-white group duration-300 border-lightGrey2 border relative z-[1] after:absolute after:inset-0 after:bg-blueGradient after:rounded after:opacity-0 after:duration-500  hover:after:opacity-100 after:z-[-1]">
                <div className="bg-skyBlue group-hover:bg-white  md:w-[75px] md:h-[70px] w-[61px] h-[57px] flex justify-center items-center">
                  <img
                    src={data.icons}
                    alt="compatible"
                    className="max-md:w-[29px] max-md:h-[29px]"
                  />
                </div>
                <div className="sm:p-[14px_0_0_12px] p-[10px_0_0_12px]">
                  <h3 className="font-normal sm:text-2xl text-xl group-hover:text-white duration-300 leading-6 md:leading-[28.8px] text-black">
                    {data.heading}
                  </h3>
                  <p className="pt-[6px] text-lightBlack group-hover:text-lightWhite duration-300 sm:text-base text-sm font-normal">
                    Fames tincidunt pellentesque nisl blandit at sit.
                    Ullamcorper nisi vestibulum fames libero id.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={rightellipse}
        alt="right"
        className="absolute lg:top-[26%] top-[2%] z-[-1] max-sm:w-[41px] max-lg:max-w-[64px] right-0"
      />
    </div>
  );
};

export default Universal;
