import { Email, Password, VerifiedUser } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import './Register.css';
import { register } from '../../api/api';
import Swal from 'sweetalert2';



const Register = () => {

    // redirect the user after registering 

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = () => {
        // e.preventDefault();
        register(username, email, password).then((data) => {

           
            // console.log(data);
        }).catch(err => {

            Swal.fire({
                icon: 'warning',
                title: 'Registration Failure',
                text: `Please resolve the errors to continue`,
                
            });
            
        });

        setUsername("");
        setEmail("");
        setPassword("");
        Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: `Registration Successful Please Login into the system`,
            
        }).then(() => {
            navigate('/login')
        });
        
    }



    return (
        <div className="register">


            <div className="register__right">

            </div>

            <div className="register__left">
                <h2 className="register__title"> RLB Fleet Management <span>System</span></h2>


                <div className="register__input">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeHolder="Username" name="username" id="username" />

                    <VerifiedUser className="icon" />
                </div>

                <div className="register__input">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeHolder="Email" name="email" id="email" />

                    <Email className="icon" />
                </div>

                <div className="register__input">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="password" id="email" />

                    <Password className="icon" />
                </div>

                <div className="register__links">

                    <div className="register__links__left">

                        <Link to="/login" >
                            <p className="register__register"><span>Already have an account?</span> Sign In here </p>
                        </Link>
                        {/* <p className="register__forgetpassword">Forgot password</p> */}
                    </div>

                    <div className="register__links__right">
                        <button type="submit" onClick={handleSubmit} className="signin">Sign up</button>
                    </div>


                </div>


            </div>


        </div>
    )
}

export default Register
