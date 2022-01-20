// import { Commute } from '@mui/icons-material';
import Card from "../Card/Card"
import React from 'react';
import "./CardRowContainer.css";
// import { Commute } from "@mui/icons-material";
import { useQuery } from 'react-query';
import { fetchVehicles } from "../../api/api";
import { connect } from "react-redux";





const CardRowContainer = ({allVehicles, issues, vehicles}) => {

    const { data } = useQuery('vehicles', fetchVehicles);



    return (
        <div className="cardrowcontainer">

         

            <Card title="All Vehicles" data={data ? data.data.data.length : null} />

            <Card title="Issues" data={issues} />
            <Card title="Assigned Vehicles" data={ data ? data.data.data.filter((vehicle) => vehicle.attributes.status === "assigned").length : 0} />



        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default  connect(mapStateToProps)(CardRowContainer)
