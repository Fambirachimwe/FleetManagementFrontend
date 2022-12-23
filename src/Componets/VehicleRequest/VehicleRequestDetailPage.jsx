import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { fetchVehicleRequestById } from '../../api/api';
import './VehicleRequestDetailPage.css'

const VehicleRequestDetailPage = () => {


    const { id } = useParams();
    const { data } = useQuery(['vehicleRequestById', id], () => fetchVehicleRequestById(id));

    console.log(data)
    return (
        <div className="vehiclerequest">


            <div className="vehiclerequest__title">
                <h3> Request ID: {id} </h3>
                {/* {console.log(vehicles)} */}

                <div className="details">


                    <div className="details_contents">

                        <table className="vehicles__data__table">


                            <tbody>

                                <tr>
                                    <td>Applicant</td>
                                    <td>{data?.data?.data.attributes.applicant.data.attributes.username}</td>
                                </tr>

                                <tr>
                                    <td>Status</td>
                                    <td>{data?.data?.data.attributes.approved !== true ? ("Pending") : ("Approved")}</td>
                                </tr>

                                <tr>
                                    <td>Purpose</td>
                                    <td>{data?.data?.data.attributes.purpose}</td>
                                </tr>

                                <tr>
                                    <td>Vehicle</td>
                                    <td>{data?.data?.data.attributes.vehicle.data.attributes.name + " " + data?.data?.data.attributes.vehicle.data.attributes.licenceNumber}</td>
                                </tr>

                            </tbody>
                        </table>





                    </div>



                </div>
            </div>


        </div>
    )
}

export default VehicleRequestDetailPage
