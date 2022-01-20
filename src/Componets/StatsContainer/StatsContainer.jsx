import { Button } from '@mui/material';
import React from 'react';
import FuelRequestChart from '../FuelRequestChart/FuelRequestChart';
import "./StatsContainer.css";



const StatsContainer = () => {
    return (
        <div className="statscontainer">

            <div className="statscontainer__fuel__card">
                <FuelRequestChart/>
            </div>           

            <div className="statscontainer__status__card">
                <p>Status</p>
                
                <div className="statscontainer__status__card__row">
                <Button>Active</Button>

                <p>6</p>
                </div>

                <div className="statscontainer__status__card__row">
                <Button>Assigned</Button>

                <p>2</p>
                </div>

                <div className="statscontainer__status__card__row">
                <Button>OOF</Button>
                

                <p>3</p>
                </div>
                

            </div>

        </div>
    )
}

export default StatsContainer
