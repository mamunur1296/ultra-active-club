import React, { useEffect, useState } from 'react';
import Cardscontainer from '../MainContainer/Cardscontainer';
import Break from '../Sidebar/Break/Break';
import Details from '../Sidebar/Details/Details';
import Parsonal from '../Sidebar/Parsonal/Parsonal';
import './Fullbody.css';

const Fullbody = () => {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState([]);
    const [btntext, setBtntext] = useState([]);
    const [text, setText] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    useEffect(() => {
        fetch('time.json')
            .then(res => res.json())
            .then(data => setBtntext(data));
    }, [])
    useEffect(() => {
        const  getText = JSON.parse(localStorage.getItem('data'));
        setText(getText);
    }, [text]);
    
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
    const handalBtnText = btnDatas => {
        const {time } = btnDatas;
        localStorage.setItem('data', JSON.stringify(time));
        window.location.reload()
    };


    return (
        <div className='container'>
            <h4>Select today’s activities</h4>
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
                        handalBtnText={handalBtnText}
                    ></Break>
                    <Details
                        key={card.id}
                        card={card}
                        text={text}
                       
                    ></Details>
                </div>
            </div>
        </div>
    );
};

export default Fullbody;