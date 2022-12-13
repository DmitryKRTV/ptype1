import {styled} from "@mui/material/styles";
import {Dialog} from "@mui/material";

export const ServicesDialog = styled(Dialog)(({theme}) => ({

    "& .MuiDialog-paper": {
        borderRadius: "1.5rem",
        backgroundColor: "var(--body-color)",
    },
    ".MuiDialogContent-root": {
        backgroundColor: "var(--body-color)",
    },
    [theme.breakpoints.up("xs")]: {
        "& .MuiDialog-paper": {
            padding: "1rem 1.5rem 1.5rem",
            minWidth: "0",
        },
        ".MuiDialogContent-root": {
            padding: "0",
        },
    },
    [theme.breakpoints.up("md")]: {
        "& .MuiDialog-paper": {
            padding: "1.5rem 1.5rem 2rem",
            maxWidth: "550px",
            minWidth: "300px",
        },
        ".MuiDialogContent-root": {
            padding: "0 1.5rem 0",
        },
    },
}));