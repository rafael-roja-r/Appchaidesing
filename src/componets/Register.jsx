import React from "react";
import use from "../img/bxs-user.svg"

const Register =()=>{

    return(
        <div className="register">
            <div className="resgister__container">
                <div className="register__logo">
                    
                </div>
                <form >
                    <h2>Register</h2>
                    <div className="form__group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter Name" />
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="Enter Email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter Password" />
                        
                        <input  style={{ display: "none" }} type="file" id="file" name="file" />   
                        <label htmlFor="file">
                        <img src={use} alt="avatar" /> add avatar
                        </label>                     
                    </div>
                    <button type="submit">Register</button>
                    <span>hola soy error</span>
                </form>
            </div>
        </div>
    )
}
export default Register;