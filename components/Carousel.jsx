import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from "next/image";

export default class MultipleItems extends Component {
  render() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
    return (
      <div className="pt-20 xl:w-[95%] w-[85%] mx-auto">
        <h2 className="xl:text-3xl text-2xl xl:ml-20 ml-5 mb-10"> BRAND NEW SUPERCARS </h2>
        <Slider {...settings}>
          <div className="p-4">
            <Image src="/producsHome/600.jpg" width={300} height={300}  alt="brabus 600" />
            <h3 className="font-semibold text-lg pt-4">BRABUS 600</h3>
            <h4>Based on Range Rover P 530</h4>
          </div>
          <div className="p-4">
            <Image src="/producsHome/BRABUS_750.jpg" width={300} height={300}  alt="brabus 750" />
            <h3 className="font-semibold text-lg pt-4">BRABUS 750 BODO BUSCHMANN EDITION</h3>
            <h4>Based on the Mercedes-AMG SL 63</h4>
          </div >
          <div className="p-4">
            <Image src="/producsHome/Brabus911.jpg" width={300} height={300}  alt="brabus 900" />
            <h3 className="font-semibold text-lg pt-4">BRABUS 900 ROCKET R</h3>
            <h4>Based on Porsche 911 Turbo S</h4>
          </div>
          <div className="p-4">
            <Image src="/producsHome/900Superblack.jpg" width={300} height={300}  alt="brabus 900 superblack" />
            <h3 className="font-semibold text-lg pt-4">BRABUS 900 SUPERBLACK</h3>
            <h4>Based on Mercedes-AMG GLS 63</h4>
          </div>
          <div className="p-4">
            <Image src="/producsHome/Brabus_6x6_XLP.jpg" width={300} height={300}  alt="brabus xlp" />
            <h3 className="font-semibold text-lg pt-4">BRABUS XLP 900 6X6 SUPERBLACK</h3>
            <h4>Based on the Mercedes-AMG G 63</h4>
          </div>
          <div className="p-4">
            <Image src="/producsHome/Taycan.jpg" width={300} height={300}  alt="brabus taycan" />
            <h3 className="font-semibold text-lg pt-4">BRABUS FOR PORSCHE TAYCAN</h3>
            <h4>Based on Porsche Taycan Turbo S</h4>
          </div>   
        </Slider>
      </div>
    );
  }
}