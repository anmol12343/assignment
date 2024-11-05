import React from 'react';
import '../App.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineClipboard } from "react-icons/hi";
import { HiOutlineChartBar } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className='head'> <span className="hamburger1"> <GiHamburgerMenu /> </span> AlgoZenith</h2>
            <nav>
                <ul>
                    <li> <span className="hamburger"><HiOutlineViewGrid /></span>  Dashboard </li>
                    <li> <span className="hamburger"><HiOutlineLightBulb /></span>  Learn </li>
                    <li> <span className="hamburger"><HiOutlineUserGroup /></span> Forums </li>
                    <li> <span className="hamburger"><HiOutlineClipboard /></span> Upskill </li>
                    <li> <span className="hamburger"><HiOutlineChartBar /></span> Contest </li>
                    <li> <span className="hamburger"><FaRegStar /></span> Leaderboard </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;