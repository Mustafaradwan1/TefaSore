import React from 'react';
import { IoSearch } from "react-icons/io5";
import { motion } from 'framer-motion';
import bg from "../../assets/bg2.png";

const HeroSection = () => {
  return (
    <div
      className="h-[65vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container sm:px-0 m-auto h-full flex items-center">
        <div className="text text-white w-full sm:w-[80%] md:w-[50%]">
          <motion.span
            initial={{ y: '-50vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 25,
            }}
            className="md:text-[20px] text-[17px] block"
          >
            تعرَّف على Alibaba.com
          </motion.span>
          
          <motion.h1
            initial={{ x: '-50vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 25,
            }}
            className="md:text-[44px] text-[30px] leading-[50px]"
          >
            منصة التجارة الإلكترونية الرائدة المتخصصة في B2B للتجارة العالمية
          </motion.h1>
          
          <motion.div
            initial={{ y: '50vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              damping: 25,
            }}
            className="HeroSearch relative w-full md:w-[500px] mt-4"
          >
            <input
              type="text"
              className="w-full outline-none text-gray-800 h-[50px] rounded-[50px] px-5 border"
            />
            <button className="flex items-center h-[40px] rounded-[50px] absolute top-[5px] right-[5px] px-5 bg-orange-400">
              <span>
                <IoSearch />
              </span>
              <a href="#">بحث</a>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
