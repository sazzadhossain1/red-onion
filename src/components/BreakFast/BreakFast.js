import React, { useEffect, useState } from 'react';
import Nasta from '../Nasta/Nasta';
import './BreakFast.css';

const BreakFast = () => {
    const [breakFirsts, setBreakFirsts] = useState([]);
    useEffect(() =>{
        fetch('breakfirst.json')
        .then(res => res.json())
        .then(data => setBreakFirsts(data))
    },[])
    return (
        <div >
            <h1>this is BreakFast</h1>
           <div className='breakFirst'>
           {
                breakFirsts.map(breakFirst => <Nasta key={breakFirst.id} breakFirst={breakFirst}></Nasta>)
            }
           </div>
        </div>
    );
};

export default BreakFast;