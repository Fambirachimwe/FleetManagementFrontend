
const initState = {
    isAuth: false,
    user: {},
    allVehicles: 0,
    issues: 0,
    vehicles: {}


}


const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'LOGGED_IN':
            return {
                ...state,
                isAuth: action.isAuth
            }

        case 'LOGOUT':
            return {
                ...state,
                isAuth: action.isAuth
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'ALL_VEHICLE_LENGTH':
            return {
                ...state,
                allVehicles: action.allVehicles
            }

        case 'ALL_ISSUES':
            return {
                ...state,
                issues: action.issues
            }

        case 'VEHICLES':
            return {
                ...state,
                vehicles: action.vehicles
            }



        default:
            return state
    }
};





export default rootReducer