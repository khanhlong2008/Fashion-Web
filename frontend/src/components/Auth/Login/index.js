import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import InputGroup from "../UI/InputGroup";
import http, { addJwt } from "../../../Util";
import AuthContext from "../../../context/auth.js";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
    const authCtx = useContext(AuthContext)
    const onLoginSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await http.post('/auth/signin',
                {
                    email: email,
                    password: password,
                })
            // console.log(response)
            authCtx.setUser(response.data.user)
            // console.log(response.data.user)
            localStorage.setItem("token", response.data.token)
            addJwt(response.data.token)

        } catch (err) {
            alert(err.message);
        }
    }

    if (authCtx.user) {
      return <Navigate to="/home" replace={true} />
    }



  return (
    <div className="login-screen">
      <Card className="login-card">
        <h2>LOGIN</h2>
        <form onSubmit={onLoginSubmit}>
          <InputGroup
            label="Email"
            value={email}
            htmlType="text"
            onChange={(evt) => {
              setEmail(evt.target.value);
            }}
          />
          <InputGroup
            label="Password"
            value={password}
            htmlType="password"
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
          />
          <Link to="/forgot" className="login-forgot">
            Forgot your password?
          </Link>
          <div className="btn-login">
            <button type="submit">sign in</button>
          </div>
          <Link to="/register" className="login-register">
            Create account
          </Link>
        </form>
      </Card>
    </div>
  );

}
export default Login;
