import { useState } from "react";

import Card from "../UI/Card";
import InputGroup from "../UI/InputGroup";
import { Navigate } from "react-router-dom";
import "./Account.css";
import http from '../../../Util'

const Account = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dataUser, setDataUser] = useState("");

    const onCreateSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await http.post('/auth/signup', {
                email: email,
                password: password,
                lastname: lastname,
                firstname: firstname,
            })
            console.log(response.data.user)
            setDataUser(response.data.user)
        } catch (err) {
            alert(err.message)
        }
    }

    if (dataUser) {
        return <Navigate to="/login" replace={true} />
    }
    return (
        <div className="create-screen">
            <Card className="create-card">
                <h2>CREATE ACCOUNT</h2>
                <form onSubmit={onCreateSubmit}>
                    {/* <div className="create-text"><h5>Error</h5></div> */}
                    <InputGroup label="First name" value={firstname} htmlType="text" onChange={(evt) => {
                        setFirstname(evt.target.value);
                    }} />
                    <InputGroup label="Last name" value={lastname} htmlType="text" onChange={(evt) => {
                        setLastname(evt.target.value);
                    }} />
                    <InputGroup label="Email" value={email} htmlType="text" onChange={(evt) => {
                        setEmail(evt.target.value);
                    }} />
                    <InputGroup label="Password" value={password} htmlType="password" onChange={(evt) => {
                        setPassword(evt.target.value);
                    }} />

                    <div className="btn-create">
                        <button type="submit" >create</button>
                        {/* <button onClick={login}>create</button> */}

                    </div>

                </form>

            </Card>

        </div>
    )
}
export default Account;