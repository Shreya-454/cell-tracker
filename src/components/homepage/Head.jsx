import mobile from '../../assets/images/headmobile.webp'
import { Flag, Help, Locate } from '../common/Icons'
import bottomLayer from '../../assets/images/headBottomLayer.webp'
import NavBar from './NavBar';
import Buttons from '../common/Buttons';

const Head = () => {
  return (
    <div className='bg-[url(./assets/images/Herobg.webp)] bg-cover bg-center bg-no-repeat min-h-[810px] flex flex-col relative z-[1]'>
      <NavBar/>
      <div className="flex sm:flex-grow items-center">
<div className="container max-w-[1164px] sm:px-3 px-6 sm:pt-[63px] pt-[56px] pb-[60px]">
<div className="flex flex-row flex-wrap -mx-3">
<div className="md:w-1/2 w-full px-3 md:mb-0 sm:mb-10 mb-[30.5px] md:pt-20" >
<h1 data-aos="fade-right" className=' text-white lg:text-6xxl md:text-5xl text-3xxl leading-xs md:leading-full font-light mx-auto md:mx-0 max-w-[326px]  sm:max-w-[520px] mb-3 md:mb-2 text-center md:text-start'><span className=' font-extrabold'>Find the location</span> of any phone by its number</h1>
<p data-aos="fade-right"  className=' text-white sm:text-base text-sm leading-md font-normal mb-8 md:mb-6 text-center md:text-start max-w-[285.04px] md:max-w-full sm:max-w-[327px] max-md:mx-auto max-sm:mx-auto'>Add phones to your account & track them when neededAdd phones to your account & track them when needed</p>

<div data-aos="zoom-in" className=" max-lg:mx-auto bg-white rounded sm:h-[55px] h-[51px] flex items-center justify-between ps-2.5 max-w-[448px] mt-6">
              <div className=" flex items-center gap-[7px] ">
                <span>
                 <Flag/>
                </span>
                <select
                  className="outline-none text-sm leading-lg md:text-base"
                  name="number"
                  id="number"
                >
                  <option value="91" className="flex items-center gap-2 ">
                    +91
                  </option>
                  <option value="01" className="flex items-center gap-2 ">
                    +01
                  </option>
                  <option value="92" className="flex items-center gap-2 ">
                    +92
                  </option>
                  <option value="02" className="flex items-center gap-2 ">
                    +02
                  </option>
                  <option value="21" className="flex items-center gap-2 ">
                    +21
                  </option>
                </select>
              </div>
              <input type="number" className="outline-none w-[35%] sm:w-1/2 bg-transparent !appearance-none " />
              <button className=" bg-darkBlue rounded font-semibold max-w-[112px] w-full hover:border-darkBlue group text-sm md:text-base group text-white !leading-lg  h-full px-[22.2px] flex items-center gap-1 hover:text-darkBlue hover:bg-white duration-300 relative border-transparent border-2  hover:border-dark-blue z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-dark-blue hover:after:animate-moveToX">
            <Locate/>
                Locate
              </button>
            </div>
</div>
<div className="md:w-1/2 w-full px-3 relative flex justify-center">
  <img src={mobile} alt="mobile"  className=' sm:-translate-x-16  -translate-x-9' data-aos="fade-left"/>
    <div data-aos="zoom-in-up" className=' lg:max-w-[280.07px] sm:max-w-[231px] max-w-[164px] p-2 md:p-[18px] bg-[#ffffff] absolute w-full md:top-[44%] right-[5%] top-[52%]  md:right-[1%] shadow-[0px_0px_24.6px_0px_#00000059] md:rounded-tl-xl rounded-tl-lg md:rounded-br-xl rounded-br-lg
'>
<div className="flex justify-between items-center">
<p className=' text-skyBlue md:text-2xl text-xl leading-lg font-bold'>Need help?</p>
<Help/>
</div>
<p className=' text-darkBlue sm:text-base text-sm font-normal max-w-[198px] sm:mb-[14px] mb-3'>Get help with technical, account and billing enquiries.</p>
<Buttons text='Customer Support' name='!py-2 rounded lg:text-base text-sm !px-0 w-full  '/>

  </div>
</div>
</div>
</div>
      </div>
      <img src={bottomLayer} alt="layer" className='lg:bottom-[-16%]  bottom-[-4%] w-full absolute z-[-1] max-sm:h-[97px]' />
    </div>
  );
}

export default Head
