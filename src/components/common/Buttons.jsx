
const Buttons = (props) => {
  return (

      <button
        className={`${props.name} font-semibold sm:text-base text-sm !leading-lg text-white py-[14px] md:py-4 px-7 after:absolute  after:top-0 after:bottom-0
         after:left-0 after:right-[100%] hover:text-darkBlue hover:after:right-0 border border-solid border-transparent hover: border-darkBlue duration-300 after:duration-300 after:bg-white relative after:z-[-1] z-[1] overflow-hidden  bg-darkBlue rounded`}
      >
        {props.text}
      </button>
  );
};

export default Buttons
