import React, { useState, useEffect } from "react";
var $ = require('jquery');
import Image from 'next/image';
import ocean from '../public/background-home.png';
import Styles from '../styles/slider.module.scss'

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
import Link from "next/link";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const options = {
  loop: true,
  margin: 30,
  items: 3,
  autoplay: false,
  nav: true, 
  dots: false,
};

export default function CreateSlider({ data }) {

  return (
    <div className={Styles.mainSider}>
      <OwlCarousel className="owl-theme" {...options}>
        {data.data[0]?.listdata.map((productItem, index) => {
          if (productItem.showDataPopular === "Yes") {
            const popularCount = index + 1;
            return (
              <div key={index}>
                <div  className={Styles.itemSlider} >
                  <Link href={`/products/packages/${productItem?.provider}-${index}`}>
                    <div className={Styles.startTop}>
                      <Image src="/images/popular.png" alt="popular" width={24} height={24} />
                      <h5 className="countryPopular">POPULAR #{popularCount}</h5>
                    </div>
                    <div className={Styles.itemCountryText}>
                      <div className={Styles.priceTitle}>
                        {productItem.price}
                        <Image src="/images/prices.png" alt="price" width={24} height={24} />
                      </div>
                      <div className={Styles.dataCountry}>
                        {productItem.data_gb} / {productItem.validity}
                      </div>
                    </div>
                    <div className={Styles.itemCountryLogo}>
                      <Image src={productItem.logo}  alt={productItem.provider}  width={35} height={35}/>
                        <div className={Styles.titleLogo}>
                          <h3>{productItem.provider}</h3>
                        </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </OwlCarousel>

    </div>
  );
}