import React from 'react';
import "./MoreCard.css";
import { RemoveRedEye, Edit, Assignment, Cancel, Delete } from '@mui/icons-material';
// import { Tooltip } from '@mui/material';;
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { AppoveFuelRequest, AppoveVehicleRequest, disAppoveFuelRequest, disAppoveVehicleRequest } from '../../api/api';
import Swal from 'sweetalert2';



const MoreCardUser = ({ id, url }) => {


    return (

        <div className="morecard" >
            <div className="morecard__link">
                <RemoveRedEye className="morecard__icon" />

                <Link to={`${url}/${id}`}>
                    <p>View</p>
                </Link>


            </div>

            <div className="morecard__link">
                <Delete className="morecard__icon" />


                <p>Delete</p>



            </div>


        </div>
    )
}

export default MoreCardUser
