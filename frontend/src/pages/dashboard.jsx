import React, { useState } from 'react';
import ChatInterface from '../components/chat/chat'
import { useNavigate } from 'react-router-dom';
import "./dashboard.css";

function Dashboard() {

    const navigate = useNavigate();
    return (
        <div>
            <div className="backdash">
            <ChatInterface/>
            </div>
            
        </div>
    );

}

export default Dashboard;