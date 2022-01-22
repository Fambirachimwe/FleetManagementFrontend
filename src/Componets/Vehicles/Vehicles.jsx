import { Button, ClickAwayListener, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import "./Vehicles.css";
import { MoreHoriz, MoreVert } from "@mui/icons-material";
import MoreCard from "../MoreCard/MoreCard";
import { useQuery } from 'react-query';
import { fetchVehicles } from '../../api/api';
// import AddVehicle from '../AddVehicleModal/AddVehicleModal';
import AddVehicleModal from '../AddVehicleModal/AddVehicleModal';
import { connect } from 'react-redux';
// import Swal from 'sweetalert2';




const Vehicles = () => {

    const { data } = useQuery('vehicles', fetchVehicles);

    const [open, setOpen] = useState(null);
    const [openModal, setOpenModal] = useState(false)
   

    const handleOpen = (index) => {

        setOpen(open === index ? null : index)

    }
    

    return (
        <div className="vehicles">

            { openModal &&
                <ClickAwayListener onClickAway={() => setOpenModal(false)}>
                    <AddVehicleModal setOpenModal={setOpenModal} />
                </ClickAwayListener>

            }




            <div className="vehicles__header">
                <h3 className="vehicles__header__title">Vehicles</h3>
            

                <div className="vehicles__header__filters">
                    <Button onClick={() => setOpenModal(!openModal)}>Add Vehicles</Button>
                    <Button>All</Button>
                    <Button>Assigned</Button>
                    <Button>OOF</Button>
                </div>
            </div>




            <table className="vehicles__data__table">

                <thead>
                    <th>id</th>
                    <th>Name</th>
                    <th>Licence#</th>
                    <th>Model</th>
                    {/* <th>Department</th> */}
                    <th><MoreHoriz/></th>
                </thead>

                {/* <Divider /> */}


                <tbody>

                    

                    {

                        data ? (
                            data.data.data.map(vehicle => (
                                <tr key={vehicle.id} >
                                    <td>{vehicle.id}</td>
                                    <td>{vehicle.attributes.name}</td>
                                    <td>{vehicle.attributes.licenceNumber}</td>
                                    <td>{vehicle.attributes.model}</td>
                                    {/* <td>{vehicle.attributes.department ? vehicle.attributes.department.data.attributes.name : "N/A"}</td> */}
                                    <td>

                                        <Tooltip
                                            PopperProps={{
                                                disablePortal: true,
                                            }}
                                            //   onClose={handleTooltipClose}
                                            onClose={() => handleOpen(null)}
                                            open={open === vehicle.id}
                                            disableFocusListener
                                            disableHoverListener
                                            disableTouchListener
                                            title="">
                                            <div>

                                                <MoreVert onClick={() => handleOpen(vehicle.id)} />

                                                {
                                                    open === vehicle.id ?
                                                        <MoreCard id={vehicle.id} url={`/vehicles`} /> : null
                                                }
                                            </div>
                                        </Tooltip>

                                    </td>
                                </tr>

                            ))
                        ) : null



                    }


                </tbody>

            </table>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        ...state
    }
}


const mapDispatchTOProps = (dispatch) => {
    return {
        allVehicle : (vehicles) => { dispatch({ type: "ALL_VEHICLE_LENGTH", allVehicles: vehicles }) }
    }
}


export default  connect(mapStateToProps, mapDispatchTOProps)(Vehicles)
