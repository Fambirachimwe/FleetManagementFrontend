import React, { useState } from 'react';
import Construction from "../../images/construction.svg";
import MoreCard from '../MoreCard/MoreCard';
import { MoreHoriz, MoreVert } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import MoreCardUser from '../MoreCard/MoreCardUser';
import { connect } from 'react-redux';

const UserFuelRequestTable = ({ data, user }) => {

    const [open, setOpen] = useState(null);
    // const [openModal, setOpenModal] = useState(false)


    // console.log(data)


    const handleOpen = (index) => {

        setOpen(open === index ? null : index)

    }
    return (
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
                        data.map(vehicle => (
                            <tr key={vehicle.id} >
                                <td>{vehicle.id}</td>
                                <td>{vehicle.attributes.volume}</td>
                                <td>{vehicle.attributes.typeOfFuel}</td>
                                <td>{vehicle.attributes.typeOfRequest}</td>
                                <td>{vehicle.attributes.approved === null ?

                                    "Pending" : (
                                        vehicle.attributes.approved ? ("Approved") :
                                            vehicle.attributes.approved ? false : ("Disaproved")
                                    )}

                                </td>

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

                                                    user?.data.user.myRole === "Authenticated" ? (
                                                        <MoreCardUser id={vehicle.id} url={`/vehicle-request`} />
                                                    ) : (
                                                        <MoreCard from={"fuelRequest"} id={vehicle.id} url={`/vehicle-request`} />
                                                    )

                                                    : null

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
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(UserFuelRequestTable)
