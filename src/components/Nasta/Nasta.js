import React from 'react';
import './Nasta.css';

const Nasta = ({breakFirst}) => {
    const{name,review,rating,image} = breakFirst
    return (
        <div className='nasta'>
            <img src={image} alt="" />
            <h5>{name}</h5>
            <p>{review}</p>
            <h4>$ {rating}</h4>
        </div>
    );
};

export default Nasta;