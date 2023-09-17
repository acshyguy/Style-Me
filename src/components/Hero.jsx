import React from "react";
// import hero-img from '../icons/Hero-Logo.svg'
import Pix from "../assets/icons/Hero-Logo.svg";
import HeroText from "../assets/icons/Hero-Text.svg";
import GetStartedArrow from "../assets/icons/arrow-button-hero.svg";
import InterswitchLogo from "../assets/icons/InterswitchLogo.svg";
import VerveLogo from "../assets/icons/Verve-logo.svg";
import Quickteller from "../assets/icons/Quickteller-logo.svg";
import Amazon from "../assets/icons/Amazon-logo.svg";
import Jumia from "../assets/icons/Jumia-logo.svg";
import Alibaba from "../assets/icons/Alibaba-logo.svg";

// className="m-auto grid md:grid-flow-col gap-3 justify-betwee justify-center
// className="hero-section bg-[#FFF] w-[1439px] py-4  h-[720px]    px-4 sm:p-6 md:py-10 md:px-8" //For first div
//className="hero-section bg-[#FFF] w-[1439px] py-4  h-[720px]  sm:p-6 md:py-10 md:px-8
// max-w-4xl lg:max-w-5xl lg:grid-cols-2 sp

{
  /* <div class="bg-[#FFF8EB] w-1239 py-4 pt-400  h-[30%] flex items-center justify-around">
        <div className=" flex items-center gap-3 pt-400">
          <div className="">
            <img src={InterswitchLogo} alt="" />
          </div>
          <div className="">
            <img src={VerveLogo} alt="" />
          </div>
          <div>
            <img src={Quickteller} alt="" />
          </div>
          <div>
            <img src={Amazon} alt="" />
          </div>
          <div>
            <img src={Jumia} alt="" />
          </div>
          <div>
            <img src={Alibaba} alt="" />
          </div>
        </div>
      </div> */
}
{
  /* <img src={HeroText} alt="" className="max-w-4xl mx-auto grid grid-cols-20 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2" /> */
}
{
  /* <div className="flex">
      <div className="hero-text">
        <div>
          <h1 className="text-3xl">
            Revolutionize your{" "}
            <span className="text-[#FCA311]">Fashion Game</span> with
            <span className="text-[#FCA311]">
              <br /> StyleMe.
            </span>
          </h1>
          <h6>Upgrade your fashion style wth Stylme and standout</h6>
          <div>
            <button className="text-[#FCA311] bg-[#14213D] px-6 py-2 border border-[#14213D] flex items-center  hover:bg-[#0b0b0b]">
              Get Started
              <img src={GetStartedArrow} alt="" className="gap-[10px]" />
            </button>
          </div>
        </div>
      </div>
      <div className='hero-image  object-cover rounded-lg sm:h-52  loading="lazy"'>
        <img src={Pix} alt="" className="w-1/2" />
      </div>
    </div> */
}

const hero = () => {
  return (
    <div>
      <div className="top my-4 pl-4  flex ">
        <div className="wrapper grid md:grid-flow-col md:gap-6 mx-auto ">
          <div className="text">
            <h1 className="text-4xl my-6 font-extrabold leading-[50px]">
              Revolutionize your <br />
              <span className="text-[#FCA311]">Fashion Game</span> with
              <span className="text-[#FCA311]">
                <br /> StyleMe.
              </span>{" "}
            </h1>
            <h6 className="my-6">
              Upgrade your fashion style wth Stylme and standout
            </h6>
            <button className="text-[#FCA311] bg-[#14213D] px-6 py-2 border border-[#14213D] flex items-center  hover:bg-[#0b0b0b]">
              Get Started <img src={GetStartedArrow} alt="" className="" />
            </button>
          </div>
          <div className="image ">
            <img src={Pix} alt="" className=" md:ml-6 " />
          </div>
        </div>
      </div>

      <div className=" flex items-center gap-3 pt-400 flex-shrink-0 w-1239px h-253px">
        <div className="">
          <img src={InterswitchLogo} alt="" resize />
        </div>
        <div className="">
          <img src={VerveLogo} alt="" resize />
        </div>
        <div>
          <img src={Quickteller} alt="" />
        </div>
        <div>
          <img src={Amazon} alt="" />
        </div>
        <div>
          <img src={Jumia} alt="" />
        </div>
        <div>
          <img src={Alibaba} alt="" />
        </div>
      </div>
    </div>
  );
};

export default hero;
