import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';
import { store } from '../stateManagement/store';
const base_url = "http://localhost:1337/api"
// base url
// axios

// login 




export const register =  (username, email, password) => {

    return axios.post(`${base_url}/auth/local/register`,{
        username: username,
        email: email,
        password: password
    });
    

}


export const login = async (identifier, password) => {

    const response = await axios.post(`${base_url}/auth/local`, {
        identifier: identifier,
        password: password
    });

    return response;

}




export const fetchVehicles = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${base_url}/vehicles?populate=*`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return response;
}



export const fetchVehicleById = async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${base_url}/vehicles/${id}?populate=*`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return response;
}


export const  addVehicle = async (data) => {
    const token = localStorage.getItem('token');
    const response = await axios({
        method: "post",
        url: `${base_url}/vehicles/`,
        data: {data},
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return response
}


export const isAuthenticated = async () => {
    const token = localStorage.getItem('token');
    var isAuth;

    if(token){
        await axios({
            method: "GET",
            url: `${base_url}/users/me`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(data => {

            if(data.status === 200){
                console.log(isAuth)
                isAuth = true
                store.dispatch({ type: "LOGGED_IN", isAuth: isAuth })
                console.log(isAuth)
            } else{
                isAuth = false;
                store.dispatch({ type: "LOGOUT", isAuth: isAuth })
                // return <Navigate to="/login"/>
            }

        }) 
    
    } else {
        
        isAuth = false
        
    }

    return isAuth;
}



export const fetchIssuses = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${base_url}/issues?populate=*`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return response;
}



export const addFuelRequest = async (data) => {

    const token = localStorage.getItem('token');
    const response = await axios({
        method: "post",
        url: `${base_url}/fuel-requests/`,
        data: {data},
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return response

}

export const addVehicleRequest = async (data) => {

    const token = localStorage.getItem('token');
    const response = await axios({
        method: "post",
        url: `${base_url}/vehicle-requests/`,
        data: {data},
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    return response

}


export const fetchFuelRequest = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${base_url}/fuel-requests?populate=*`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return response;
}

export const fetchFuel = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${base_url}/fuels?populate=*`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return response;
}


export const fetchUsers = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${base_url}/users?populate=*`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return response;
}

