import React, { useState } from 'react';
import './Reports.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button, ClickAwayListener } from '@mui/material';
import { connect } from 'react-redux';
import FuelRequestChart from '../FuelRequestChart/FuelRequestChart';
import { useQuery } from 'react-query';

import {fetchFuel, fetchVehicles} from '../../api/api'


const Reports = ({allVehicles}) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [open, setOpen] = useState(false)

    const { data } = useQuery("fuel",fetchFuel);

    const vehicles = useQuery("vehicles", fetchVehicles);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
  

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="reports">

            <div className="filter__btn">
                <Button onClick={() => setOpen(!open)}>Filter date</Button>
            </div>

            {
                open &&
                <ClickAwayListener onClickAway={() => setOpen(false)}>

                    <div className="date">
                        < DateRangePicker
                            ranges={[selectionRange]}
                            onChange={handleSelect}
                        />
                        <Button onClick={() => setOpen(false)} >Apply</Button>
                    </div>

                </ClickAwayListener>


            }

            <div className="reports__details">

                <div className="reports__detail__option">

                    <div className="reports__detail__option__header">
                        <h2>Vehicles</h2>
                        <div className="export__button"><Button>Export</Button></div>
                    </div>


                    <div className="reports__detail__card">


                        <div className="card__details">
                            <div className="card__detail__row">
                                <h3>All Vehicles</h3>
                                <p>{allVehicles}</p>
                            </div>

                            <div className="card__detail__row">
                                <h3>Assigned Vehicles</h3>

                                {/* {vehicles ? console.log(vehicles) : null} */}
                                <p>{vehicles.data ? vehicles.data.data.data.filter((vehicle) => vehicle.attributes.status === "assigned").length : null}</p>
                            </div>

                            <div className="card__detail__row">
                                <h3>Out of service Vehicles</h3>
                                <p>{vehicles.data ? vehicles.data.data.data.filter((vehicle) => vehicle.attributes.status === "outofservice").length || 0 : null}</p>
                            </div>


                        </div>
                    </div>
                </div>

                {/* <div className="reports__detail__option">

                    <div className="reports__detail__option__header">
                        <h2>Issues</h2>
                        <div className="export__button"><Button>Export</Button></div>
                    </div>


                    <div className="reports__detail__card">


                        <div className="card__details">
                            <div className="card__detail__row">
                                <h3>All Vehicles</h3>
                                <p>200</p>
                            </div>

                            <div className="card__detail__row">
                                <h3>Assigned Vehicles</h3>
                                <p>200</p>
                            </div>

                            <div className="card__detail__row">
                                <h3>Out of service Vehicles</h3>
                                <p>200</p>
                            </div>


                        </div>
                    </div>
                </div> */}

                <div className="reports__detail__option">

                    <div className="reports__detail__option__header">
                        <h2>Fuel</h2>
                        <div className="export__button"><Button>Export</Button></div>
                    </div>


                    <div className="reports__detail__card">


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

        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        ...state
    }

}

export default connect(mapStateToProps)(Reports)
