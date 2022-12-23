import React from 'react';
import "./MainApp.css";
import { fetchFuelRequest, fetchVehicleRequest } from '../../api/api';
import { useQuery } from 'react-query';
import UserVehicleTable from '../UserVehicleRequest/UserVehicleTable';
import { connect } from 'react-redux';
import UserFuelRequestTable from '../UserFuelRequests/UserFuelRequestTable';

const CustomerMain = ({ user }) => {

    const { data } = useQuery('vehicle-request', fetchVehicleRequest);

    const myFuelRequests = useQuery('fuel-requests', fetchFuelRequest);

    const __myFuelRequests = myFuelRequests.data?.data?.data.filter(req => {
        return req.attributes.applicant.data.id = user.data.user.id
    })
    // console.log(user.data.user.id)
    const myVehicleRequests = data?.data?.data?.filter(request => {
        return request.attributes.applicant.data?.id === user.data.user.id
    });

    // console.log(myVehicleRequests)
    return (
        <div className="mainapp">

            {/* the main app components */}


            <div className="fuelrequest__title">
                <h3>My Vehicle requests</h3>
            </div>

            <UserVehicleTable data={myVehicleRequests} />

            <br />
            <br />
            <br />

            <div className="fuelrequest__title">
                <h3>Fuel Requests</h3>
            </div>

            <UserFuelRequestTable data={__myFuelRequests} />




        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => { dispatch({ type: "LOGOUT", isAuth: false }) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerMain)
