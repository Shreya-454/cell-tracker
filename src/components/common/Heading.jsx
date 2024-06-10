
const Heading = (props) => {
  return (
    <>
      <h2
        className="font-light text-center text-darkBlue lg:text-5xl md:text-4xl sm:text-3xl text-2xxl !leading-xs sm:!leading-full"
      >
              {props.textLight} <span className="font-extrabold">{ props.textBold}</span>
      </h2>
    </>
  );
}

export default Heading
