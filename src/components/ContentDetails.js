import React from 'react';
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineChartBar } from "react-icons/hi";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlinePlayCircle } from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import '../App.css';


const ContentDetails = () => {
   
    return (
        <div className="content-details">
         <div className='parts'>
             <div>PART 1</div>
             <div className='chead'>
            <h3>Lorem Ipsum Dolor Sit Amet</h3>
            <p className='sidecontent'> <div className='margins1'><FaRegClock /></div>  <div className='margins'>02:00:00 </div> <div className='margins'><HiOutlineChartBar /></div>  <div className='margins'>Medium</div> <div className='margins1'><FaRegCopy /></div> <div className='margins'>5</div> <div className='margins'><IoIosArrowUp /></div> </p>
            </div>
            <div className='percent'><div className='percent1'>45% Completed</div></div>

            <div className="progress-container">
                <div className="progress-bar" style={{ width: '45%' }}></div>
            </div>
            <div>

            <div className="resource-item">
            <div>
                <span><MdOutlinePlayCircle /></span>
                <span className='bold'> Video 1</span>
            </div>
            <span className="resource-duration"> <div className='margins1'><FaRegClock /></div> 10:00</span>
        </div>
              
            <div className="resource-item">
            <div>
                <span><HiOutlineQuestionMarkCircle /></span>
                <span className='bold'> Article 1</span>
            </div>
            <span className="resource-duration"> <div className='margins1'><FaRegClock /></div> 10:00</span>
        </div>
                
        <div className="resource-item">
            <div>
                <span><HiOutlineQuestionMarkCircle /></span>
                <span className='bold'> Quiz 1</span>
            </div>
            <span className="resource-duration"> <div className='margins1'><FaRegClock /></div> 10:00</span>
        </div>

        <div className="resource-item">
            <div>
                <span><FaCode /></span>
                <span className='bold'> Coding Exercise 1</span>
            </div>
            <span className="resource-duration"> <div className='margins1'><FaRegClock /></div> 10:00</span>
        </div>

        <div className="resource-item">
            <div >
                <span><FaRegCopy /> </span>
                <span className='bold'> Combined Resource 1</span>
            </div>
            <span className="resource-duration"> <div className='margins1'><FaRegClock /></div> 10:00</span>
        </div>

            </div>
           </div>
           <div className='parts'>
            <div>PART 2</div>
             <div className='chead'>
            <h3>Lorem Ipsum Dolor Sit Amet</h3>
            <p className='sidecontent'> <div className='margins1'><FaRegClock /></div>  <div className='margins'>02:00:00 </div> <div className='margins'><HiOutlineChartBar /></div>  <div className='margins'>Medium</div> <div className='margins1'><FaRegCopy /></div> <div className='margins'>12</div> <div className='margins'><IoIosArrowDown /></div> </p>
            </div>
            <div className='percent'><div className='percent1'>20% Completed</div></div>

            <div className="progress-container">
                <div className="progress-bar" style={{ width: '20%' }}></div>
            </div>
            </div>

            <div className='parts'>
            <div>PART 3</div>
             <div className='chead'>
            <h3>Lorem Ipsum Dolor Sit Amet</h3>
            <p className='sidecontent'> <div className='margins1'><FaRegClock /></div>  <div className='margins'>02:00:00 </div> <div className='margins'><HiOutlineChartBar /></div>  <div className='margins'>Medium</div> <div className='margins1'><FaRegCopy /></div> <div className='margins'>12</div> <div className='margins'><IoIosArrowDown /></div> </p>
            </div>
            <div className='percent'><div className='percent1'>0% Completed</div></div>

            <div className="progress-container">
                <div className="progress-bar" style={{ width: '0%' }}></div>
            </div>
            </div>
        </div>
    );
};

export default ContentDetails;