import React, { useState } from "react";
import { UpArrow } from "./Icons";
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        className=" animate-bounce border-0 flex hover:shadow-common-shadow2 justify-center md:w-[45px] h-[36px] w-[36px] md:h-[45px] bg-darkBlue rounded-full items-center p-2  fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300   hover:shadow-[1px_1px_1px_1px_purple-600] "
        onClick={scrollToTop}
        style={{
          display: visible ? "flex " : "none",
        }}
      >
        <UpArrow />
      </button>
    </div>
  );
};

export default BackToTop;
