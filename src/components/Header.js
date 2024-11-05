import React from 'react';
import { GoBellFill } from "react-icons/go";
import '../App.css';

const Header = () => {
    return (
        <div className="header">
            <div className="profile">
                <button className="bellicon"><GoBellFill /></button>
                <div className="avatar"></div>
            </div>
        </div>
    );
};

export default Header;