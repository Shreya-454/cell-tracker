
const Buttons = (props) => {
  return (

      <button
        className={`${props.name} font-semibold sm:text-base text-sm !leading-lg text-white py-[14px] md:py-4 px-7 max-sm:w-full bg-darkBlue rounded`}
      >
        {props.text}
      </button>
  );
};

export default Buttons
