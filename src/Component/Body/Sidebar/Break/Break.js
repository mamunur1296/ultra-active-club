import React, { useState } from 'react';
import './Break.css'

const Break = () => {
    const [text, setText] = useState('');
    console.log(text);
    return (
        <div className='break-container'>
            <h4>Add A Break</h4> 
            
            <div className="breack-times">
                <a
                    onChange={(e) => setText(e.target.value)}

                href="#"><p className='comon-style'>10 <small>s</small></p></a>

            </div>
        </div>
    );
};

export default Break;