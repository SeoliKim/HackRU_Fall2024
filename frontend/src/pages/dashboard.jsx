import React, { useState } from 'react';
import ChatInterface from'../components/chat/chat'
import { useNavigate } from 'react-router-dom';
import "./dashboard.css";

function Dashboard() {

    return(
        <div className="full-background">
            <div className="chatbox">
                <ChatInterface />
            </div>
        </div>
    );

}

export default Dashboard;