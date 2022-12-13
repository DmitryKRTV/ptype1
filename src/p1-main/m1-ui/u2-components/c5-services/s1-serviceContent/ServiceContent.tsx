import React from "react";
import {ServicesDataType} from "../Services";
import styles from "../services.module.scss"
import {customTheme} from "../../../../../p3-common/c5-MUITheme/styles";
import {Box, DialogContent, IconButton, ThemeProvider, Typography} from "@mui/material";
import {ServicesDialog} from "../../../../../p3-common/с7-servicesDialog/ServicesDialog";


export const ServiceContent = ({
                                   serviceData,
                               }: ServiceContentType) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={`${styles["services__content"]}`}>
            <div className={`${styles["title__container"]}`}>
                <i className={`${serviceData.icon} ${styles["services__icon"]}`}></i>
                <h3 className={styles.services__title}>
                    {serviceData.title}
                </h3>
            </div>
            <span className={styles.services__button}
                  onClick={() => handleOpen()}
            >
                        View More
                        <i className={`uil uil-arrow-right ${styles["services__button-icon"]}`}></i>
                    </span>

            <ThemeProvider theme={customTheme}>
                <ServicesDialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    scroll={"body"}
                >
                    <Box sx={{display: "flex", justifyContent: "flex-end", backgroundColor: "var(--body-color)"}}>
                        <IconButton onClick={handleClose} sx={{width: "35px", height: "35px"}}>
                            <i className={`uil uil-times`}></i>
                        </IconButton>
                    </Box>
                    <DialogContent>
                        <Typography id="modal-modal-title"
                                    sx={{
                                        color: "var(--title-color)",
                                        fontSize: "var(--h3-font-size)",
                                        fontWeight: "var(--font-medium)",
                                        fontFamily: "var(--body-font)",
                                        textAlign: "center",
                                        marginBottom: "var(--mb-1)",
                                    }}>
                            {serviceData.title}
                        </Typography>
                        <Typography id="modal-modal-description"
                                    sx={{
                                        color: "var(--text-color)",
                                        fontSize: "var(--small-font-size)",
                                        fontFamily: "var(--body-font)",
                                        textAlign: "center",
                                        padding: {
                                            xs: "0 0",
                                            md: "0 1.5rem",
                                        },
                                        marginBottom: "var(--mb-2)",
                                    }}>
                            {serviceData.description}
                        </Typography>
                        {serviceData.items.map((item, index) => {
                            return <Box
                                sx={{
                                    display: "flex",
                                    justifyItems: "center",
                                    alignItems: "center",
                                    backgroundColor: "var(--body-color)",
                                    mb: "0.5rem"
                                }}
                                key={index}>
                                <i className={`uil uil-check-circle`}></i>
                                <Typography sx={{
                                    color: "var(--text-color)",
                                    fontSize: "var(--small-font-size)",
                                    fontFamily: "var(--body-font)",
                                    ml: "0.5rem"
                                }}>
                                    {item}
                                </Typography>
                            </Box>
                        })}
                    </DialogContent>
                </ServicesDialog>
            </ThemeProvider>

        </div>
    );
};
type ServiceContentType = {
    serviceData: ServicesDataType
}

