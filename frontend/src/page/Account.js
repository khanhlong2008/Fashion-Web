import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthCtx from '../context/AuthProvider/AuthCtx';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, checking, updateUser } = useContext(AuthCtx);
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [showNoti, setShow] = useState(false);

  useEffect(() => {
    if (user) {
      const { firstname, lastname, email, password } = user;
      setInfo({
        firstname,
        lastname,
        email,
        password,
      });
    }
  }, [user]);

  if (!user && checking) {
    navigate('/404notfound');
  }

  const handleInput = e => {
    setInfo(state => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { firstname, lastname, password, email } = info;
    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      password === ''
    ) {
      alert('Please enter all fields!');
    } else if (password.length < 6)
      alert('Password length must be greater than 6 characters.');
    else if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    )
      alert('Please enter a valid email!');
    else {
      setShow(true);
      updateUser(info);
    }
  };

  return (
    <section className="account__container container d-block">
      <h1 className="text-primary text-center mb-3">Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            value={info.firstname}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={info.lastname}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Your Email</label>
          <input
            type="text"
            name="email"
            value={info.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={info.password}
            onChange={handleInput}
          />
        </div>
        <div className="btn-container">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
      <div className={`notification ${showNoti ? 'show' : ''}`}>
        <div className="notification-container">
          <i className="bi bi-check-circle"></i>
          <p>Profile Updated!!</p>
        </div>
        <div className="backdrop" onClick={() => setShow(false)}></div>
      </div>
    </section>
  );
};

export default Account;
