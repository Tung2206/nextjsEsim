import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
 
export default function Slider(){
    const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});

    return(
        <div className="main-slider">
            <OwlCarousel
              loop={true}
              items={1}
              responsiveRefreshRate={0}
              autoplay={true}
              autoplayTimeout={7000}
              autoplayHoverPause={true}
              nav={true}
              navText={[
                "<i class='icon-arrow-prev'></i>",
                "<i class='icon-arrow-next'></i>"
              ]}
              dots={false}
              margin={20}
            >
              <div className="item"></div>
              <div className="item"></div>
            </OwlCarousel>  
        </div>
    );
}