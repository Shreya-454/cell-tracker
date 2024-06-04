
const Buttons = (props) => {
  return (

      <button
        className={`${props.name} font-semibold sm:text-base text-sm leading-[25.59px] text-white py-4 px-7 max-sm:w-full bg-darkBlue rounded`}
      >
        {props.text}
      </button>
  );
};

export default Buttons
