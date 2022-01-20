
import React from "react";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from '../../api/api';




const ProtectedRoute = ({ isAuth, login }) => {
    // console.log(isAuthenticated())
    console.log(isAuth)


    return (
        isAuth ? <Outlet /> : <Navigate to="/login" />
    );


}

const mapStateToProps = (state) => {

    return {
        ...state
    }

}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: () => { dispatch({ type: "LOGOUT", isAuth: false }) },

//     }
// }




export default connect(mapStateToProps)(ProtectedRoute);