import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { fetchFuelRequestById } from '../../api/api';
import '../VehicleRequest/VehicleRequestDetailPage.css'

const FuelRequestDetailPage = () => {


    const { id } = useParams();
    const { data } = useQuery(['fuelRequestById', id], () => fetchFuelRequestById(id));

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
                                    <td>Request Type</td>
                                    <td>{data?.data?.data.attributes.typeOfRequest}</td>
                                </tr>

                                <tr>
                                    <td>Status</td>
                                    <td>{data?.data?.data.attributes.approved === null ? ("Pending") :
                                        data?.data?.data.attributes.approved === true ? ("Approved") : ("Disapproved")
                                    }</td>
                                </tr>

                                <tr>
                                    <td>Purpose</td>
                                    <td>{data?.data?.data.attributes.purpose}</td>
                                </tr>

                                <tr>
                                    <td>Fuel Type</td>
                                    <td>{data?.data?.data.attributes.typeOfFuel}</td>

                                </tr>

                                <tr>
                                    <td>Volume</td>
                                    <td>{data?.data?.data.attributes.volume}</td>

                                </tr>

                            </tbody>
                        </table>





                    </div>



                </div>
            </div>


        </div>
    )
}

export default FuelRequestDetailPage
