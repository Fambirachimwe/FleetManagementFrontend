import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addFuelRequest } from '../../api/api';
import "./FuelRequest.css";
import Swal from 'sweetalert2';
import { connect } from 'react-redux';


const FuelRequest = ({user}) => {

    console.log(user)

    const [typeOfRequest, setTypeOfRequest] = useState("")
    const [volume, setVolume] = useState(0)
    const [typeOfFuel, setFuelType] = useState("")
    const [purpose, setPurpose] = useState("")
    const [millage, setMillage] = useState(0);

    const applicant = user.data.user.id
    console.log(applicant)

    const mutation = useMutation(addFuelRequest);
    const queryClient = useQueryClient();

    const handleSubmit = (e) => {

        e.preventDefault();
        mutation.mutate({ typeOfRequest, volume, typeOfFuel, purpose, millage, applicant}, {
            onSuccess: () => {
                queryClient.invalidateQueries('fuel-requests')
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
        <div className="fuelrequest">
            {
                console.log(user)
            }
            <div className="fuelrequest__title">
                <h3>Fuel Request</h3>
            </div>

            <form className="fuel__request__form">
                <select value={typeOfRequest} onChange={(e) => setTypeOfRequest(e.target.value)} name="Request for" id="cars">
                    <option value="topUpVehicle">Top Up Vehicle</option>
                    <option value="personalCar">Personal Car</option>
                </select>

                <input onChange={(e) => setVolume(e.target.value)} type="number" value={volume} placeholder="Volume" />
                <input type="text" onChange={(e) => setFuelType(e.target.value)} value={typeOfFuel} placeholder="Type of Fuel" />

                {/* <input type="text" placeholder="purpose" /> */}

                <textarea name="" id="" value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder="purpose" cols="30" rows="5"></textarea>


                <input type="number" value={millage} onChange={(e) => setMillage(e.target.value)} placeholder="Millage" />


                <Button onClick={handleSubmit}>Submit Request</Button>


            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(FuelRequest)
