import { MoreHoriz, MoreVert } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { connect } from 'react-redux';
import { fetchFuelRequest } from '../../api/api';

import Construction from "../../images/construction.svg";
import MoreCard from '../MoreCard/MoreCard';

const UserFuelRequests = ({user}) => {

   


    const { data } = useQuery('fuel-requests', fetchFuelRequest);


    const [open, setOpen] = useState(null);
    // const [openModal, setOpenModal] = useState(false)


    const handleOpen = (index) => {

        setOpen(open === index ? null : index)

    }


    return (
        <div style={{ margin: "32px" }} className="userFuel">


            <div className="vehicles__header">
                <h3 className="vehicles__header__title">Fuel Requests</h3>


                
            </div>
            <table className="vehicles__data__table">

                <thead>
                    <th>id</th>
                    <th>Volume</th>
                    <th>Type</th>
                    <th>Request Type</th>
                   

                    <th>Status</th>
                    <th>Applicant</th>


                    <th><MoreHoriz /></th>
                </thead>

                {/* <Divider /> */}


                <tbody>



                    {

                        data ? (
                            data.data.data.map(vehicle => (
                                <tr key={vehicle.id} >
                                    <td>{vehicle.id}</td>
                                    <td>{vehicle.attributes.volume}</td>
                                    <td>{vehicle.attributes.typeOfFuel}</td>
                                    <td>{vehicle.attributes.typeOfRequest}</td>
                                    <td>{vehicle.attributes.approved === null ? "Pendding" : (
                                        vehicle.attributes.approved ? ("Approved") : ("Disaaproved")
                                    )}</td>

                                    <td>{vehicle.attributes.applicant.data ? vehicle.attributes.applicant.data.attributes.username : "N/A"}</td>

                                 
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
                                                        <MoreCard id={vehicle.id} url={`/vehicle-request/${vehicle.id}`} from={"fuelRequest"} /> : null
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

export default connect(mapStateToProps)(UserFuelRequests)
