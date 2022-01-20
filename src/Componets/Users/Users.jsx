import { MoreHoriz, MoreVert } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchUsers } from '../../api/api';
import MoreCard from '../MoreCard/MoreCard';
import './Users.css'

const Users = () => {

    const { data } = useQuery("users", fetchUsers);

    const [open, setOpen] = useState(null);
    const [openModal, setOpenModal] = useState(false)


    const handleOpen = (index) => {

        setOpen(open === index ? null : index)

    }


    return (
        <div className="users">

            {
                data ? (console.log(data.data)) : null
            }

            <div className="vehicles__header userTitle">
                <h3 className="vehicles__header__title  userTitle">Users</h3>


            </div>
            <table className="vehicles__data__table">

                <thead>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                   
                    <th>Role</th>
                    <th><MoreHoriz/></th>
                </thead>

                {/* <Divider /> */}


                <tbody>

                    {



                        data ? (
                            data.data.map(user => (
                                <tr key={user.id} >
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                   
                                    <td>{user.myRole}</td>
                                    {/* <td>{vehicle.attributes.department.data.attributes.name ? vehicle.attributes.department.data.attributes.name : "N/A"}</td> */}
                                    <td>

                                        <Tooltip
                                            PopperProps={{
                                                disablePortal: true,
                                            }}
                                            //   onClose={handleTooltipClose}
                                            onClose={() => handleOpen(null)}
                                            open={open === user.id}
                                            disableFocusListener
                                            disableHoverListener
                                            disableTouchListener
                                            title="">
                                            <div>

                                                <MoreVert onClick={() => handleOpen(user.id)} />

                                                {
                                                    open === user.id ?
                                                        <MoreCard id={user.id} url={``} /> : null
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

export default Users
