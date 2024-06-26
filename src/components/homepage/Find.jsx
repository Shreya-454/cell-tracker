import findMobile from "../../assets/images/findMobile.webp"
import leftellipse from "../../assets/svg/leftAdvantage.svg"
import Buttons from "../common/Buttons"

const Find = () => {
  return (
    <div className=" md:mt-[160px] mt-[273px]  lg:mt-60 pt-2 max-xl:px-6 relative overflow-x-clip">
      <div className="container rounded-xl bg-no-repeat lg:max-h-[391px] bg-cover bg-center max-w-[1140px] bg-[url(./assets/images/Newsletter.webp)] max-sm:px-[30.5px]">
        <div className="flex flex-row flex-wrap -mx-3 lg:max-h-[391px] ">
          <div className=" lg:w-5/12 w-full px-3 flex justify-center lg:max-h-[391px]">
            <img
              src={findMobile}
              alt="mobile" data-aos="fade-right"
              className="min-w-[380px] xl:min-w-[606.73px] sm:min-w-[530px] h-[420px] xl:h-[668px] sm:h-[580px] lg:ml-40 xl:ml-36 ml-4 sm:!-translate-y-24 !-translate-y-36 xl:!-translate-y-36"
            />
          </div>
          <div data-aos="fade-left" className="lg:w-7/12 w-full px-3 lg:py-[98px] max-lg:-mt-36 max-md:-mt-28 max-sm:-mt-40  max-lg:pb-[46px] ">
            <h2 className=" text-white font-light lg:text-5xl md:text-3xl text-2xxl !leading-full max-sm:!leading-xs mb-2 text-center">
              Find your <span className=" font-extrabold">phone</span>
            </h2>
            <p className=" text-white text-center sm:text-base text-sm max-sm:!leading-md font-normal max-w-[402px] mx-auto mb-8">
              Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi
              sit elit rhoncus vestibulum fames libero id.
            </p>
            <div className=" flex justify-center">
              <Buttons
                text="Start Now"
                name="!text-darkBlue !bg-white max-sm:w-full after:!bg-darkBlue hover:!text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={leftellipse}
        alt="right"
        className="absolute md:bottom-[38%] bottom-[2%] md:block hidden z-[-1] max-sm:w-[41px] max-lg:max-w-[64px] left-0"
      />
    </div>
  );
}

export default Find
