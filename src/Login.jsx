import React, { useState, useEffect } from "react";
import "./login.css"


function Login() {
    const [statusLogin, setStatusLogin] = useState(false)
    const Login = () => {
        localStorage.setItem("login", true)
        setStatusLogin(true)
    }
    const Logout = () => {
        localStorage.removeItem("login")
        setStatusLogin(false)
    }
    return (
        <center>
            {
                statusLogin ? <div>Selamat Datang <button onClick={Logout}>Logout</button></div>
                    : <div className="wrplogin">
                        <div className="iteminput">
                            <input type="text" placeholder="username" />
                        </div>
                        <div className="iteminput">
                            <input type="password" placeholder="password" />
                        </div>
                        <input type="button" value="Login" onClick={Login} />
                    </div>

            }
        </center>
    )
}

export default Login
