import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-32">
      <div className="container h-72 flex justify-between items-center text-white bg-secondary-500">
        <div className="flex flex-1 md:flex-none justify-between md:justify-start items-center gap-5">
          <Image
            width={100}
            height={200}
            src="/assets/homeGraphic1.png"
            alt="Banner yellow image"
          />
          <p className="block md:hidden lg:block uppercase text-xl md:text-3xl">
            <span className="text-pink-500">Hot</span> sales <br />
            week
          </p>
        </div>
        <div className="relative w-52 h-52 rounded-full hidden md:flex bg-white justify-center items-center
          before:content-[' '] before:absolute before:top-[8px] before:right-[8px] before:bottom-[8px] before:left-[8px] before:rounded-full
           before:border-4 before:border-dashed before:border-black">
            <p className="uppercase text-3xl font-bold opacity-80 text-black">
              50% <br />
              off
            </p>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <div className="hidden lg:block text-3xl">
            <p>A NEW <span className="text-pink-500">GREAT LOOK</span></p>
            <p className="text-[#867EBC]">FOR NEW SEASON</p>
          </div>
          <Image
           width={100}
           height={200}
           src="/assets/homeGraphic3.png"
           alt="Banner black image"
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;
