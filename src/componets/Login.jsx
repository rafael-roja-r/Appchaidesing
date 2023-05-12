import React from "react";

const Login =()=>{
    return(
        <div className="register">
            <div className="resgister__container">
            <div className="register__logo">
                    
                    </div>
                <form >
                    <h2>Login</h2>
                    <div className="form__group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="Enter Email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter Password" />
                                           
                    </div>
                    <button type="submit">Login in</button>
                    <span></span>
                    <p>I do not have a user in the app <a >Register</a></p>
                </form>
            </div>
        </div>
    );
}
export default Login;