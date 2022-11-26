import {createTheme} from "@mui/material";

export const customTheme = createTheme({
    breakpoints: {
        values: {
            xs: 290,
            sm: 350,
            md: 576,
            lg: 768,
            xl: 992,
        }
    }
})