import React from 'react';
import './Break.css'

const Break = ({btntext,handalBtnText}) => {
    return (
        <div className='break-container'>
            <h4>Add A Break</h4> 
            
            <div className="breack-times">
                <button onClick={() => handalBtnText()} className='comon-style'>{btntext}</button>
                <button onClick={() => handalBtnText()} className='comon-style'>{btntext}</button>
                <button onClick={() => handalBtnText()} className='comon-style'>{btntext}</button>
                <button onClick={() => handalBtnText()} className='comon-style'>{btntext}</button>
                <button onClick={() => handalBtnText()} className='comon-style'>{btntext}</button>
             

            </div>
        </div>
    );
};

export default Break;