'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Styles from "../styles/modal.module.scss";

interface IProps {
    showModalCreate: boolean;
    setshowModalCreate: (value: boolean) => void;
    planDetails: any;
}

function CreatModal(props: IProps) {
    const { showModalCreate, setshowModalCreate, planDetails } = props;
    const handleCloseModal = () => {
        setshowModalCreate(false);
    };

    return (
        <>
            <Modal
                show={showModalCreate}
                onHide={handleCloseModal}
                animation={true}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={Styles.customModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Plan details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className={Styles.nameServices}>{planDetails && planDetails.plan_details && planDetails.plan_details[0].plan_infomation} </h5>
                    <div className={Styles.listCountry}>
                        {planDetails && planDetails.plan_details && planDetails.plan_details[0].plan_list_country.map((country: any, index: number) => (
                            <div className={Styles.itemCountry} key={index}>
                                <img src={country.image_plan_country} alt={country.name_plan_country} />
                                <h3 className={Styles.itemTitle}>{country.name_plan_country}</h3>
                            </div>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className={Styles.customButtonModal}  variant="secondary"  onClick={handleCloseModal}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreatModal;