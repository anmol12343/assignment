import React from 'react';
import { FaRegClock } from "react-icons/fa6";
import '../App.css';

const ChapterList = () => {
    return (
        <div className="chapter-list">
            <div className='chap1'>Chapter 1 <span className='clock'><FaRegClock /></span> <span className='chaptime'>05:00:00</span></div>
            <div>Chapter 2</div>
            <div>Chapter 3</div>
            <div>Chapter 4</div>
            <div>Chapter 5</div>
        </div>
    );
};

export default ChapterList;