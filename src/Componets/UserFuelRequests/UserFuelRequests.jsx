
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { connect } from 'react-redux';
import { fetchFuelRequest } from '../../api/api';
import UserFuelRequestTable from './UserFuelRequestTable';
import UserFuelRequestTableAdmin from './UserFuelRequestTableAdmin';



const UserFuelRequests = ({ user }) => {




    const { data } = useQuery('fuel-requests', fetchFuelRequest);





    return (
        <div style={{ margin: "32px" }} className="userFuel">


            <div className="vehicles__header">
                <h3 className="vehicles__header__title">Fuel Requests</h3>



            </div>

            <UserFuelRequestTableAdmin data={data} />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(UserFuelRequests)
