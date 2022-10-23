import React, {MouseEvent} from "react";
import {ModalToggleType, ServicesDataType} from "../Services";
import styles from "../services.module.scss"

export const ServiceContent = ({
                                   toggleModal,
                                   setToggleModal,
                                   closeModal,
                                   serviceData,
                               }: ServiceContentType) => {
    return (
        <div className={`${styles["services__content"]}`}>
            <div>
                <i className={`${serviceData.icon} ${styles["services__icon"]}`}></i>
                <h3 className={styles.services__title}>
                    {serviceData.title}
                </h3>
            </div>
            <span className={styles.services__button}
                  onClick={() => {
                      setToggleModal(serviceData.toggleModalStatic)
                  }}>
                        View More
                        <i className={`uil uil-arrow-right ${styles["services__button-icon"]}`}></i>
                    </span>
            <div
                className={toggleModal === serviceData.toggleModalStatic ? `${styles.services__modal} ${styles["active-modal"]}` : `${styles.services__modal}`}>
                <div className={`${styles["services__modal-content"]}`}>
                    <i className={`uil uil-times ${styles["services__modal-close"]}`} onClick={closeModal}></i>
                    <h3 className={`${styles["services__modal-title"]}`}>{serviceData.title}</h3>
                    <p className={`${styles["services__modal-description"]}`}>
                        {serviceData.description}
                    </p>
                    <ul className={`${styles["services__modal-services"]}`}>
                        {serviceData.items.map((item, index) => {
                            return <li className={`${styles["services__modal-service"]}`} key={index}>
                                <i className={`uil uil-check-circle ${styles["services__modal-icon"]}`}></i>
                                <p className={`${styles["services__modal-info"]}`}>
                                    {item}
                                </p>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

type ServiceContentType = {
    toggleModal: ModalToggleType
    setToggleModal: (value: ModalToggleType) => void
    closeModal: (e: MouseEvent<HTMLElement>) => void
    serviceData: ServicesDataType
}

