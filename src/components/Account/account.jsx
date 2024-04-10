
import { Link } from 'react-router-dom';
import style from './account.module.css'
import React from "react";
const Account=()=>{
return(
    <>
    <div className={style.mainDiv}>
        <h1>Welcome to ReactCart</h1>
        <input type="email" placeholder="Enter your E-mail"></input>
        <input type="password" placeholder="Enter your password"></input>
        <center><button type='submit'>Login</button></center>
        <center><p><Link to="/////" className={style.signupLink}>New User? sign-up here</Link></p></center>
    </div>
    </>
)
}
export default Account;
