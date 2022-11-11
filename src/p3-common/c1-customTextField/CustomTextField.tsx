import * as React from "react";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import {useController} from "react-hook-form";
import {TextFieldProps} from "@mui/material/TextField/TextField";

export const CustomTextFieldOrigin = styled(TextField)({
    "& label.Mui-focused": {
        color: "#757575",
        "&.Mui-error": {
            color: "#a10000",
        }
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderRadius: "0.75rem",
            borderColor: "#0000004C",
            borderWidth: 2,
            "&.Mui-error": {
                color: "#a10000",
            }
        },
        "&.Mui-focused fieldset": {
            borderColor: "#333333",
            "&.Mui-error": {
                color: "#a10000",
            }
        },
        "&.Mui-error fieldset": {
            borderColor: "#A10000FF",
        },
    },
});

export function CustomTextField(props: CustomTextFieldProps) {

    const {
        field: {onChange, onBlur, name, value, ref},
        // fieldState: {invalid, isTouched, isDirty},
        // formState: {touchedFields, dirtyFields}
    } = useController(props.hookForm);

    return (
        <CustomTextFieldOrigin
            {...props.nativeMUIProps}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            inputRef={ref}
        />
    );
}

type CustomTextFieldProps = {
    hookForm: { name: string, control: any },
    nativeMUIProps: TextFieldProps
}