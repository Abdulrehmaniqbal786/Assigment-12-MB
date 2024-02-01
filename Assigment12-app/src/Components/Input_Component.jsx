import { TextField } from "@mui/material";
import React from "react";

export const Input_Component = (props) => {
  const { placeholder, type, id, onChange, required } = props;
  return (
    <TextField
      sx={{ width: "100%", mt: 2 }}
      required={required}
      placeholder={placeholder}
      type={type}
      id={id}
      onChange={onChange}
    />
  );
};