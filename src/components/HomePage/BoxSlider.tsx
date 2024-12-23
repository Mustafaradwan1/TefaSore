import React from "react";
import Slider from "react-slick";
import {BoxSliderData, IBoxSliderData} from "../../Dummy/Data"
const BoxSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
      };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
      {BoxSliderData.map((ele:IBoxSliderData) =>(
        <div key={ele.p} className="!w-[150px] flex-col !h-[150px] shadow mb-5 hover:border-orange-600 cursor-pointer rounded-full border-2 !flex justify-center items-center">
            <span><ele.icon/></span>
            <p className="text-center mt-2 text-[13px]">{ele.p}</p>
      </div>
        ))}
      </Slider>
    </div>
  )
  
}

export default BoxSlider





