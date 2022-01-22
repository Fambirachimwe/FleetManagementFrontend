import { ChevronLeft, OpenInNew } from '@mui/icons-material';
import { Avatar, Button, IconButton, LinearProgress } from '@mui/material';
import React from 'react';
import "./VehicleDetail.css";
import { fetchVehicleById } from '../../api/api'
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
// import 'react-placeholder/lib/reactPlaceholder.css';


const VehicleDetail = () => {

    const { id } = useParams();
    const { data } = useQuery(['vehicleById', id], () => fetchVehicleById(id));
    // console.log(data.data);
    const navigate = useNavigate()


    return (
        <div className="vehicledetail">

            {
                data ?
                    // console.log(data.data.data)
                    <div className="vehicledetail__header">
                        <div className="vehicledetail__header__left">
                            <IconButton onClick={() => navigate('/vehicles')} className="back__icon">
                                <ChevronLeft />

                            </IconButton>

                            <div className="name"><h3>{data.data.data.attributes.name}<span>{data.data.data.attributes.licenceNumber}</span></h3></div>
                        </div>

                        <Button>Assign</Button>
                    </div>

                    : null
            }



            <div className="vehicledetails__content">
                <div className="image__container">

                    <ReactPlaceholder showLoadingAnimation type='rect' rows={20} ready={false}>
                        <LinearProgress />
                    </ReactPlaceholder>
                </div>




                {
                    data ?

                        <table className="details">
                            <th></th>
                            <th></th>
                            <tbody>
                                <tr>
                                    <td>Model</td>
                                    <td>{data.data.data.attributes.model}</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>{data.data.data.attributes.year}</td>
                                </tr>
                                <tr>
                                    <td>Department</td>
                                    {/* <td>{data.data.data.attributes.department.data.attributes.name}</td> */}
                                </tr>
                                <tr>
                                    <td>Service history</td>
                                    <td className="openinnew"><OpenInNew /></td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td className="statusButton"><Button >active</Button></td>
                                </tr>
                                <tr><td>Oparator</td> <Avatar /></tr>
                            </tbody>
                        </table> :
                        null
                }

                {/* </div> */}
            </div>




        </div>
    )
}

export default VehicleDetail
