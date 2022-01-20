import React, { useRef } from 'react';
import "./FuelRequestChart.css";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useQuery } from 'react-query';
import { fetchFuelRequest } from '../../api/api';


const FuelRequestChart = () => {

    const { data } = useQuery("fuel-request", fetchFuelRequest);

    function formatMyDate(value, locale = 'en-GB') {
        return new Date(value).toLocaleDateString(locale);
    }
    
    // const timestamp = '2021-09-01T15:21:39.862Z';
    // console.log('Timestamp:', timestamp);
    // console.log('Formatted date:', formatMyDate(timestamp));



    const chartData = {
        displayTitle: "Fuel Request",
        labels: [...data ?
            (
                (data.data.data.map(_label => {
                    return formatMyDate(_label.attributes.createdAt)
                }))) : []
        ],

        datasets: [
            {
                label: 'Fuel Requests',
                data: [
                    ...data ?
                        (
                            data.data.data.map(_label => {
                                return _label.attributes.volume
                            })) : []
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }
        ]
    }

    const ref = useRef("myref")
    return (
        <div className="chart">

            {
                data ? (console.log(data.data.data)) : null
            }

            <Bar ref={ref}
                data={chartData}
                options={{
                    title: {
                        display: chartData.displayTitle,
                        text: 'Largest Cities In ' + "City",
                        fontSize: 25
                    },
                    // legend: {
                    //     display: this.props.displayLegend,
                    //     position: this.props.legendPosition
                    // }
                }}
            />
        </div>
    )
}

export default FuelRequestChart
