
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { connect } from 'react-redux';
import { fetchVehicleRequest } from '../../api/api';
import MoreCard from '../MoreCard/MoreCard';
import UserVehicleTable from './UserVehicleTable';

const UserVehicleRequest = ({ user }) => {
    const { data } = useQuery('vehicle-request', fetchVehicleRequest);

    const vehicleRequests = data?.data?.data





    return (
        <div style={{ margin: "32px" }} className="userFuel">


            <div className="vehicles__header">
                <h3 className="vehicles__header__title">Vehicle Requests</h3>



            </div>

            <UserVehicleTable data={vehicleRequests} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(UserVehicleRequest);
