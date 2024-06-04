import React from 'react'
import { Arrows, Card, Circle, EmailIcon, Home, Location, Money, Private, Protect, Track } from '../common/Icons'
import visa from '../../assets/svg/visa.svg'
import mastercard from '../../assets/svg/Mastercard.svg'

const Account = () => {
  return (
    <div className=' pt-[98px]'>
      <div className="container max-w-[1164px]">
<h2 className=' text-5xl text-darkBlue font-light leading-full capitalize text-center mb-2'>
Create your <span className=' font-extrabold'>account</span>
</h2>
<p className=' text-base text-center text-lightBlack pb-[72px]'>Join now and protect your family's phones</p>
<div className="flex flex-row flex-wrap -mx-3">
<div className="w-5/12 px-3">
<h3 className=' text-3xxl leading-sm text-darkBlue font-light mb-6'>Get a <span className=' font-extrabold'>24 hour</span> trial!</h3>
<div className='flex gap-2 items-center mb-[11px]'>
    <div className=" animate-wiggle bg-lightBlue w-12 h-10 flex justify-center items-center">
      <Location/>
    </div>
    <p className=' text-base text-lightBlack font-normal'>Unlimited location searches</p>
</div>
<div className='flex gap-2 items-center mb-[11px]'>
    <div className=" animate-wiggle1 bg-lightBlue w-12 h-10 flex justify-center items-center">
   <Track/>
    </div>
    <p className=' text-base text-lightBlack font-normal'>Track up to 5 phones</p>
</div>
<div className='flex gap-2 items-center mb-[11px]'>
    <div className=" animate-wiggle2 bg-lightBlue w-12 h-10 flex justify-center items-center">
   <Arrows/>
    </div>
    <p className=' text-base text-lightBlack font-normal'>Multiple ways to locate a phone</p>
</div>
<div className='flex gap-2 items-center mb-[11px]'>
    <div className=" animate-wiggle3 bg-lightBlue w-12 h-10 flex justify-center items-center">
  <Protect/>
    </div>
    <p className=' text-base text-lightBlack font-normal'>Protect your family</p>
</div>
<div className='flex gap-2 items-center mb-[11px]'>
    <div className=" animate-wiggle bg-lightBlue w-12 h-10 flex justify-center items-center">
<Money/>
    </div>
    <p className=' text-base text-lightBlack font-normal'>14 day money back guarantee</p>
</div>
<div className='flex gap-2 items-center mb-10'>
    <div className=" animate-wiggle1 bg-lightBlue w-12 h-10 flex justify-center items-center">
<Private/>
    </div>
    <p className=' text-base text-lightBlack font-normal'>Private & confidential</p>
</div>
<div className=' max-w-[424px] w-full shadow-[0px_0px_9.5px_0px_#00000014] p-[18px]
'>
<p className=' text-base text-center text-lightBlack font-normal'>Terms: Users must be 16 or over. Pricing options are shown on the payment page. Create an account to start a 24 hour trial with full access to all our tools. The service can be cancelled by the user at any time from within their account. <span className=' text-skyBlue'>View full terms.</span></p>
</div>
</div>
<div className="w-7/12 px-3">
<div className='shadow-[0px_16px_25.3px_0px_#00000014]'>
    <div className="max-w-[679px] w-full shadow-[0px_0px_11.3px_0px_#00B5D81A]  border border-solid border-[#03045E1A] rounded-xl overflow-hidden
    ">
        <div className="flex justify-between items-center px-5 py-[15px] bg-darkBlue">
            <div className=' flex  gap-3 items-center'><Circle/>
            <p className=' text-white text-3xxl leading-sm'>Debit/Credit Card</p></div>
            <div className="flex gap-[34px] items-center">
                <img src={visa} alt="visa" />
                <div className='flex flex-col items-center'>
<img src={mastercard} alt="card" />
<p className=' text-white'>mastercard</p>
                </div>
            </div>
        </div>
        <div className=' px-6 pt-[30px] pb-9'>
<form>
    <label htmlFor="address" className=' text-darkBlue text-base'>
    Your Address
    </label>
    <div className=' bg-[#FAFAFA]  mt-2 border  border-solid border-[#03045E0F] rounded flex overflow-hidden h-[52px] mb-1'>
<div className=' bg-[#EDEDED] w-12 h-full flex justify-center items-center '>
    <Home/>
</div>
<input type="text" id='address' placeholder='Address Line 1'  className=' text-darkBlue w-full p-[14px] focus:outline-none placeholder:text-darkBlue text-base placeholder:text-base ' />
    </div>
    <p className=' text-grey text-base font-normal mb-5'>Our enter address manually</p>
    <label htmlFor="email" className=' text-darkBlue text-base '>Email Address</label>
    <div className=' bg-[#FAFAFA] mt-2 border border-solid border-[#03045E0F] rounded flex overflow-hidden h-[52px] mb-5'>
<div className=' bg-[#EDEDED] w-12 h-full flex justify-center items-center '>
   <EmailIcon/>
</div>
<input type="text" id='email' placeholder='Email Address'  className=' text-darkBlue w-full p-[14px] focus:outline-none placeholder:text-darkBlue text-base placeholder:text-base ' />
    </div>
    <label htmlFor="card" className=' text-darkBlue text-base '>Card Number (Visa or Mastercard)</label>
    <div className=' bg-[#FAFAFA] mt-2 border border-solid border-[#03045E0F] rounded flex overflow-hidden h-[52px] mb-5'>
<div className=' bg-[#EDEDED] w-12 h-full flex justify-center items-center '>
<Card/>
</div>
<input type="text" id='card' placeholder='Valid Card Number'  className=' text-darkBlue w-full p-[14px] focus:outline-none placeholder:text-darkBlue text-base placeholder:text-base ' />
    </div>
    <div className=' flex w-full'>
        <div className="w-1/2">
            <label htmlFor="date" className=' text-darkBlue text-base '>
            Expiry Date
            </label> <div className=' bg-[#FAFAFA] mt-2 border border-solid border-[#03045E0F] rounded flex overflow-hidden h-[52px] mb-5'>
<div className=' bg-[#EDEDED] max-w-[48px] w-full h-full flex justify-center items-center '>
<Card/>
</div>
<input type="text" id='card' placeholder='Valid Card Number'  className=' text-darkBlue w-full p-[14px] focus:outline-none placeholder:text-darkBlue text-base placeholder:text-base ' />
    </div>

        </div>
    </div>
</form>
        </div>
    </div>
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default Account
