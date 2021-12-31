import React, { useState } from "react";
import Card from "../UI/Card";
import InputGroup from "../UI/InputGroup";
import { Link } from "react-router-dom";
import "./Forgot.css";
const Forgot = () => {
    const [username, setUsername] = useState("");
    const onForgotSubmit = (evt) => {
        evt.preventDefault();
    }
    return (
        <div className="forgot-screen">
            <Card className="forgot-card">
                <h2>RESET YOUR PASSWORD</h2>
                <form onSubmit={onForgotSubmit}>
                    <div className="forgot-text"><h5>We will send tou an email to reset your password</h5></div>

                    <InputGroup label="Email" value={username} htmlType="text" onChange={(evt) => {
                        setUsername(evt.target.value);
                    }} />


                    <div className="btn-forgot">
                        <button>submit</button>
                    </div>
                    <Link to="/" className="forgot-register">Cancel</Link>

                </form>

            </Card>

        </div>
    )
}
export default Forgot;