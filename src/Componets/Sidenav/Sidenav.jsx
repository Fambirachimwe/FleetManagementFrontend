import React, { useEffect } from 'react';
import './Sidenav.css';
import SidenavHeader from './SidenavHeader';
import { Home, Commute, Group, GroupAdd, Warning, LocalGasStation, Inventory, Report, ExitToApp, LocalGasStationTwoTone, CommuteTwoTone } from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Sidenav = ({ isAuth, userLogout, user }) => {

    const navigate = useNavigate();

    console.log(user.data.user.myRole);

    useEffect(() => {
        if (isAuth === false || localStorage.getItem('token') === null) {
            navigate("/login");
        }
    }, []);


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("persist:root");
        userLogout();


    }
    return (
        <div className="sidenav">

            {/* Header */}
            <SidenavHeader />

            {/* Links */}

            <ul className="sidenav__links">


                {
                    user.data.user.myRole === "Authenticated" || user.data.user.myRole === null ? (
                        <>
                            <Link to='/fuel-request'><li className="link__item"><span><LocalGasStation /></span> Fuel Request</li></Link>

                            <Link to='/vehicle-request'><li className="link__item"><span><Commute /></span> Vehicle Request</li></Link>
                        </>
                    ) : (
                        <>

                            <Link to="/"><li className="link__item"><span><Home /></span>Dashboard</li></Link>
                            <Link to='/vehicles'><li className="link__item"> <span><Commute /></span> Vehicles</li></Link>

                            <Link to="/user-fuel-request"><li className="link__item"> <span><LocalGasStationTwoTone /></span>Fuel Request</li></Link>

                            <Link to="/user-vehicle-requests"><li className="link__item"> <span><CommuteTwoTone /></span> Vehicle Requests</li></Link>

                            <Link to="/issues"><li className="link__item"> <span><Warning /></span> Issues</li></Link>

                            <Link to="/users"><li className="link__item"> <span><GroupAdd /></span> Users</li></Link>

                            <Link to='/fuel'><li className="link__item"><span><LocalGasStation /></span> Fuel</li></Link>

                            <Link to='/reports'><li className="link__item"> <span><Report /></span>Reports</li></Link>
                        </>
                    )
                }


                <Link onClick={() => handleLogout()} to='#'><li className="link__item exit__link"> <span><ExitToApp /></span> Logout</li></Link>

            </ul>


        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => { dispatch({ type: "LOGOUT", isAuth: false }) },

    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav)
