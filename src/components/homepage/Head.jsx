import mobile from '../../assets/images/headmobile.webp'
import { Help } from '../common/Icons'
import bottomLayer from '../../assets/images/headBottomLayer.webp'
import NavBar from './NavBar';

const Head = () => {
  return (
    <div className='bg-[url(./assets/images/Herobg.webp)] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col relative'>
      <NavBar/>
      <div className="flex sm:flex-grow items-center">
<div className="container max-w-[1164px] sm:px-3 px-6 sm:pt-[63px] py-[56px]">
<div className="flex flex-row flex-wrap -mx-3 items-center">
<div className="md:w-1/2 w-full px-3">
<h1 className=' text-white lg:text-6xxl md:text-5xl text-3xxl leading-full font-light mx-auto md:mx-0 max-w-[520px] mb-2 text-center md:text-start'><span className=' font-extrabold'>Find the location</span> of any phone by its number</h1>
<p className=' text-white md:text-base text-sm font-normal mb-6 text-center md:text-start'>Add phones to your account & track them when neededAdd phones to your account & track them when needed</p>
<div className='flex'>

      </div>
</div>
<div className="md:w-1/2 w-full px-3 relative flex justify-center">
  <img src={mobile} alt="mobile"  className=' sm:-translate-x-16  -translate-x-9'/>
    <div className=' lg:max-w-[280.07px] sm:max-w-[231px] max-w-[164px] p-2 md:p-[18px] bg-[#ffffff] absolute w-full md:top-[44%] right-[5%] top-[52%]  md:right-[1%] shadow-[0px_0px_24.6px_0px_#00000059] md:rounded-tl-xl rounded-tl-lg md:rounded-br-xl rounded-br-lg
'>
<div className="flex justify-between items-center">
<p className=' text-skyBlue lg:text-2xl text-xl leading-lg font-bold'>Need help?</p>
<Help/>
</div>
<p className=' text-darkBlue md:text-base text-sm font-normal max-w-[198px] sm:mb-[14px] mb-3'>Get help with technical, account and billing enquiries.</p>
<button className=' w-full bg-darkBlue text-white md:py-4 py-2 rounded lg:text-base text-sm '>
Customer Support
</button>
  </div>
</div>
</div>
</div>
      </div>
      <img src={bottomLayer} alt="layer" className='lg:bottom-[-11%] md:bottom-0 sm:bottom-[-4%] bottom-0 w-full absolute' />
    </div>
  );
}

export default Head
