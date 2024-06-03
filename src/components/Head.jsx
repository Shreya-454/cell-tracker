import mobile from '../assets/images/headmobile.webp'
import { Help } from './common/Icons'

const Head = () => {
  return (
    <div className='bg-[url(./assets/images/Herobg.webp)] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col'>
      <div className="flex flex-grow items-center">
<div className="container max-w-[1164px] ">
<div className="flex flex-row flex-wrap -mx-3 items-center">
<div className="w-1/2 px-3">
<h1 className=' text-white text-6xxl leading-full font-light max-w-[520px] mb-2'><span className=' font-extrabold'>Find the location</span> of any phone by its number</h1>
<p className=' text-white text-base font-normal mb-6'>Add phones to your account & track them when neededAdd phones to your account & track them when needed</p>
<div className='flex'>

      </div>
</div>
<div className="w-1/2 px-3 relative">
  <img src={mobile} alt="mobile"  className=' -translate-x-16'/>
    <div className=' max-w-[280.07px] p-[18px] bg-[#ffffff] absolute w-full top-[44%] right-[1%] shadow-[0px_0px_24.6px_0px_#00000059] rounded-tl-xl rounded-br-xl
'>
<div className="flex justify-between items-center">
<p className=' text-skyBlue text-2xl leading-lg font-bold'>Need help?</p>
<Help/>
</div>
<p className=' text-darkBlue text-base font-normal max-w-[198px] mb-[14px]'>Get help with technical, account and billing enquiries.</p>
<button className=' w-full bg-darkBlue text-white py-4 rounded '>
Customer Support
</button>
  </div>
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default Head
