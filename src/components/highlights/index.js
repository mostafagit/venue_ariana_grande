import React from 'react';
import Description from './Description';
import Discount from './Discount';

function Highlights(props) {
    return (
        <div className='highlight_wrapper'>
            <Description />
            <Discount />
        </div>
    );
}

export default Highlights;