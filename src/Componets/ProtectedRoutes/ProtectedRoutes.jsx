
import React from "react";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

 



const ProtectedRoute = ({ isAuth}) => {
    

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