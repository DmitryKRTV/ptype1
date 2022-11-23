import React, {MouseEvent} from "react";
import {ModalToggleType, ServicesDataType} from "../Services";
import styles from "../services.module.scss"
import {Box, Modal} from "@mui/material";


const modalBoxStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1.5rem",
    // padding: "0 1rem",
}

const modalContentStyle = {
    maxWidth: "550px",
    minWidth: "300px",
    position: "relative" as "relative",
    backgroundColor: "var(--container-color)",
    padding: "4.5rem 2.5rem 2.5rem",
    borderRadius: "1.5rem",
}

const modalCloseStyle = {
    position: "absolute" as "absolute",
    top: "1.5rem",
    right: "1.5rem",
    fontSize: "1.5rem",
    color: "var(--title-color)",
    cursor: "pointer",
}

const modalTitleStyle = {
    fontSize: "var(--h3-font-size)",
    fontWeight: "var(--font-medium)",
    marginBottom: "var(--mb-1)",
    textAlign: "center" as "center",
}

const modalDescriptionStyle = {
    fontSize: "var(--small-font-size)",
    marginBottom: "var(--mb-2)",
    textAlign: "center" as "center",
}

const modalServicesStyle = {
    display: "grid",
    gap: "1.5rem",
    rowGap: "0.75rem",
}

const modalServiceStyle = {
    display: "flex",
    alignItems: "center",
    columnGap: "0.5rem",
}

const modalIconStyle = {
    color: "var(--title-color)",
    fontSize: "1.1rem",
}

const modalInfoStyle = {
    fontSize: "var(--small-font-size)",
}


export const CustomServiceContent = ({
                                         serviceData,
                                     }: ServiceContentType) => {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={`${styles["services__content"]}`}>
            <div>
                <i className={`${serviceData.icon} ${styles["services__icon"]}`}></i>
                <h3 className={styles.services__title}>
                    {serviceData.title}
                </h3>
            </div>
            <span className={styles.services__button}
                  onClick={handleOpen}>
                        View More
                        <i className={`uil uil-arrow-right ${styles["services__button-icon"]}`}></i>
                    </span>
            <Modal
                sx={{overflow: "scroll"}}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalBoxStyle}>
                    <Box sx={modalContentStyle}>
                        <i className={`uil uil-times`} style={modalCloseStyle} onClick={handleClose}></i>
                        <h3 style={modalTitleStyle}>{serviceData.title}</h3>
                        <p style={modalDescriptionStyle}>
                            {serviceData.description}
                        </p>
                        <ul style={modalServicesStyle}>
                            {serviceData.items.map((item, index) => {
                                return <li style={modalServiceStyle} key={index}>
                                    <i className={`uil uil-check-circle`} style={modalIconStyle}></i>
                                    <p style={modalInfoStyle}>
                                        {item}
                                    </p>
                                </li>
                            })}
                        </ul>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

type ServiceContentType = {
    toggleModal: ModalToggleType
    setToggleModal: (value: ModalToggleType) => void
    closeModal: (e: MouseEvent<HTMLElement>) => void
    serviceData: ServicesDataType
}

