import React from 'react';
import './card.style.css'
const Card = props => {
    const classes = 'card '+ props.className; // this made sure to make sure the childern has the same
    return (
        <div className={classes}> {/*classes name is being passed tunamically so its easy to use */}
            {props.children}
        </div>
    );
};

export default Card;