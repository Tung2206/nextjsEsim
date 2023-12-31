'use client'
import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import styles from '../../styles/country.module.scss';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import Link from "next/link"

export default function SearchResults() {
  const router = useRouter();
  const data = router.query?.query;
  const [searchResults, setSearchResults] = useState([]);
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  useEffect(() => {
    if (data) {
      fetchData(data).then((results) => {
        setSearchResults(results);
      });
    }
  }, [data]);
  console.log(data);
  return (
    <main className='bodySearch'>
      <section className={styles.homeBanner}>
        <div className='container'>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className={styles.homeContent}>
                <h1 className='text-center text-white'>
                  Find the best prepaid eSIM plans for your travel destination
                </h1>
                <form className='position-relative mb-3 ' >
                  <img src="../search.png" alt="search" />
                  <input type="text" />
                </form>
                <p className='text-center text-white'>Search and compare 2000+ data plans from 25+ eSIM providers</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.contentDataTable}>
                <Suspense fallback={<tr>Loading...</tr>}>
                  <table id="example" className="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                      <tr>
                        <th className="text-center">PROVIDER</th>
                        <th>PLAN NAME</th>
                        <th></th>
                        <th>SIZE</th>
                        <th></th>
                        <th>VALIDITY</th>
                        <th>PRICE/GB</th>
                        <th>PRICE</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                  </table>
                </Suspense>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Giả định hàm fetchData để lấy kết quả tìm kiếm từ API hoặc dữ liệu đã có
async function fetchData(query) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${query}`);
  if (!res.ok) {
    throw new Error('Fail Data');
  }
  const data = await res.json();
  return data;
}
