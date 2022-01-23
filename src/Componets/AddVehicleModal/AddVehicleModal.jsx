// import { Commute, FourMp } from '@mui/icons-material';
import { Button, ClickAwayListener } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import './AddVehicleModal.css';
import {useMutation, useQueryClient} from "react-query";
import { addVehicle } from '../../api/api';
import Swal from 'sweetalert2'


// import FourMpIcon from '@mui/icons-material/FourMp';


const AddVehicleModal = ({ setOpenModal }) => {

    const mutation = useMutation(addVehicle)
    const queryClient = useQueryClient();


    const [name, setName] = useState("");
    const [licenceNumber, setLicenceNumber] = useState("")
    const [type, setType] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")
    // const [Imgaes, setImages] = useState(null)
    // const [name, setName] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        // const data = {name, licenceNumber, type, year, model};

        mutation.mutate({name, licenceNumber, type, year, model}, {
            onSuccess: () => {
                
                queryClient.invalidateQueries('vehicles')
                Swal.fire({
                    icon: 'success',
                    title: 'Vehicle Registration',
                    text: `Vehicle successfull registered`,
                    
                });
            }, 

            onError: () => {
                // queryClient.invalidateQueries('vehicles')
                Swal.fire({
                    icon: 'warning',
                    title: 'Vehicle Registration Failed',
                    text: `Vehicle not registered`,
                    
                });
            }
        })

    }


    const handleChange = (e) => {

        const field = e.target.name || "";
        switch (field) {
            case "name":
                setName(e.target.value);
                // console.log(e.target.value)
                break

            case "licenceNumber":
                setLicenceNumber(e.target.value)
                break

            case "type":
                setType(e.target.value)
                break
            
            case "model":
                setModel(e.target.value)
                break

            case "year":
                setYear(e.target.value)
                break

            // case "images":
            //     setImages(e.target.value)
            //     break

           

            default:
                break;
        } 


    }

   






    return (
        <div className="addvehicle">

           


            <ClickAwayListener onClickAway={() => setOpenModal(false)}>

            <div className="addvehicle__container">
                <h3 style={{ marginBottom: "20px" }}>Add Vehicle</h3>

                <form className="add_vehicle__container">

                    <div className="input__option">
                        <input onChange={handleChange} type="text" name="name" className="add__input" placeholder="Name" x />
                    </div>

                    <div className="input__option">
                        <input onChange={handleChange} type="text" name="licenceNumber" className="add__input" placeholder="LicenceNumber" x />
                    </div>
                    <div className="input__option">
                        <input onChange={handleChange} type="text" className="add__input" name="type" placeholder="Type" x />
                    </div>

                    <div className="input__option">
                        <input onChange={handleChange} type="date" className="add__input" name="year" placeholder="year" x />
                    </div>

                    <div className="input__option">
                        <input onChange={handleChange} type="text" className="add__input" placeholder="Model" name="model" x />
                    </div>

                    {/* <div className="input__option">
                        <input type="file" className="add__input" placeholder="Images" name="images" x />
                    </div> */}



                    <div className="btn__container">
                        <Button>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>

                    </div>


                </form>
            </div>
                
            </ClickAwayListener>
            

        </div>
    )
}

export default AddVehicleModal
