import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { connect } from 'react-redux';
import { fetchIssuses, fetchVehicles } from '../../api/api';
import Main from '../Main/Main';
import Sidenav from '../Sidenav/Sidenav';
import "./Home.css"

const Home = ({ allVehicles, allIssues, issues, vehicles }) => {


    const { data } = useQuery('vehicles', fetchVehicles);
    const issues_length = useQuery('issues', fetchIssuses);

    useEffect(() => {

        if (data) {
            allVehicles(data.data.data.length);
            vehicles(data.data.data);
        }

        if (issues_length.isSuccess) {
            // console.log(issues_length.data.data.data.length)
            // const isssueLength = issues.data.data.length;
            allIssues(issues_length.data.data.data.length);
        }


    }, [issues, vehicles])



    return (
        <div className="home">
            <Sidenav />
            <Main />
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
        allVehicles: (vehicles) => { dispatch({ type: "ALL_VEHICLE_LENGTH", allVehicles: vehicles }) },

        allIssues: (issues) => {
            dispatch({
                type: "ALL_ISSUES",
                issues: issues
            })
        },

        vehicles: (vehicles) => { dispatch({ type: "VEHICLES", vehicles: vehicles }) },


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
