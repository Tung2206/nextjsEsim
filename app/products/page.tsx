'use client'
import React, { Suspense , useEffect, useState } from 'react';
import styles from '../../styles/product.module.scss'
import Link from "next/link"
import ValiditySlider from "@/component/ValiditySlider";
import CreateSlider from '@/component/CreateSlider';
import Image from 'next/image';

async function getdata(title: string) {
  const result = await fetch("http://localhost:3000/api/product?key=" + title);
  return result.json()
}
export default  function Category({ params }: { params: { slug: string } }) {

  const keyword = params.category
  // const data = await getdata(keyword)
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    async function fetchData() {
      const result = await getdata(keyword);
      setData(result);
    }
    fetchData();
  }, [keyword]);
  

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
        <div className="container">
          <div className="row">
           <CreateSlider data={data}/>
          </div>
        </div>
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
                  <table id="example" className="table table-striped table-bordered" cellSpacing="0" width="100%">
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
                                <Image src={productItem?.logo} alt={productItem?.provider} width={35} height={35} />
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
                                  
                                  <div className={styles.nameInfoData}>
                                    Get 10% cashback when signing up!
                                  </div>
                                </div>
                                <div className={styles.linkTableData}>
                                  
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