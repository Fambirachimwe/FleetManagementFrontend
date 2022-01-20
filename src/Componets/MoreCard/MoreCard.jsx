import React from 'react';
import "./MoreCard.css";
import { RemoveRedEye, Edit, Assignment } from '@mui/icons-material';
// import { Tooltip } from '@mui/material';;
import { Link  } from 'react-router-dom';




const MoreCard = ({ id, url }) => {




    return (

        <div className="morecard" >
            <div className="morecard__link">
                <RemoveRedEye className="morecard__icon" />
                
                <Link to={`${url}/${id}`}>
                    <p>View</p>
                </Link>
                
                
            </div>

            <div className="morecard__link">
                <Edit className="morecard__icon" />
                <p>Edit</p>
            </div>

            <div className="morecard__link">
                <Assignment className="morecard__icon" />
                <p>Assign</p>
            </div>
        </div>
    )
}

export default MoreCard
