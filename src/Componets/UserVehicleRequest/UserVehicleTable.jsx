
import { Tooltip } from '@mui/material'
import React, { useState } from 'react'
import MoreCard from '../MoreCard/MoreCard'
import { MoreHoriz, MoreVert } from '@mui/icons-material';
import MoreCardUser from '../MoreCard/MoreCardUser';
import { connect } from 'react-redux';


const UserVehicleTable = ({ data, user }) => {

    const [open, setOpen] = useState(null);
    const [openModal, setOpenModal] = useState(false)

    // console.log(user)


    const handleOpen = (index) => {

        setOpen(open === index ? null : index)

    }
    return (
        <div>
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
                            data.map(vehicle => (
                                <tr key={vehicle.id} >
                                    <td>{vehicle.id}</td>
                                    <td>{vehicle.attributes.purpose}</td>
                                    <td>{vehicle.attributes.approved === true ? "Approved" :
                                        vehicle.attributes.approved === false ? ("Disaproved") : "Pending"

                                    }
                                    </td>

                                    <td>{vehicle?.attributes.applicant?.data ? vehicle.attributes.applicant.data.attributes.username : "N/A"}</td>


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


                                                        user.data.user.myRole === "Authenticated" ? (
                                                            <MoreCardUser id={vehicle.id} url={`/vehicle-request`} />
                                                        ) : (
                                                            <MoreCard id={vehicle.id} url={`/vehicle-request`} />
                                                        )




                                                        : null
                                                }
                                            </div>
                                        </Tooltip>

                                    </td>
                                </tr>

                            ))
                        ) : "No data"



                    }


                </tbody>

            </table>

        </div>
    )
}


const mapStateTopProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateTopProps)(UserVehicleTable)
