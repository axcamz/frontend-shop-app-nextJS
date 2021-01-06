import React, {Component} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './molecule/Hero';

export default class Slick extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: true,
            infinite: true,
            vertical: false,
            verticalSwiping: false,
            // fade: true,
            beforeChange: function(currentSlide, nextSlide) {
              console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
              console.log("after change", currentSlide);
            }
          };
        return (
            <>
                <div className="h-96 lg:px-0 px-3 pt-6 ">
                    <Slider {...settings}>
                        <Hero/>
                        <Hero/>
                    </Slider>
                </div>
            </>
        )
    }
}
