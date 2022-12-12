import React from "react";
import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";

const BootstrapButton = styled(Button)({
    color: "var(--title-color)",
    fontSize: "var(--normal-font-size)",
    textTransform: "none",
    fontWeight: "var(--font-normal)",
    lineHeight: 1,

    backgroundColor: "var(--body-color)",
    boxShadow: "none",

    padding: "8px 10px",

    border: "1px solid var(--title-color)",
    borderRadius: "1.5rem",

    fontFamily: "var(--body-font)",
    "&:hover": {
        background: "var(--title-color)",
        color: "var(--body-color)",
    },
    "&:active": {},
    "&:focus": {},
});

export const ViewButton = (props: { link: string }) => {
    return (
        <BootstrapButton variant="text" href={props.link} formTarget="_blank">
            View Demo
        </BootstrapButton>
    );
};

export const CloseButton = (props: { callback: () => void }) => {
    return (
        <BootstrapButton onClick={() => props.callback()}>
            Close
        </BootstrapButton>
    );
};

