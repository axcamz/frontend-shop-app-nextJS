import React, {useState} from 'react'
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './molecules/Hero';
import { ArrowLeft, ArrowRight } from '../public/static/svg';


const Slick = () => {
    const width = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
    };
    const settings = {
        dots: true,
        customPaging: function (i) {
          return (
            <a className="">
              <span className="mx-1 -mt-5 rounded-l-full rounded-r-full h-3 w-3 block cursor-pinter transition-all "></span>
            </a>
          );
        },
        dotsClass: "slick-dots w-max absolute",
        infinite: true,
        speed: 500,
        centerPadding: '100px',
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        responsive:[
                {
                    
                    breakpoint: width.sm,
                    settings: {
                        centerPadding: '12px'
                    }
                },
                {
                    breakpoint: width.md,
                    settings: {
                        centerPadding: '60px'
                    }
                },
                {
                    breakpoint: width.lg,
                    settings: {
                        centerPadding: '100px'
                    }
                }
        ]
    };

    const [sliderRef, setSliderRef] = useState(null);

    return (
        <div className="relative py-5 md:py-8  ">  
            <Slider
                {...settings}
                arrows={false}
                ref={setSliderRef}
            >
                <Hero src="/static/images/hero1.jpg">
                    <span className="lg:text-7xl text-2xl font-bold">30%</span>
                    <span className="text-xl pl-4">Cashback on Your Fisrt Purchase</span>
                </Hero>
                <Hero
                    src="/static/images/hero2.jpg"
                />
                <Hero
                    src="/static/images/hero3.jpg"
                />
            </Slider>  
            <div className="flex md:px-28 lg:px-28 px-4  w-full justify-between absolute top-1/2 transform -translate-y-1/2">
                <div onClick={sliderRef?.slickPrev}>
                    <ArrowLeft 
                        className="h-9 w-9 text-white fill-current icon-shadow cursor-pointer"
                        fill="#fff"
                    />
                </div>
                <div onClick={sliderRef?.slickNext}>
                    <ArrowRight
                        className="h-9 w-9 text-white filter icon-shadow cursor-pointer"
                        fill="#fff"
                    />
                </div>
            </div>
        </div>
    )
}

export default Slick
