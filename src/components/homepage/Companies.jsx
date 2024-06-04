import React from 'react'
import { Check } from '../common/Icons'
import toplayer from '../../assets/images/companyTopLayer.webp'
import bottomlayer from '../../assets/images/companyBottomLayer.webp'
const Companies = () => {
  return (
    <div className=' bg-[url(./assets/images/companiesBg.webp)] bg-center bg-cover bg-no-repeat py-[222px] relative'>
        <div className=' container max-w-[1164px]'>
            <h2 className=' text-white text-5xl leading-full font-light text-center max-w-[664px] mx-auto mb-[109px]'>Join <span className=' font-extrabold'>70,000+ companies</span> doing time tracking the easy way</h2>
            <div className="flex justify-center items-end">
                <div className="max-w-[467px] bg-white p-[34px] rounded-lg rounded-bl-none w-full shadow-[0px_16px_25.3px_0px_#00000014] border-t border-l border-b

border-solid
border-[#03045E33]

">
                    <h3 className='text-darkBlue text-3xxl leading-sm mb-[18px]'>Cell Tracker</h3>
                    <p className=' text-base font-normal text-lightBlack mb-3'>Ideal for freelancers and solopreneurs</p>
                    <div className=' flex  gap-[6px] items-center mb-[6px]'>
                        <Check/>
                        <p className=' text-lightBlack text-base'>1 seat</p>
                    </div>
                    <div className=' flex  gap-[6px] items-center mb-11'>
                        <Check/>
                        <p className=' text-lightBlack text-base'>2 projects</p>
                    </div>
          <p className=' text-base font-normal text-lightBlack mb-[27px]'><span className=' text-4xxl leading-md text-darkBlue'>$0</span> free forever</p>
          <button className=' bg-darkBlue text-white py-4 px-7 rounded leading-lg'>Start your free trial</button>
                </div>
                <div className="max-w-[527px] w-full bg-white shadow-[0px_16px_25.3px_0px_#00000014] relative rounded-tl-xl rounded-br-xl -translate-x-6 pt-[63px] px-[34px] pb-[34px]
"> <p className='text-darkBlue font-normal text-3xxl leading-sm mb-[18px]'>Cell Tracker <span className=' text-skyBlue font-extrabold'>Pro</span></p>
<p className=' text-base text-lightBlack font-normal mb-3'>Perfect for teams, startups, and growing businesses.</p>
<div className=' flex gap-[6px] items-center'>
    <Check/>
    <p className=' text-lightBlack text-base font-normal'>Unlimited seats</p>
</div>
<div className=' flex gap-[6px] items-center mb-11'>
    <Check/>
    <p className=' text-lightBlack text-base font-normal'>Unlimited projects</p>
</div>
<p className=' text-base text-lightBlack font-normal mb-[27px]'><span className=' text-4xxl leading-md text-darkBlue'>$10.80</span> per seat/month (billed annually)</p>
<div className="flex gap-4 items-center">
    <button className=' text-white bg-darkBlue py-4 px-7 rounded leading-lg'>30-Day Free Trial</button>
    <p className=' text-base text-lightBlack font-normal'>No credit card required.</p>
</div>
<button className=' text-white bg-darkBlue text-2xl leading-lg py-[14px] px-[35px] rounded absolute top-[-8%] right-[-6%]'>Most Popular</button>
</div>
            </div> 
        </div>
        <img src={toplayer} alt="layer1" className=' absolute top-0 w-full' />
        <img src={bottomlayer} alt="layer2" className=' absolute bottom-0 w-full' />
    </div>
  )
}

export default Companies
