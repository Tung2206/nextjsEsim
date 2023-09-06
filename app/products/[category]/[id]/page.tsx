'use client'
import CreatModal from "@/component/CreateModal";
import Styles from "../../../../styles/single.module.scss"
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button";
import BreadCrumbs from "@/component/BreadCrumbs";
import Image from 'next/image';

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
                                    <Image src={data.data[0]['listdata'][0].logo}
                                        width={125}
                                        height={125}
                                        alt={data.data[0]['listdata'][0]['single_data'][0].nameSingleData} width={35} height={35} />
                                    <h2 className={Styles.titleEsim}>{data.data[0]['listdata'][0]['single_data'][0].nameSingleData}</h2>
                                </div>
                                <div className={Styles.blogDescription}>
                                    <div className={Styles.description}>
                                        {singleData.description}
                                    </div>
                                    <div className={Styles.linkWeb}>
                                        <Link href={singleData.link_website}>
                                            Official Website
                                            
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
