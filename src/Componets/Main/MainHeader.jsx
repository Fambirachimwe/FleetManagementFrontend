import React from 'react';
import "./MainHeader.css";
import { Home, ChevronRight, Notifications } from "@mui/icons-material";
// import { useLocation } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useLocation } from 'react-router';

const MainHeader = () => {

    const location = useLocation()

    
   
    return (
        <div className="mainheader">
            <div className="mainheader__left__container">
                <Home />
                <ChevronRight />
                <h3 className="mainheader__title">Dashboard</h3>
                <ChevronRight />
                <h4 style={{color: "#008d57"}} className="mainheader__title">{location.pathname.slice(1)}</h4>

            </div>

            <div className="mainheader__right__container">
                <Notifications className="mainIcons"/>
                <Avatar className="mainIcons" />
            </div>



        </div>
    )
}

export default MainHeader
