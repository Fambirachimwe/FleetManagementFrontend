import React from 'react';
import "./SidenavHeader.css"
import { Menu } from "@mui/icons-material";
import { Link } from '@mui/material';
// import './Sidenav.css';

const SidenavHeader = () => {
    return (
        <div className="sidenavHeader">


            <h2 className="sidenavHeader__title ">RLB Fleet Management <span>System</span></h2>
            <div className="sidenavHeader__menu">
                <Menu className="menu_icon" />
            </div>




        </div>
    )
}

export default SidenavHeader
