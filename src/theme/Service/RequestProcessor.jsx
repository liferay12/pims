import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const RequestProcessor = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let isLogin = localStorage.getItem("isLogin");
        if (!isLogin) {
            navigate("/login")
        }

    });

    return (
        <div>
            <Component />
        </div>
    )
}
