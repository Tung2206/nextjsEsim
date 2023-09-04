'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '../../styles/country.module.scss';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';


export default function SearchResults() {
    const router = useRouter();
    const query = router.query?.query;
    const [searchResults, setSearchResults] = useState([]);
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });
    
    useEffect(() => {
        if (query) {
            fetchData(query).then((results) => {
                setSearchResults(results);
            });
        }
    }, [query]);
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
            <section className={styles.section2}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

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
