import React from 'react';
import "./MoreCard.css";
import { RemoveRedEye, Edit, Assignment, Cancel } from '@mui/icons-material';
// import { Tooltip } from '@mui/material';;
import { Link  } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { AppoveFuelRequest, AppoveVehicleRequest, disAppoveFuelRequest, disAppoveVehicleRequest } from '../../api/api';
import Swal from 'sweetalert2';



const MoreCard = ({ id, url, from }) => {

    const vehicleRequestMutation = useMutation(AppoveVehicleRequest);
    const disApproveVehicleRequestMutation = useMutation(disAppoveVehicleRequest)


    const fuelRequestMutation = useMutation(AppoveFuelRequest);
    const disApproveFuelRequestMutation = useMutation(disAppoveFuelRequest)

    const queryClient = useQueryClient();

    const handleApprove = () => {

        if(from === "fuelRequest"){
            fuelRequestMutation.mutate(id, {
                onSuccess: () => {
                
                    queryClient.invalidateQueries('fuel-requests')
                    Swal.fire({
                        icon: 'success',
                        title: 'Fuel Request Approved',
                        text: `Approved`,
                        
                    });
                }
            })
        } else {

            vehicleRequestMutation.mutate(id, {
                onSuccess: () => {
                
                    queryClient.invalidateQueries('vehicle-request')
                    Swal.fire({
                        icon: 'success',
                        title: 'Vehicle Request Approved',
                        text: `Approved`,
                        
                    });
                }
            })

        }

        

    }


    const handleDisApprove = () => {

        if(from === "fuelRequest"){
            disApproveFuelRequestMutation.mutate(id, {
                onSuccess: () => {
                
                    queryClient.invalidateQueries('fuel-requests')
                    Swal.fire({
                        icon: 'warning',
                        title: 'Fuel Request Disapproved',
                        text: `Disapproved`,
                        
                    });
                }
            })
        } else {

            disApproveVehicleRequestMutation.mutate(id, {
                onSuccess: () => {
                
                    queryClient.invalidateQueries('vehicle-request')
                    Swal.fire({
                        icon: 'warning',
                        title: 'Vehicle Request Disapproved',
                        text: `Disapproved`,
                        
                    });
                }
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

            <div className="morecard__link" style={{cursor: "pointer"}} onClick={handleApprove}>
                <Edit className="morecard__icon" />
                <p>Approve</p>
            </div>

            <div className="morecard__link" style={{cursor: "pointer"}} onClick={handleDisApprove}>
                <Cancel className="morecard__icon" />
                <p>Disapprove</p>
            </div>

            {/* <div className="morecard__link">
                <Assignment className="morecard__icon" />
                <p>Assign</p>
            </div> */}
        </div>
    )
}

export default MoreCard
