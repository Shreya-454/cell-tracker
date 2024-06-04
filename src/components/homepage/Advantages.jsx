
import { AdvantageData } from "../common/Helper";

const Advantages = () => {
  return (
    <div className="pt-4 relative z-[1]">
      <div className="container max-w-[1140px] mx-auto px-6">
        <h2 className="font-light text-center text-darkBlue lg:text-5xl md:text-4xl sm:text-3xl text-2xxl leading-full">
          Advantages of <span className="font-extrabold">Celltracker</span>
        </h2>
        <p className="md:pt-2 pt-3 text-center text-lightBlack  lg:mb-[50px] mb-12 sm:max-w-[472px] max-w-[278px] mx-auto sm:text-base text-sm font-normal">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-wrap pb-16 flex-row -mx-3 justify-center">
          {AdvantageData.map((obj, i) => (
            <div key={i} className="xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full xl:mt-2 mt-[18px] px-3">
              <div className={`p-4 xl:h-[253px] md:h-[236px] sm:h-[200px] h-[184px] hover:shadow-advantageShadow hover:border-darkBlue duration-300 w-full rounded-xl border-2 border-lightGrey ${i === 1 || i === 3 ? "xl:mt-[23px]":""}`}>
                <img src={obj.icons} alt="instant" />
                <h3 className="mt-1 text-darkBlue font-normal leading-sm sm:text-2xl text-xl">
                  {obj.title}
                </h3>
                <p className="pt-[6px] xl:max-w-[231px] font-normal sm:text-base text-sm text-lightBlack">
                  {obj.dec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
