import {styled} from "@mui/material/styles";
import {Dialog} from "@mui/material";

export const WorkDialog = styled(Dialog)(({theme}) => ({
    "& .MuiDialog-paper": {
        borderRadius: "1.5rem",
    },
    ".MuiDialogActions-root": {
        backgroundColor: "var(--body-color)",
        justifyContent: "space-between",
        padding: "1rem 2rem 1rem",
    },
    ".MuiDialogContent-root": {
        backgroundColor: "var(--body-color)",
        paddingBottom: "0rem",
    }
}));