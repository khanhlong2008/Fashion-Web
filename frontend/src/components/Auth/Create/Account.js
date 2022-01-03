import { useState, useEffect, useContext } from 'react';

import Card from '../UI/Card';
import InputGroup from '../UI/InputGroup';
import { useNavigate } from 'react-router-dom';
import './Account.css';
import AuthCtx from '../../../context/AuthProvider/AuthCtx';

const Account = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, register } = useContext(AuthCtx);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }

    // eslint-disable-next-line
  }, [isAuthenticated]);

  const onCreateSubmit = async evt => {
    evt.preventDefault();
    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      password === ''
    ) {
      console.log('Please enter all fields', 'danger');
    } else {
      register({ firstname, lastname, email, password });
    }
  };

  return (
    <div className="create-screen">
      <Card className="create-card">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={onCreateSubmit}>
          {/* <div className="create-text"><h5>Error</h5></div> */}
          <InputGroup
            label="First name"
            value={firstname}
            htmlType="text"
            onChange={evt => {
              setFirstname(evt.target.value);
            }}
          />
          <InputGroup
            label="Last name"
            value={lastname}
            htmlType="text"
            onChange={evt => {
              setLastname(evt.target.value);
            }}
          />
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

          <div className="btn-create">
            <button type="submit">create</button>
            {/* <button onClick={login}>create</button> */}
          </div>
        </form>
      </Card>
    </div>
  );
};
export default Account;
