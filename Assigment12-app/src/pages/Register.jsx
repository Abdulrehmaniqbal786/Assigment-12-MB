import { Stack, Paper, Typography, Button } from "@mui/material";
import { Input_Component } from "../Components/Input_Component";
import { sign_up_data } from "../utils/sign_up_data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    // let userdata = {}
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const onChangeHandle = (e) => {
        const { value, id } = e.target;
        setUserData({ ...userData, [id]: value });
        // ...
    };

    const submitHandle = (e) => {
        e.preventDefault();
        const { username, password } = userData;
        if (
            username === sign_up_data.username &&
            password === sign_up_data.password
        ) {
            localStorage.setItem("isLoggedIn", true);
            navigate("/");
        } else {
            alert("Invalid credentials!");
        }

        // credentials_data
    };
    return (
        <Stack className="min-h-[100dvh] justify-center items-center">
            <div className="max-w-md">
                <Paper
                    component="form"
                    onSubmit={submitHandle}
                    elevation={10}
                    sx={{ px: 2, py: 3 }}
                >
                    <Typography align="center" fontWeight="bold" variant="h5">
                        Sign Up
                    </Typography>
                    <Input_Component
                        placeholder="Enter First Name"
                        type="text"
                        id="firstname"
                        onChange={onChangeHandle}
                        required={true}
                    />
                    <Input_Component
                        placeholder="Enter last Name"
                        type="text"
                        id="lastname"
                        onChange={onChangeHandle}
                        required={true}
                    />
                    <Input_Component
                        placeholder="Enter Username"
                        type="text"
                        id="username"
                        onChange={onChangeHandle}
                        required={true}
                    />
                    <Input_Component
                        placeholder="Enter Password"
                        type="password"
                        id="password"
                        onChange={onChangeHandle}
                        required={true}
                    />
                    <Button
                        type="submit"
                        sx={{ width: "100%", mt: 2 }}
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </Paper>
            </div>
        </Stack>
    );
};

export { Register };