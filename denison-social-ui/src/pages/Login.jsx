import LoginForm from "../components/authentication/LoginForm";
import { Link } from "react-router-dom";
import React from "react";

function Login() {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6 d-flex align-items-center">
                <div className="content text-center px-4">
                <h1 style={{color: "#C8102E"}}>
                    Welcome to Denison Social!</h1>
                <p className="content">
                    Login now and start enjoying! <br />
                    Or if you don't have an account, please{" "}
                    <Link to="/register/">register</Link>. <br />
                    For a quick look at the web, please log in with username: krystally and password: 123456789.
                </p>
                </div>
            </div>
            <div className="col-md-6 p-5">
                <LoginForm />
            </div>
            </div>
        </div>
    );
   }
   export default Login;