import React, { useEffect, useState } from 'react';
import './Fullbody.css';

const Fullbody = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    return (
        <div className='container'>
            <h4>Select today’s exercise {cards.length}</h4>
            <div className='card-container-main'>

            </div>
        </div>
    );
};

export default Fullbody;