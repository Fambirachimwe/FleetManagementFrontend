import { MoreHoriz, MoreVert } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { connect } from 'react-redux';
import { fetchVehicleRequest } from '../../api/api';
import MoreCard from '../MoreCard/MoreCard';

const UserVehicleRequest = ({user}) => {
    const { data } = useQuery('vehicle-request', fetchVehicleRequest);


    const [open, setOpen] = useState(null);
    const [openModal, setOpenModal] = useState(false)


    const handleOpen = (index) => {

        setOpen(open === index ? null : index)

    }


    return (
        <div style={{ margin: "32px" }} className="userFuel">

           
            <div className="vehicles__header">
                <h3 className="vehicles__header__title">Vehicle Requests</h3>


                
            </div>
            <table className="vehicles__data__table">

                <thead>
                    <th>id</th>
                    <th>Purpose</th>
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
                                    <td>{vehicle.attributes.purpose}</td>
                                    <td>{vehicle.attributes.approved !== true ? "False" : ("True")}</td>

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
                                                        <MoreCard id={vehicle.id} url={`/vehicle-request/${vehicle.id}`} from={"vehicleRequest"} /> : null
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
};

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(UserVehicleRequest);
