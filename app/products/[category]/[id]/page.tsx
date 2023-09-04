'use client'
import CreatModal from "@/component/CreateModal";
import Styles from "../../../../styles/single.module.scss"
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button";
import BreadCrumbs from "@/component/BreadCrumbs";


async function getdata(title: string) {
    const result = await fetch("http://localhost:3000/api/product/");
    return result.json()
}
export default function SingleProducts({ params }: { params: { slug: string } }) {
    const keyword = params.category;
    const [data, setData] = useState<any>(null);
    const [showModalCreate, setshowModalCreate] = useState<boolean>(false);
    const [selectedPlanDetails, setSelectedPlanDetails] = useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedData = await getdata(keyword);
                setData(fetchedData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [keyword]);

    if (!data) {
        return <div>Loading...</div>;
    }
    const singleData = data.data[0]['listdata'][0]['single_data'][0];
    const plans = singleData['list_single_data_plans'];
    const plan_details = plans[0]['plan_details'];
    const breadCrumbs = [
        { name: "Home", url: "/" },
        {
          name: `${singleData?.nameSingleData?.substring(0, 100)}`,
          url: `/products/${singleData?.nameSingleData}`,
        },
      ];

    return (
        <main>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className={Styles.singleBlog}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={Styles.topBlog}>
                                <div className={Styles.logo}>
                                    <img src={data.data[0]['listdata'][0].logo}
                                        width={125}
                                        height={125}
                                        alt={data.data[0]['listdata'][0]['single_data'][0].nameSingleData} />
                                    <h2 className={Styles.titleEsim}>{data.data[0]['listdata'][0]['single_data'][0].nameSingleData}</h2>
                                </div>
                                <div className={Styles.blogDescription}>
                                    <div className={Styles.description}>
                                        {singleData.description}
                                    </div>
                                    <div className={Styles.linkWeb}>
                                        <Link href={singleData.link_website}>
                                            Official Website
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.75 4.5C6.15326 4.5 5.58097 4.73705 5.15901 5.15901C4.73705 5.58097 4.5 6.15326 4.5 6.75V17.25C4.5 17.8467 4.73705 18.419 5.15901 18.841C5.58097 19.2629 6.15326 19.5 6.75 19.5H17.25C17.8467 19.5 18.419 19.2629 18.841 18.841C19.2629 18.419 19.5 17.8467 19.5 17.25V13.905C19.5 13.7061 19.579 13.5153 19.7197 13.3747C19.8603 13.234 20.0511 13.155 20.25 13.155C20.4489 13.155 20.6397 13.234 20.7803 13.3747C20.921 13.5153 21 13.7061 21 13.905V17.25C21 18.2446 20.6049 19.1984 19.9016 19.9016C19.1984 20.6049 18.2446 21 17.25 21H6.75C5.75544 21 4.80161 20.6049 4.09835 19.9016C3.39509 19.1984 3 18.2446 3 17.25V6.75C3 5.75544 3.39509 4.80161 4.09835 4.09835C4.80161 3.39509 5.75544 3 6.75 3H10.095C10.2939 3 10.4847 3.07902 10.6253 3.21967C10.766 3.36032 10.845 3.55109 10.845 3.75C10.845 3.94891 10.766 4.13968 10.6253 4.28033C10.4847 4.42098 10.2939 4.5 10.095 4.5H6.75ZM13.155 3.75C13.155 3.55109 13.234 3.36032 13.3747 3.21967C13.5153 3.07902 13.7061 3 13.905 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75V10.095C21 10.2939 20.921 10.4847 20.7803 10.6253C20.6397 10.766 20.4489 10.845 20.25 10.845C20.0511 10.845 19.8603 10.766 19.7197 10.6253C19.579 10.4847 19.5 10.2939 19.5 10.095V5.562L14.4345 10.626C14.3653 10.6976 14.2826 10.7548 14.1911 10.7941C14.0996 10.8334 14.0011 10.8541 13.9016 10.8549C13.802 10.8558 13.7032 10.8368 13.611 10.7991C13.5189 10.7614 13.4351 10.7057 13.3647 10.6353C13.2943 10.5649 13.2386 10.4811 13.2009 10.389C13.1632 10.2968 13.1442 10.198 13.1451 10.0984C13.1459 9.99886 13.1666 9.90045 13.2059 9.80895C13.2452 9.71744 13.3024 9.63469 13.374 9.5655L18.4395 4.5H13.9035C13.7046 4.5 13.5138 4.42098 13.3732 4.28033C13.2325 4.13968 13.1535 3.94891 13.1535 3.75H13.155Z" fill="white"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.bottomBlog}>
                                <h1 className={Styles.name}>
                                    {singleData.name_plans}
                                </h1>
                                <div className={Styles.singleEsim}>
                                    <p className={Styles.optionEsimok}>
                                        {singleData.single_country_plans}
                                    </p>
                                    <div className={Styles.listSingleBlog}>
                                        <Suspense fallback={<div>Loading...</div>}>
                                            {(plans || []).map((item: any) => (
                                                <div key={item.id} className={Styles.itemEsim}>
                                                    <div className={Styles.itemEsimInfo}>
                                                        <div className={Styles.countryName}>
                                                            {item.single_name_country}
                                                        </div>
                                                        <div className={Styles.dataEsim}>
                                                            <div className={Styles.data}>
                                                                {item.single_data_day}
                                                            </div>
                                                            <div className={Styles.price}>
                                                                {item.single_price}
                                                            </div>
                                                        </div>
                                                        <p className={Styles.infoOption}>
                                                            {item.single_description}
                                                        </p>
                                                    </div>
                                                    <div className={Styles.listUseEsim}>
                                                        <div className={Styles.listServicesEsim}>
                                                            <ul>
                                                                <li>{item.single_list_option_1}</li>
                                                                <li>{item.single_list_option_2}</li>
                                                                <li>{item.single_list_option_3}</li>
                                                            </ul>
                                                        </div>

                                                        <div className={Styles.plan}>
                                                            <Button variant="secondary"
                                                                onClick={() => {
                                                                    setSelectedPlanDetails(item);
                                                                    setshowModalCreate(true);
                                                                }}
                                                            >
                                                                Plain data
                                                            </Button>
                                                            <CreatModal
                                                                showModalCreate={showModalCreate}
                                                                setshowModalCreate={setshowModalCreate}
                                                                planDetails={selectedPlanDetails}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Suspense>

                                    </div>
                                </div>
                                <div className={Styles.multipleEsim}>
                                    <p className={Styles.optionEsimok}>Multiple-country plans</p>
                                    <div className={Styles.listSingleBlog}>
                                        <div className={Styles.itemEsim}>
                                            <div className={Styles.itemEsimInfo}>
                                                <div className={Styles.countryName}>
                                                    France
                                                </div>
                                                <div className={Styles.dataEsim}>
                                                    <div className={Styles.data}>
                                                        3GB / 30 Days
                                                    </div>
                                                    <div className={Styles.price}>
                                                        $8.00
                                                    </div>
                                                </div>
                                                <p className={Styles.infoOption}>
                                                    Cancel anytime after 3 months
                                                </p>
                                            </div>
                                            <div className={Styles.listUseEsim}>
                                                <div className={Styles.listServicesEsim}>
                                                    <ul>
                                                        <li>Subscription</li>
                                                        <li>SMS</li>
                                                        <li>Call</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
