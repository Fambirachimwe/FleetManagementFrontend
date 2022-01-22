import React from 'react';
import { useQuery } from 'react-query';
import { fetchFuel } from '../../api/api';
import FuelRequestChart from '../FuelRequestChart/FuelRequestChart';
import './Fuel.css';



const Fuel = () => {


    const { data } = useQuery("fuel", fetchFuel);

    return (
        <div className="fuel">

            {data ? (console.log(data)) : null}

            <div className="reports__detail__option">

                <div className="reports__detail__card__fuel">


                    <div className="card__details">
                        <div className="card__detail__row">
                            <h3>Total Volume</h3>
                            <p>{data ? data.data.data[0].attributes.Volume : 0} Litres</p>
                        </div>

                        <FuelRequestChart />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Fuel
