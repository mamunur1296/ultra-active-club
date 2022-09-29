import React from 'react';
import Swal from 'sweetalert2';
import './Details.css'
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

const Details = ({ card, text }) => {
    const handalTost = () => {
        Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
    };
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
                    <p> {text} minits </p>
                </div>
            </div>
            <button onClick={handalTost} className='btn mt-5 w-100 btn-primary'>Activity Completed</button>
        </div>
    );
};

export default Details;