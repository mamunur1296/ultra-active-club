import React from 'react';
import './Break.css'

const Break = ({ btntext, handalBtnText }) => {

    return (
        <div className='break-container'>
            <h4>Add A Break</h4> 
            <div className="breack-times">
                  {
                btntext.map(btn => <BtnSection
                    key={btn.id}
                    btn={btn}
                    handalBtnText={handalBtnText}
                ></BtnSection>)
            }
          </div>
        </div>
    );
};
const BtnSection = ({ btn ,handalBtnText}) => {
    const { time } = btn;
    return(
        <div >
            <button onClick={() => handalBtnText(btn)} className='comon-style'>{time}</button>
        </div >
    )
};
export default Break;