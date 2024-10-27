import React, { useState } from 'react';
import Form from '../components/form/form'
import { useNavigate } from 'react-router-dom';
import back from "../assets/dashboard-back.png";
// import "./dashboard.css";

function MyForm() {

    return (
        <div className="relative min-h-screen w-full">
            {/* <div className="absolute inset-0 z-0">
                <img
                    src={back}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div> */}
            <div className="absolute ">
                <Form />
            </div>
        </div>
    );

}

export default MyForm;