import React, { useState } from 'react';
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { IoIosInformationCircleOutline } from "react-icons/io";
import '../App.css';

const ContentTabs = () => {
    const [activeTab, setActiveTab] = useState('Learning Material');

    return (
        <div className="tabs">
        <div className="gradient">
        <button
                className={`tab ${activeTab === 'Mentor Sessions' ? 'active' : ''}`}
                onClick={() => setActiveTab('Mentor Sessions')}
            >
             <span className="hamburger"><HiOutlineCalendar /></span> Mentor Sessions
            </button>
            <button
                className={`tab ${activeTab === 'Learning Material' ? 'active' : ''}`}
                onClick={() => setActiveTab('Learning Material')}
            >
                <span className="hamburger"><HiOutlineBriefcase /></span>Learning Material
            </button>
        </div>
            <div className='howitworks1'>
                <span className="howitworks"><IoIosInformationCircleOutline /></span> <span>How it works</span>
            </div>
        </div>
    );
};

export default ContentTabs;