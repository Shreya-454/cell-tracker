
import { AnyWhereFirst } from "../common/Helper";

const AnyOne = () => {
  return (
    <div className="lg:pt-16 md:pt-14 pt-12">
      <div className="container max-w-[1140px] px-3">
        <h2 className="font-light text-center text-darkBlue lg:text-5xl md:text-4xl sm:text-3xl text-2xxl leading-full">
          Find Anyone Anywhere
          <span className="font-extrabold">for Under $1</span>
        </h2>
        <p className="md:pt-2 pt-3 text-center text-lightBlack  lg:mb-8 md:mb-10 mb-[31px] sm:max-w-[472px] max-w-[278px] mx-auto sm:text-base text-sm font-normal">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit rhoncus vestibulum fames libero id.
        </p>
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="w-1/3">
            {AnyWhereFirst.map((data, i) => (
              <div
                key={i}
                className="w-[376px] lg:mt-6 flex justify-center items-center h-[156px] p-[12px_18px_12px_0] border border-lightGrey2 relative z-[1] after:absolute after:inset-0 after:bg-blueGradient after:rounded after:opacity-0 group after:duration-500  hover:after:opacity-100 after:z-[-1]"
              >
                <div className="flex items-center">
                  <div className="w-[75px] h-[70px] group-hover:bg-white duration-300 flex justify-center items-center bg-skyBlue">
                    <img src={data.icons} alt="cellTracker" />
                  </div>
                  <p className="ps-[14px] max-w-[282px] group-hover:text-white duration-300 font-normal text-xl leading-[33.24px] text-black">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnyOne

