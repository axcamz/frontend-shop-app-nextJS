import CardProduct from "./atoms/CardProduct"
import Slide from 'react-slick'
import {useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowLeft, ArrowNarrowRight, ArrowRight } from "../public/static/svg";


const Products = () => {
    const width = {
        xs: 520,
        sm: 640,
        md: 768,
        lg: 1024,
    };
    const settings = {
        dots: false,
        dotsClass: "slick-dots w-max absolute",
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        responsive:[
                {
                    
                    breakpoint: width.xs,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    
                    breakpoint: width.sm,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: width.md,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: width.lg,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                }
        ]
    };  

    const [slideRef, setSlideRef] = useState(null)
    return (
        <div className="lg:container lg:mx-auto lg:px-0 px-3 w-full relative mt-4 overflow-hidden">
            <div className="flex text-semiblack justify-between items-center">
                <h1 className="md:text-3xl font-semibold text-xl font-poppins">Best Products</h1>
                <a href="" className="group font-poppins font-semibold text-sm lg:text-lg flex items-center">
                    See all Products
                    <ArrowNarrowRight className="h-5 ml-6 group-hover:text-primary"/>
                </a>
            </div>
            <Slider infinite={false}  {...settings} ref={setSlideRef}>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </Slider>
            <div className="absolute hidden lg:block top-1/2 transform -left-1 -translate-y-1/2 cursor-pointer" onClick={slideRef?.slickPrev}>
                <ArrowLeft className="h-6 lg:h-10 text-primary"/>
            </div>
            <div className="absolute hidden lg:block top-1/2 transform -right-1 -translate-y-1/2 cursor-pointer" onClick={slideRef?.slickNext}>
                <ArrowRight className="h-6 lg:h-10 text-primary"/>
            </div>
        </div>
    )
}

export default Products
