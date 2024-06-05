import footerlogo from "../../assets/svg/footerLogo.svg";
import LinKDin from "../../assets/svg/linkDin.svg";
import Insta from "../../assets/svg/insta.svg";
import FaceBook from "../../assets/svg/faceBook.svg";
import Twitter from "../../assets/svg/twitter.svg";
import rightellipse from "../../assets/images/svg/rightAdvantage.svg";

const Footer = () => {
    const  date= new Date();
    const year = date.getFullYear();
  return (
    <div className="pt-32 max-md:py-14 z-[1] relative">
      <div className="container max-w-[1140px] px-3">
        <div className="flex flex-row items-center pb-12 flex-wrap -mx-3">
          <div className="md:w-1/3 w-full md:justify-start flex justify-center">
            <img src={footerlogo} alt="footerlogo" />
          </div>
          <div className="md:w-1/3 max-md:my-8 max-md:pt-[6px] w-full">
            <ul className="flex gap-6 justify-center">
              <li>
                <a
                  href=""
                  className="sm:text-base footerlinkhover text-sm text-lightBlack font-normal"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="sm:text-base footerlinkhover text-sm text-lightBlack font-normal"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="sm:text-base footerlinkhover text-sm text-lightBlack font-normal"
                >
                  Found Phone
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 w-full gap-[18px] flex md:justify-end justify-center">
            <a
              href=""
              className="md:w-[40px] group md:h-[40px] w-[28px] h-[28px] rounded-full border border-darkBlue flex justify-center items-center"
            >
              <img
                src={LinKDin}
                alt="linkdin"
                className="group-hover:scale-110 duration-300"
              />
            </a>
            <a
              href=""
              className="md:w-[40px] group md:h-[40px] w-[28px] h-[28px] rounded-full border border-darkBlue flex justify-center items-center"
            >
              <img
                src={Insta}
                alt="insta"
                className="group-hover:scale-110 duration-300"
              />
            </a>
            <a
              href=""
              className="md:w-[40px] group md:h-[40px] w-[28px] h-[28px] rounded-full border border-darkBlue flex justify-center items-center"
            >
              <img
                src={FaceBook}
                alt="fb"
                className="group-hover:scale-110 duration-300"
              />
            </a>
            <a
              href=""
              className="md:w-[40px] group md:h-[40px] w-[28px] h-[28px] rounded-full border border-darkBlue flex justify-center items-center"
            >
              <img
                src={Twitter}
                alt="twitter"
                className="group-hover:scale-110 duration-300"
              />
            </a>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-darkBlue"></div>
        <p className="py-[18px] sm:text-sm text-xs font-normal text-lightBlack text-center">
          © {year} Cell Tracker. All Rights Reserved.
        </p>
      </div>
      <img
        src={rightellipse}
        alt="right"
        className="absolute md:bottom-[5%] bottom-[22%] z-[-1] max-sm:w-[41px] max-lg:max-w-[64px] right-0"
      />
    </div>
  );
}

export default Footer
