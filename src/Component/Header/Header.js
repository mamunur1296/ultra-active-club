import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='d-flex py-4 margin '>
                <FontAwesomeIcon className=' text' icon={faPersonWalking}></FontAwesomeIcon>   
                <h3 className='cal ms-2 '>MODERN EXERCISE CLUB</h3>
            </div>
        </div>
    );
};
export default Header;