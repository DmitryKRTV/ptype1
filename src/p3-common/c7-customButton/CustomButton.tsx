import React from "react";
import {Button} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {styled} from "@mui/material/styles";

const BootstrapButton = styled(Button)({
    color: "var(--text-color)",
    fontSize: "var(--small-font-size)",
    backgroundColor: "var(--container-color)",
    boxShadow: "none",

    textTransform: "none",
    padding: "6px 6px",
    lineHeight: 1.5,
    borderRadius: "1.5rem",
    // borderColor: "#0000004C",
    fontFamily: [
        "var(--body-font)",
        "-apple-system",
        "BlinkMacSystemFont",
        "\"Segoe UI\"",
        "Roboto",
        "\"Helvetica Neue\"",
        "Arial",
        "sans-serif",
        "\"Apple Color Emoji\"",
        "\"Segoe UI Emoji\"",
        "\"Segoe UI Symbol\"",
    ].join(","),
    "&:hover": {
        // backgroundColor: "#0069d9",
        // borderColor: "#0062cc",
        // boxShadow: "none",
    },
    "&:active": {
        // boxShadow: "none",
        // backgroundColor: "#0062cc",
        // borderColor: "#005cbf",
    },
    "&:focus": {
        // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
});

export const CustomButton = (props: { link: string }) => {
    return (
        <BootstrapButton variant="text" endIcon={<ArrowForwardIcon/>} href={props.link} formTarget="_blank">
            View More
        </BootstrapButton>
    );
};

