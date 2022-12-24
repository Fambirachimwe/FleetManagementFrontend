import React from 'react';
import "./MoreCard.css";
import { RemoveRedEye, Edit, Assignment, Cancel, Delete } from '@mui/icons-material';
// import { Tooltip } from '@mui/material';;
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { deleteFuelRequestById, deleteVehicleRequestById, AppoveFuelRequest, AppoveVehicleRequest, disAppoveFuelRequest, disAppoveVehicleRequest } from '../../api/api';
import Swal from 'sweetalert2';



const MoreCardUser = ({ id, url, from }) => {

    const queryClient = useQueryClient();
    const mutation1 = useMutation(deleteFuelRequestById)
    const mutation2 = useMutation(deleteVehicleRequestById)

    const handleDelete = () => {

        if (from === "fuelRequest") {

            mutation1.mutate({ id }, {
                onSuccess: () => {

                    queryClient.invalidateQueries('fuelRequestById')
                    Swal.fire({
                        icon: 'success',
                        title: 'Delete Successfull',
                        // text: `Vehicle successfull registered`,

                    });
                },

                onError: () => {
                    // queryClient.invalidateQueries('vehicles')
                    Swal.fire({
                        icon: 'warning',
                        title: 'Failed to delete Request',
                        // text: `Vehicle not registered`,

                    });
                }
            })

            // deleteFuelRequestById(id).then(data => {
            //     // console.log(data)
            //     queryClient.invalidateQueries('fuelRequestById')
            // })
        } else {
            deleteVehicleRequestById(id).then(data => {

                queryClient.invalidateQueries('vehicleRequestById')

            })
        }

    }


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


                <div className="delete_btn" onClick={handleDelete} style={{ "cursor": "pointer" }}>
                    <p>Delete</p>
                </div>





            </div>


        </div>
    )
}

export default MoreCardUser
