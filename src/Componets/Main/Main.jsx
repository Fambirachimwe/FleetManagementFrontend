import React from 'react';
import "./Main.css";
import MainHeader from './MainHeader';
import { Route, Routes } from 'react-router-dom';
import Vehicles from "../Vehicles/Vehicles"
import MainApp from "./ManApp";
import VehicleDetail from '../VehicleDetail/VehicleDetail';
import Fuel from '../Fuel/Fuel';
import Reports from '../Reports/Reports';
import VehicleRequest from '../VehicleRequest/VehicleRequest';
import FuelRequest from '../FuelRequest/FuelRequest';
import Users from '../Users/Users';
import { connect } from 'react-redux';
import UserFuelRequests from '../UserFuelRequests/UserFuelRequests';



const Main = ({ user }) => {

    console.log(user)
    return (
        <div className="main">
            <MainHeader />

            <div className="main__routes__container">
                <Routes>

                    {
                        user.data.user.myRole === "Authenticated" ? 
                        (
                            <Route path="/fuel-request" element={<FuelRequest />} />
                        ) : 
                        
                        (
                            <Route path="/" element={<MainApp />} />
                        )
                    }




                    <Route path="/vehicles" element={<Vehicles />} />

                    <Route path="/vehicles/:id" element={<VehicleDetail />} />
                    <Route path="/reports" element={<Reports />} />

                    <Route path="/vehicle-request" element={<VehicleRequest />} />

                    <Route path="/fuel-request" element={<FuelRequest />} />
                    <Route path="/users" element={<Users />} />

                    <Route path="/user-fuel-request" element={<UserFuelRequests />} />

                    <Route path="/user-vehicle-requests" element={<UserFuelRequests />} />

                    <Route path="/issues" element={<UserFuelRequests />} />





                    <Route path="/fuel" element={<Fuel />} />
                    <Route path="/reports" element={<Vehicles />} />


                </Routes>
            </div>



        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Main)
