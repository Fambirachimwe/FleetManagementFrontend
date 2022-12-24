import React, { useEffect, useState } from 'react';
import "./Login.css";
import { Email, Password } from "@mui/icons-material";
import { Link } from 'react-router-dom'
import { login } from "../../api/api"
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthImage from "../../images/authImage.svg"
import Swal from "sweetalert2";


const Login = ({ isAuth, userLogin, setUser }) => {

    const navigate = useNavigate();


    useEffect(() => {
        if (isAuth === true) {
            navigate("/", { replace: true });
        }
    }, [isAuth]);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        login(email, password).then(response => {
            localStorage.setItem("token", response.data.jwt);
            userLogin();
            setUser(response);

            // console.log(response);

        }).catch(err => {

            Swal.fire({
                icon: 'warning',
                title: 'Authentication Failure',
                text: `Email or Password is incorrect`,

            });

        })




    }



    return (
        <div className="login">



            <div className="login__right">

                <img style={{ width: "80%", position: "relative", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} src={AuthImage} alt="" srcset="" />

            </div>

            <div className="login__left">
                <h2 className="login__title"> Hasteds Fleet Management <span>System</span></h2>


                <div className="login__input">
                    <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeHolder="Email" name="email" id="email" />

                    <Email className="icon" />
                </div>

                <div className="login__input">
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="password" id="email" />

                    <Password className="icon" />
                </div>

                <div className="login__links">

                    <div className="login__links__left">

                        <Link to="/register" >
                            <p className="login__register">Register</p>
                        </Link>




                        <p className="login__forgetpassword">Forgot password</p>
                    </div>

                    <div className="login__links__right">
                        <button onClick={handleClick} className="signin">Sign In</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: () => { dispatch({ type: "LOGGED_IN", isAuth: true }) },
        setUser: (user) => { dispatch({ type: "SET_USER", user: user }) }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
