'use client'
import React, { Suspense , useEffect, useState } from 'react';
import styles from '../../styles/product.module.scss'
import Link from "next/link"
import ValiditySlider from "@/component/ValiditySlider";
import { useSearchParams } from 'next/navigation';
import axios from "axios"
export default  async function Category({ params }: { params: { slug: string } }) {
 
  const searchParams = useSearchParams();
  const keyword =  searchParams.key;

  // const data = await getdata(keyword)
  const [data, setData] = useState({ data: [] });
  console.log("data", data);
  useEffect(() => {
    async function fetchData() {
       const result = await axios.get("http://localhost:3000/api/product?key=vietnam");
     
      console.log("aaaa",result)
    }
    fetchData();
  }, []);
  

  return (
    <main>
      <section className={styles.homeBanner}>
        <div className='container'>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className={styles.homeContent}>
                <h1 className='text-center text-white'>
                  Find the best prepaid eSIM plans for your travel destination 
                </h1>
                {/* <AutosuggestComponent data={data} /> */}
                <p className='text-center text-white'>Search and compare 2000+ data plans from 25+ eSIM providers</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className={styles.section1}>

      </section>
      <section className={styles.section2}>
        <div className={styles.filterEsim}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4 total-esim">
                <p className="providers">
                  <strong> 33 eSIM</strong> providers
                </p>
                <p className="prepaid">
                  <strong>470 eSIM</strong> prepaid data plans
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-2 date-esim">
                <div className={styles.sliderLabels}>
                  <ValiditySlider 
                     initialMin={2500}
                     initialMax={7500}
                     min={0}
                     max={10000}
                     step={100}
                     priceCap={1000}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-5 list-services-esim">

              </div>
              <div className="col-sm-12 col-md-6 col-lg-1 filter-btn-esim">

              </div>
              <div className="col-sm-12 search-list-esim-mobie">
                <div className="seclect-search esim">

                </div>
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
                      {(data.data[0]?.listdata || []).map((productItem: any, index: number) => (
                        <tr key={index}>
                          <td className={styles.titleBrand}>
                            <Link href={`/products/?data=${productItem?.id}`} passHref>
                              <div className={styles.listData}>
                                <img src={productItem?.logo} alt={productItem?.provider} />
                                {productItem?.provider}
                              </div>
                            </Link>
                          </td>
                          <td className={styles.planeBrand}>
                            <Link href={`/products/packages/${productItem?.provider}-${index}`} passHref>
                              <div className={styles.listData}>
                                <p>{productItem?.plan_name}</p>
                              </div>
                            </Link>
                          </td>
                          <td className={styles.infoBrand}>

                          </td>
                          <td className={styles.sizeBrand}>
                            <Link href={`/products/packages/${productItem?.provider}-${index}`} passHref>
                              <div className={styles.listData}>
                                <strong>{productItem?.size}</strong>
                              </div>
                            </Link>
                          </td>
                          <td className="infomation2-brand">
                            <Link href={`/products/packages/${productItem?.provider}-${index}`} passHref>
                              <div className={styles.listData}>
                                <div className={styles.infoTableData}>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#73D13D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 8H12.0094V8.00938H12V8Z" stroke="#73D13D" stroke-width="2.25" stroke-linejoin="round"></path>
                                    <path d="M12 12V16" stroke="#73D13D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                  <div className={styles.nameInfoData}>
                                    <span> 1 GB</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="validity-brand">
                            <Link href={`/products/packages/${productItem?.provider}-${index}`} passHref>
                              <div className={styles.listData}>
                                <strong>{productItem?.validity}</strong>
                              </div>
                            </Link>
                          </td>
                          <td className="price-gb-brand">
                            <Link href={`/products/packages/${productItem?.provider}-${index}`} passHref>
                              <div className={styles.listData}>
                                {productItem?.price_gb}
                              </div>
                            </Link>
                          </td>
                          <td className="price-brand">
                            <Link href={`/products/packages/${productItem?.provider}-${index}`} passHref>
                              <div className={styles.listData}>
                                <strong>{productItem?.price}</strong>

                              </div>
                            </Link>
                          </td>
                          <td className="data-link">
                            <Link href={`/products/packages/${productItem?.provider}-${index}`} passHref>
                              <div className={styles.listData}>
                                <div className={styles.infoTableData}>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#73D13D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M12 8H12.0094V8.00938H12V8Z" stroke="#73D13D" stroke-width="2.25" stroke-linejoin="round"></path>
                                    <path d="M12 12V16" stroke="#73D13D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                  <div className={styles.nameInfoData}>
                                    Get 10% cashback when signing up!
                                  </div>
                                </div>
                                <div className={styles.linkTableData}>
                                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35147 24.642C8.8201 25.1193 9.5799 25.1193 10.0485 24.642L19.6485 14.8642C20.1172 14.3869 20.1172 13.6131 19.6485 13.1358L10.0485 3.35798C9.5799 2.88067 8.8201 2.88067 8.35148 3.35798C7.88285 3.83529 7.88285 4.60915 8.35148 5.08646L17.1029 14L8.35147 22.9135C7.88284 23.3908 7.88284 24.1647 8.35147 24.642Z" fill="#389E0D"></path>
                                  </svg>
                                </div>
                              </div>
                            </Link>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </Suspense>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}