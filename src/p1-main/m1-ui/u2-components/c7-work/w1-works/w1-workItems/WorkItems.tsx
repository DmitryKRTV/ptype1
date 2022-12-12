import React from "react";
import {DataItemType} from "../Works";
import styles from "../../work.module.scss"
import {Box, DialogActions, DialogContent, ThemeProvider, Typography} from "@mui/material";
import {customTheme} from "../../../../../../p3-common/c5-MUITheme/styles";
import {WorkDialog} from "../../../../../../p3-common/c6-workDialog/WorkDialog";
import {CloseButton, ViewButton} from "../../../../../../p3-common/c6-workDialog/w1-buttons/DialogButtons";

const dialogStyles = {
    maxWidth: 900,
    p: 4,
    bgcolor: "background.paper",
    boxShadow: 24,
};

const imgBoxStyle = {
    height: {
        xs: 94,
        sm: 118,
        md: 214,
        lg: 294,
        xl: 398,
    },
    width: {
        xs: 200,
        sm: 250,
        md: 450,
        lg: 620,
        xl: 836,
    },
    display: "block",
    margin: "0 auto",
    borderRadius: "1.5rem"
};


export const WorkItems = ({item}: WorkItemsType) => {

    // const theme = useTheme();
    // const matches = useMediaQuery(customTheme.breakpoints.values)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className={`${styles.work__card}`}>
            <img src={item.image} alt="Work Image" className={`${styles.work__img}`}/>
            <h3 className={`${styles.work__title}`}>{item.title}</h3>
            <button onClick={handleOpen}
                    className={`${styles.work__button}`}>
                View more
                <i className={`bx bx-right-arrow-alt ${styles["work__button-icon"]}`}></i>
            </button>

            <ThemeProvider theme={customTheme}>
                <WorkDialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth={"xl"}
                    sx={{borderRadius: "20px"}}
                >
                    <DialogContent
                        sx={dialogStyles}
                    >
                        <Box
                            component="img"
                            sx={imgBoxStyle}
                            alt="The house from the offer."
                            src={item.image}
                        />
                        <Typography id="modal-modal-title"
                                    sx={{
                                        color: "var(--title-color)",
                                        fontSize: "var(--h3-font-size)",
                                        fontWeight: "var(--font-medium)",
                                        fontFamily: "var(--body-font)",
                                        textAlign: "center",
                                        mt: 2,
                                        ml: 0.7,
                                        mb: 0.5,
                                    }}>
                            {item.title}
                        </Typography>
                        <Typography id="modal-modal-title"
                                    sx={{
                                        color: "var(--title-color)",
                                        fontSize: "var(--normal-font-size)",
                                        fontWeight: "var(--font-medium)",
                                        fontFamily: "var(--body-font)",
                                        ml: 0.7
                                    }}>
                            Stack: {item.stack}
                        </Typography>
                        <Typography id="modal-modal-description"
                                    sx={{
                                        color: "var(--text-color)",
                                        fontSize: "var(--normal-font-size)",
                                        fontFamily: "var(--body-font)",
                                        ml: 0.7
                                    }}>
                            Description: {item.description}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <ViewButton link={item.link}/>
                        <CloseButton callback={handleClose}/>
                    </DialogActions>
                </WorkDialog>
            </ThemeProvider>
        </div>
    );
};

type WorkItemsType = {
    item: DataItemType
}

