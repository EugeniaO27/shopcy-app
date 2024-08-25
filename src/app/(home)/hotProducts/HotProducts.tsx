"use client";

import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import Product from "@/components/product/Product";
import { products } from "@/data";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const HotProducts = () => {
  const [active, setActive] = useState("all");
  const [price, setPrice] = useState(10);
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      id: 1,
      title: "All",
      active: "all",
    },
    {
      id: 2,
      title: "Watch",
      active: "watch",
    },
    {
      id: 3,
      title: "Phone",
      active: "phone",
    },
    {
      id: 4,
      title: "Laptop",
      active: "laptop",
    },
    {
      id: 5,
      title: "Headphone",
      active: "headphone",
    },
  ];

  const handleClick = () => {
    setOpen(!open)
  };

  return (
    <section className="py-5">
      <Container>
        <div className="flex justify-between">
          <h2 className="hidden md:block text-3xl mb-2 capitalize ">our hot products</h2>
          <div className="md:hidden">
           <Button type="accent" size="small" handleClick={handleClick}> Filter</Button>
          </div>
          <Link
            className="flex items-center capitalize underline font-bold text-accent-500"
            href="/products">
            all products
            <MdKeyboardDoubleArrowRight fontSize={30} />
          </Link>
        </div>
        <div className="relative flex gap-5 mt-5">
          <div className={`absolute md:static top-0 z-10 transition-all duration-300 ease-in-out flex-1 px-5 py-7 bg-white shadow
            ${open ? "left-0" : "left-[-100%]"}`}>
            <h2 className="text-2xl font-bold opacity-80">Catergories</h2>
            <ul>
              {buttons.map((item) =>(
                <li key={item.id}>
                  <button className={`${
                    active === item.active ? "px-2 text-white bg-orange-300" : ""
                  } w-4/5 mt-3 border-b-2 text-left cursor-pointer`}
                   onClick={() => setActive(item.active)}>
                    {item.title}
                   </button>
                </li>
              ))}
            </ul>
            <h2 className="mt-[15px] text-2xl font-bold opacity-80">Brand</h2>
            <select className="border-2">
              <option value="all">All</option>
              <option value="hp">HP</option>
              <option value="dell">Dell</option>
              <option value="apple">Apple</option>
              <option value="techno">Techno</option>
              <option value="infinix">Infinix</option>
              <option value="samsung">Samsung</option>
            </select>
            <h2 className="mt-[15px] text-2xl font-bold opacity-80">Price</h2>
            <input
             type="range" 
             min={10} 
             max={20000}
             value={price}
             onChange={(e) => setPrice(parseFloat(e.target.value))} 
             className="w-4/5"
            />
            <div className="w-4/5 flex justify-between">
              <span>${price}</span>
              <span>$20,000</span>
            </div>
            <div className="mt-5">
              <Button type="accent" size="big"> 
                Clear filter
              </Button>
            </div>
          </div>
          <div className="w-full md:w-[80%]">
           <div>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination,]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ 
                el: ".swiper-pagination",
                type: "bullets",
               }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              
            >
             {products.map((item) =>(
              <SwiperSlide key={item.id}>
               <Product key={item.id} item={item}  />
              </SwiperSlide>
              ))}
            </Swiper>
           </div>
           <div className="button-swiper">
             <div className="swiper-button-prev"></div>
             <div className="swiper-pagination"></div>
             <div className="swiper-button-next"></div>
           </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HotProducts;
