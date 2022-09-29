import React from 'react';
import './Cardscontainer.css'

const Cardscontainer = ({ card ,HandalCardButton }) => {
    const {title ,img,description,time,age } = card;
    return (
        <div>
             <div className="col">
                <div class="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">For Age : {age}</p>
                        <p className="card-text">Time required :{time}</p>
                    </div>
                    <button onClick={()=>HandalCardButton(card)} className='btn color'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Cardscontainer;