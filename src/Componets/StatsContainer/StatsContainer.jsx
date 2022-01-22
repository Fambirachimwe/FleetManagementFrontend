import { Button } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { fetchVehicles } from '../../api/api';
import FuelRequestChart from '../FuelRequestChart/FuelRequestChart';
import "./StatsContainer.css";



const StatsContainer = () => {

    const {data} = useQuery('vehicles', fetchVehicles);





    return (
        <div className="statscontainer">

            {data ? console.log(data) : null}

            <div className="statscontainer__fuel__card">
                <FuelRequestChart/>
            </div>           

            <div className="statscontainer__status__card">
                <p>Status</p>
                
                <div className="statscontainer__status__card__row">
                <Button>Active</Button>

                <p>{data ? data.data.data.filter(data => {
                    return data.attributes.status === "active"
                }).length : null}</p>

                </div>

                <div className="statscontainer__status__card__row">
                <Button>Assigned</Button>

                <p>{data ? data.data.data.filter(data => {
                    return data.attributes.status === "assigned"
                }).length : null}</p>
                </div>

                <div className="statscontainer__status__card__row">
                <Button>OOF</Button>
                

                <p>{data ? data.data.data.filter(data => {
                    return data.attributes.status === "outofservice"
                }).length : null}</p>
                </div>
                

            </div>

        </div>
    )
}

export default StatsContainer
