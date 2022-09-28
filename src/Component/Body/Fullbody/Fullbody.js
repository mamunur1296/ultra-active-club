import React, { useEffect, useState } from 'react';
import Cardscontainer from '../MainContainer/Cardscontainer';
import Break from '../Sidebar/Break/Break';
import Details from '../Sidebar/Details/Details';
import Parsonal from '../Sidebar/Parsonal/Parsonal';
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
            <h4>Select today’s exercise</h4>
            <div className='card-container-main'>
                <div className=" row row-cols-1 row-cols-md-3 my-5 g-4">
                    {
                        cards.map(card => <Cardscontainer
                            key={card.id}
                            card={card}
                        ></Cardscontainer>)  
                    }
                </div>
                <div className="sidebar-container">
                    <Parsonal></Parsonal>
                    <Break></Break>
                    <Details></Details>
                </div>
            </div>
        </div>
    );
};

export default Fullbody;