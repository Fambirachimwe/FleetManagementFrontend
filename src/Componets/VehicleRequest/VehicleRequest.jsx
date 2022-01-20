import { Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { connect } from 'react-redux';
import {  addVehicleRequest } from '../../api/api';
import "./VehicleRequest.css";
import Swal from 'sweetalert2';

const VehicleRequest = ({ vehicles }) => {

    const mutation = useMutation(addVehicleRequest);
    const queryClient = useQueryClient();

    const [selectVehicle, setSelectVehicle] = useState("");
    const [purpose, setPurpose] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        
        mutation.mutate({selectVehicle, purpose}, {
            onSuccess: () => {
                queryClient.invalidateQueries('vehicle-requests')
                Swal.fire({
                    // title: 'Err',
                    text: 'Request submited , the admin will process your request',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                
            }
        })


    }





    return (
        <div className="vehiclerequest">
            <div className="vehiclerequest__title">
                <h3>Vehicle Request</h3>
                {console.log(vehicles)}
            </div>

            <form className="vehiclerequest__form">

                <textarea value={purpose} onChange={(e)=> setPurpose(e.target.value)} placeholder="Purpose" id="" cols="30" rows="10"></textarea>


                <select onChange={(e) => setSelectVehicle(e.target.name)} name="Request for vehicle" id="cars" value={selectVehicle}>

                    {
                        vehicles.map(vehicle => (
                            <option key={vehicle.id} name={vehicle.id} value={selectVehicle}>{vehicle.attributes.name}</option>
                        ))
                    }

                </select>


                <Button onClick={handleSubmit}>Submit Request {mutation.isLoading ? <CircularProgress /> : null}</Button>


            </form>
        </div>
    )
}

const mapStateTopProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateTopProps)(VehicleRequest)
