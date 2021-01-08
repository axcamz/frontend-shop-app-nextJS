import React, {useState} from 'react'
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './atoms/Hero';
import { ArrowLeft, ArrowRight } from './atoms/icons/index';


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
              <span className="mx-1 md:-mt-5 -mt-3 rounded-l-full rounded-r-full h-1 w-1 md:h-3 md:w-3 block cursor-pinter transition-all "></span>
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
        <div className="relative py-5 md:py-8">  
            <Slider
                {...settings}
                arrows={false}
                ref={setSliderRef}
            >
                <Hero
                    src="/static/images/banners/hero1.jpg"
                />
                <Hero
                    src="/static/images/banners/hero2.jpg"
                />
                <Hero
                    src="/static/images/banners/hero3.jpg"
                />
            </Slider>  
            <div className="absolute left-3 md:left-16 lg:left-28 top-1/2 transform -translate-y-1/2" onClick={sliderRef?.slickPrev}>
                <ArrowLeft 
                    className="h-9 w-9 text-primary fill-current icon-shadow cursor-pointer"
                />
            </div>
            <div className="absolute right-3 md:right-16 lg:right-28 top-1/2 transform -translate-y-1/2" onClick={sliderRef?.slickNext}>
                <ArrowRight
                    className="h-9 w-9 text-primary filter icon-shadow cursor-pointer"
                />
            </div>
        </div>
    )
}

export default Slick
