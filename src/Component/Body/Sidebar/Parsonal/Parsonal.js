import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons'
import './Parsonal.css'
import mamun from '../../../../mamun.png';

const Parsonal = () => {
    return (
        <div>
            <div className='parsonal-container'>
            <img className='my-img' src= {mamun} alt="" />
            <dir className=''>
                <div>
                    <h4> Manunur Rushid</h4>
                </div>
                <div className='strit-view'>
                    <FontAwesomeIcon className='icon' icon={faStreetView}></FontAwesomeIcon>
                    <p>Sonatals , Bogura </p>
                </div>
            </dir>
            </div>
            <div className='additional-info'>
                <div className="weight">
                    <h2>65<small>kg</small></h2>
                    <p>Weight</p>
                </div>
                <div className="height">
                    <h2>5.9</h2>
                    <p>Height</p>
                </div>
                <div className="age">
                    <h2>25 <small>year</small></h2>
                    <p>Age</p>
                </div>
            </div>
       </div>
    );
};

export default Parsonal;