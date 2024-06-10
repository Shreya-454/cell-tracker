import React from 'react'

const CommonPara = (props) => {
  return (
    <>
      <p className="md:pt-2 pt-3 text-center text-lightBlack  max-sm:!leading-md lg:mb-[50px] mb-[42px] sm:max-w-[472px] max-w-[278px] mx-auto sm:text-base text-sm font-normal">
        {props.text}
      </p>
    </>
  );
}

export default CommonPara
