import React from 'react'
import { Check } from '../common/Icons'
import toplayer from '../../assets/images/companyTopLayer.webp'
import bottomlayer from '../../assets/images/companyBottomLayer.webp'
import Buttons from '../common/Buttons'
const Companies = () => {
  return (
    <div className=' bg-[url(./assets/images/companiesBg.webp)] bg-center bg-cover bg-no-repeat md:py-[222px]  pt-[126px] pb-[111px] relative'>
        <div className=' container max-w-[1164px] sm:px-3 px-6'>
            <h2 className=' text-white lg:text-5xl md:text-3xl text-2xxl leading-full font-light text-center max-sm:leading-xs max-w-[664px] mx-auto lg:mb-[109px] md:mb-20 mb-[65.3px]  '>Join <span className=' font-extrabold'>70,000+ companies</span> doing time tracking the easy way</h2>
            <div className="flex lg:justify-center lg:flex-row flex-col lg:items-end items-center">
                <div className="lg:max-w-[467px] max-w-[527px]  lg:!order-1 !order-2 bg-white px-6 py-[75.5px] md:p-[34px] rounded-lg rounded-bl-none max-lg:rounded-tr-none w-full shadow-common-shadow border-t border-l border-b

border-solid
border-[#03045E33]

">
                    <h3 className='text-darkBlue sm:text-3xxl text-2xl leading-sm mb-[18px]'>Cell Tracker</h3>
                    <p className=' sm:text-base max-sm:leading-md text-sm font-normal text-lightBlack mb-3 ' >Ideal for freelancers and solopreneurs</p>
                    <div className=' flex  gap-[6px] items-center mb-[6px]'>
                        <Check/>
                        <p className=' text-lightBlack sm:text-base max-sm:leading-md text-sm'>1 seat</p>
                    </div>
                    <div className=' flex  gap-[6px] items-center mb-11'>
                        <Check/>
                        <p className=' text-lightBlack sm:text-base max-sm:leading-md text-sm'>2 projects</p>
                    </div>
          <p className=' sm:text-base max-sm:leading-md text-sm font-normal text-lightBlack mb-[27px]'><span className=' md:text-4xxl text-3xl leading-md text-darkBlue'>$0</span> free forever</p>
         <Buttons text="Start your free trial" name="!font-normal  max-md:w-full"/>
                </div>
                <div className="max-w-[527px] lg:mb-0 mb-[42px] lg:!order-2 !order-1 w-full bg-white shadow-common-shadow relative rounded-tl-xl rounded-br-xl lg:-translate-x-6 sm:pt-[60px] md:pt-[70px] px-6 pb-[30px] sm:px-[34px] sm:pb-[34px] border border-solid border-[#03045E1A]
">
    <div className=' flex justify-center max-sm:-translate-y-9'>
        <Buttons text='Most Popular' name=' sm:!text-2xl !text-xl !font-normal !px-[35px] rounded sm:absolute top-[-8%] sm:right-[30%] lg:right-[-6%]'/>
        </div>
     <p className='text-darkBlue font-normal sm:text-3xxl text-2xl leading-sm mb-[18px]'>Cell Tracker <span className=' text-skyBlue font-extrabold'>Pro</span></p>
<p className=' sm:text-base max-sm:leading-md text-sm text-lightBlack font-normal mb-3'>Perfect for teams, startups, and growing businesses.</p>
<div className=' flex gap-[6px] items-center'>
    <Check/>
    <p className=' text-lightBlack sm:text-base max-sm:leading-md text-sm font-normal'>Unlimited seats</p>
</div>
<div className=' flex gap-[6px] items-center mb-11'>
    <Check/>
    <p className=' text-lightBlack sm:text-base max-sm:leading-md text-sm font-normal'>Unlimited projects</p>
</div>
<p className=' text-base text-lightBlack font-normal mb-[27px]'><span className=' md:text-4xxl text-4xl leading-md text-darkBlue'>$10.80</span> per seat/month <span className=' max-sm:block'>(billed annually)</span></p>
<div className="flex lg:flex-row flex-col gap-4 items-center">
<Buttons text="30-Day Free Trial" name="!font-normal max-md:w-full"/>
    <p className=' sm:text-base max-sm:leading-md text-sm text-lightBlack font-normal'>No credit card required.</p>
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
