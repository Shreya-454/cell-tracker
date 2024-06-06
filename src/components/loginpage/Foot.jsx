import footerlogo from "../../assets/svg/footerLogo.svg";
import LinKDin from "../../assets/svg/linkDin.svg";
import Insta from "../../assets/svg/insta.svg";
import FaceBook from "../../assets/svg/faceBook.svg";
import Twitter from "../../assets/svg/twitter.svg";
import leftelipse from "../../assets/images/svg/leftAdvantage.svg"
import rightelipse from "../../assets/images/svg/rightAdvantage.svg"

const Foot = () => {
    const  date= new Date();
    const year = date.getFullYear();
  return (
    <div className="pt-[102px] max-md:pt-[58px] z-[1] relative">
      <img
        src={leftelipse}
        alt="ellipse"
        className="absolute top-[-14%] md:block hidden left-0  z-[-1] max-sm:w-[41px] max-lg:max-w-[64px]"
      />
      <img
        src={rightelipse}
        alt="ellipse"
        className="absolute top-[-26%] right-0 md:hidden flex z-[-1] max-sm:w-[41px] max-lg:max-w-[64px]"
      />
      <div className="container max-w-[1140px] px-3">
        <div className="flex flex-row items-center pb-[46px] flex-wrap -mx-3">
          <div className="md:w-1/3 w-full md:justify-start flex justify-center">
            <img
              src={footerlogo}
              alt="footerlogo"
              className=" max-sm:h-[29px] max-sm:w-[211px]"
            />
          </div>
          <div className="md:w-1/3 max-md:my-8 max-md:pt-[6px] w-full">
            <ul className="flex gap-6 justify-center">
              <li>
                <a
                  href=""
                  className="sm:text-base footerlinkhover text-sm text-lightBlack font-normal"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="sm:text-base footerlinkhover text-sm text-lightBlack font-normal"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="sm:text-base footerlinkhover text-sm text-lightBlack font-normal"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 w-full gap-[18px] flex md:justify-end justify-center">
            <a
              href=""
              className="md:w-[40px] hover:shadow-common-shadow2 duration-300 group md:h-[40px] w-[28px] h-[28px] rounded-full border border-darkBlue flex justify-center items-center"
            >
              <img
                src={LinKDin}
                alt="linkdin"
                className="group-hover:scale-110 duration-300 max-md:w-[18px]"
              />
            </a>
            <a
              href=""
              className="md:w-[40px] hover:shadow-common-shadow2 duration-300 group md:h-[40px] w-[28px] h-[28px] rounded-full border border-darkBlue flex justify-center items-center"
            >
              <img
                src={Insta}
                alt="insta"
                className="group-hover:scale-110 duration-300 max-md:w-[18px]"
              />
            </a>
            <a
              href=""
              className="md:w-[40px] hover:shadow-common-shadow2 duration-300 group md:h-[40px] w-[28px] h-[28px] rounded-full border border-darkBlue flex justify-center items-center"
            >
              <img
                src={FaceBook}
                alt="fb"
                className="group-hover:scale-110 duration-300 max-md:w-[18px]"
              />
            </a>
            <a
              href=""
              className="md:w-[40px] group hover:shadow-common-shadow2 duration-300 md:h-[40px] w-[28px] h-[28px] rounded-full border border-darkBlue flex justify-center items-center"
            >
              <img
                src={Twitter}
                alt="twitter"
                className="group-hover:scale-110 duration-300 max-md:w-[18px]"
              />
            </a>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-darkBlue"></div>
        <p className="py-[18px] sm:text-sm text-xs font-normal text-lightBlack text-center">
          © {year} Cell Tracker. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Foot
