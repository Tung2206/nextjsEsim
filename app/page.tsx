'use client'

import styles from '../styles/home.module.scss';
import { Suspense, useState, useEffect } from 'react'
import Link from 'next/link';
import { AutosuggestComponent } from './lib/Autosuggest';
import { useData} from './lib/api';


export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await useData();
      setData(result);
    }

    fetchData();
  }, []);
  console.log(data);

  return (
    <main className='body-home'>
      <section className={styles.homeBanner}>
        <div className='container'>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className={styles.homeContent}>
                <h1 className='text-center text-white'>
                  Find the best prepaid eSIM plans for your travel destination
                </h1>
                <AutosuggestComponent data={data && data.data} />
                <p className='text-center text-white'>Search and compare 2000+ data plans from 25+ eSIM providers</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className={styles.listPopular}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2>Popular Destinations</h2>
              <div className={styles.listCountries}>
              {data && data.data && data.data.map((item) => (
                  <Link href={`/products/?key=${item.id}`} key={item.id} passHref>
                    <div className={styles.itemCountries}>
                      <img src={item.country_image_url} alt={item.title} />
                      <h3>{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
