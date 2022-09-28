import React from 'react';
import './Details.css'

const Details = ({ card }) => {
    let time = 0;
    for (const updateTime of card) {
        time = time + parseInt(updateTime.time);
    }
    return (
        <div className='details-container'>
            <h4>Exercise Details</h4>
            <div>
                <div className="exercise-time">
                    <p>Exercise time</p>
                    <p> {time}minits </p>
                </div>
                <div className="breack-time">
                    <p>Break time</p>
                    <p> 200 minits </p>
                </div>
            </div>
            <button className='btn mt-5 w-100 btn-primary'>Activity Completed</button>
        </div>
    );
};

export default Details;