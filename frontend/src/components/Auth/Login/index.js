import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../UI/Card';
import InputGroup from '../UI/InputGroup';
import './Login.css';
import AuthCtx from '../../../context/AuthProvider/AuthCtx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useContext(AuthCtx);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const onLoginSubmit = async evt => {
    evt.preventDefault();
    if (email === '' || password === '') {
      console.log('Please enter all fields', 'danger');
    } else {
      login({ email, password });
    }
  };

  if (isAuthenticated) return <></>;

  return (
    <div className="login-screen">
      <Card className="login-card">
        <h2>LOGIN</h2>
        <form onSubmit={onLoginSubmit}>
          <InputGroup
            label="Email"
            value={email}
            htmlType="text"
            onChange={evt => {
              setEmail(evt.target.value);
            }}
          />
          <InputGroup
            label="Password"
            value={password}
            htmlType="password"
            onChange={evt => {
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
};
export default Login;
