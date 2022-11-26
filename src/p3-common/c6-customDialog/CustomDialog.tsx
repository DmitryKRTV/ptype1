import {styled} from "@mui/material/styles";
import {Dialog} from "@mui/material";

export const CustomDialog = styled(Dialog)(({theme}) => ({
    "& .MuiDialog-paper": {
        borderRadius: "1.5rem",
    },
}));