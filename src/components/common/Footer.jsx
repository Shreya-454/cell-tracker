import footerlogo from "../../assets/svg/footerLogo.svg";
import rightellipse from "../../assets/svg/rightAdvantage.svg";

const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="pt-[102px] max-md:pt-14 z-[1] relative">
      <div className="container max-w-[1140px] px-3 max-xl:px-6">
        <div className="flex flex-row items-center pb-[58px] flex-wrap -mx-3">
          <div className="md:w-1/3 px-3 w-full md:justify-start flex justify-center">
            <img
              src={footerlogo}
              alt="footerlogo"
              className="max-sm:w-[211px] max-sm:h-[29px]"
            />
          </div>
          <div className="md:w-1/3 max-md:my-8 max-md:pt-[6px] w-full">
            <ul className="flex gap-6 justify-center">
              {props.link.map((obj, i) => (
                <li key={i}>
                  <a
                    href={obj.path}
                    rel="noopener noreferrer"
                    className="sm:text-base footerlinkhover text-sm text-lightBlack font-normal"
                  >
                    {obj.links}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3 px-3 w-full gap-[18px] flex md:justify-end justify-center">
            {props.icon.map((obj, i) => (
              <div key={i}>
                <a
                  href={obj.path}
                  rel="noopener noreferrer"
                  className="md:w-[40px] group md:h-[40px] hover:shadow-common-shadow2 duration-300 w-[28px] h-[28px] rounded-full border border-darkBlue flex justify-center items-center"
                >
                  <img src={obj.icons} alt="" />
                </a>
              </div>
            ))}
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
};

export default Footer;
