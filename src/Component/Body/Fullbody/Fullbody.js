import React, { useEffect, useState } from 'react';
import Cardscontainer from '../MainContainer/Cardscontainer';
import Break from '../Sidebar/Break/Break';
import Details from '../Sidebar/Details/Details';
import Parsonal from '../Sidebar/Parsonal/Parsonal';
import './Fullbody.css';

const Fullbody = () => {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState([]);
    const[btntext,setBtntext]=useState('10s')
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    const HandalCardButton = cards => {
        const { title, time, age, id } = cards;
        const info = {
            time,
            age,
            title,
            id
        }
        const isExjist = card.filter(csrd => card.id === id);
        if (isExjist) {
            setCard([...card, info]);
        } else {
            setCard(info);
        }
    };
    const handalBtnText = () => {
        localStorage.setItem('time', JSON.stringify(btntext));
        const gatTime = JSON.parse(localStorage.getItem('time'));
        setBtntext(gatTime)
     
    };
    return (
        <div className='container'>
            <h4>Select today’s exercise</h4>
            <div className='card-container-main'>
                <div className=" row row-cols-1 row-cols-md-3 my-5 g-4">
                    {
                        cards.map(card => <Cardscontainer
                            key={card.id}
                            card={card}
                            HandalCardButton={HandalCardButton}
                        ></Cardscontainer>)  
                    }
                </div>
                <div className="sidebar-container">
                    <Parsonal></Parsonal>
                    <Break
                    btntext={btntext}
                        setBtntext={setBtntext}
                        handalBtnText={handalBtnText}
                    ></Break>
                    <Details
                        key={card.id}
                        card={card}
                        btntext={btntext}
                    ></Details>
                </div>
            </div>
        </div>
    );
};

export default Fullbody;