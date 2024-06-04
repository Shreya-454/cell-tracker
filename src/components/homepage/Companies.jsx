import React from 'react'
import { Check } from '../common/Icons'
import toplayer from '../../assets/images/companyTopLayer.webp'
import bottomlayer from '../../assets/images/companyBottomLayer.webp'
const Companies = () => {
  return (
    <div className=' bg-[url(./assets/images/companiesBg.webp)] bg-center bg-cover bg-no-repeat md:py-[222px]  pt-[126px] pb-[111px] relative'>
        <div className=' container max-w-[1164px] sm:px-3 px-6'>
            <h2 className=' text-white lg:text-5xl md:text-3xl text-2xxl leading-full font-light text-center max-w-[664px] mx-auto lg:mb-[109px] md:mb-20 mb-[65.3px]  '>Join <span className=' font-extrabold'>70,000+ companies</span> doing time tracking the easy way</h2>
            <div className="flex lg:justify-center lg:flex-row flex-col lg:items-end items-center">
                <div className="lg:max-w-[467px] max-w-[527px]  lg:!order-1 !order-2 bg-white px-6 py-[75.5px] md:p-[34px] rounded-lg rounded-bl-none max-lg:rounded-tr-none w-full shadow-[0px_16px_25.3px_0px_#00000014] border-t border-l border-b

border-solid
border-[#03045E33]

">
                    <h3 className='text-darkBlue md:text-3xxl text-2xl leading-sm mb-[18px]'>Cell Tracker</h3>
                    <p className=' md:text-base text-sm font-normal text-lightBlack mb-3'>Ideal for freelancers and solopreneurs</p>
                    <div className=' flex  gap-[6px] items-center mb-[6px]'>
                        <Check/>
                        <p className=' text-lightBlack md:text-base text-sm'>1 seat</p>
                    </div>
                    <div className=' flex  gap-[6px] items-center mb-11'>
                        <Check/>
                        <p className=' text-lightBlack md:text-base text-sm'>2 projects</p>
                    </div>
          <p className=' md:text-base text-sm font-normal text-lightBlack mb-[27px]'><span className=' md:text-4xxl text-3xl leading-md text-darkBlue'>$0</span> free forever</p>
          <button className=' bg-darkBlue text-white py-[14px] md:py-4 px-7 rounded leading-lg md:text-base text-sm  max-sm:w-full'>Start your free trial</button>
                </div>
                <div className="max-w-[527px] lg:mb-0 mb-[42px] lg:!order-2 !order-1 w-full bg-white shadow-[0px_16px_25.3px_0px_#00000014] relative rounded-tl-xl rounded-br-xl lg:-translate-x-6 sm:pt-[60px] md:pt-[76px] px-6 pb-[30px] sm:px-[34px] sm:pb-[34px]
">
    <div className=' flex justify-center max-sm:-translate-y-9'><button className=' text-white bg-darkBlue text-2xl leading-lg py-[14px] px-[35px] rounded sm:absolute top-[-8%] sm:right-[30%] lg:right-[-6%]'>Most Popular</button></div>
     <p className='text-darkBlue font-normal md:text-3xxl text-2xl leading-sm mb-[18px]'>Cell Tracker <span className=' text-skyBlue font-extrabold'>Pro</span></p>
<p className=' md:text-base text-sm text-lightBlack font-normal mb-3'>Perfect for teams, startups, and growing businesses.</p>
<div className=' flex gap-[6px] items-center'>
    <Check/>
    <p className=' text-lightBlack md:text-base text-sm font-normal'>Unlimited seats</p>
</div>
<div className=' flex gap-[6px] items-center mb-11'>
    <Check/>
    <p className=' text-lightBlack md:text-base text-sm font-normal'>Unlimited projects</p>
</div>
<p className=' text-base text-lightBlack font-normal mb-[27px]'><span className=' md:text-4xxl text-4xl leading-md text-darkBlue'>$10.80</span> per seat/month <span className=' max-sm:block'>(billed annually)</span></p>
<div className="flex lg:flex-row flex-col gap-4 items-center">
    <button className=' text-white bg-darkBlue py-[14px] md:py-4 px-7 rounded leading-lg md:text-base text-sm max-sm:w-full '>30-Day Free Trial</button>
    <p className=' md:text-base text-sm text-lightBlack font-normal'>No credit card required.</p>
</div>
</div>
            </div> 
        </div>
        <img src={toplayer} alt="layer1" className=' absolute top-0 w-full max-sm:h-[60px]' />
        <img src={bottomlayer} alt="layer2" className=' absolute bottom-0 w-full max-sm:h-[60px]' />
    </div>
  )
}

export default Companies
