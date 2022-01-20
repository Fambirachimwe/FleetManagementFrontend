// import { Commute } from '@mui/icons-material';
// import { Commute } from '@mui/icons-material';
import React from 'react';
import "./Card.css";




const Card = ({title, data}) => {

    return (
        <div className="card">

            {/* the card */}
            <div className="card__title">
                <h4>{title}</h4> 
                
            </div>

            <h3 className="card__data">
                {data}
            </h3>


        </div>
    )
}

export default Card
