import React, { useState } from 'react';
import DisplayCooperResult from './DisplayCooperResult';
import InputFields from './InputFields';
import LoginForm from './LoginForm';

const LandingPage = () => {
  const [form, setForm] = useState({
    age: '',
    distance: '',
    gender: 'female'
  });
  const [renderLogin, setRenderLogin] = useState(false);
  const [message, setMessage] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  const login = renderLogin ? (
    <LoginForm 
      submitFormHandler={onLogin}
    />
  ) : (
    <button
      id='loign'
      onClick={() => {
        setRenderLogin(true);
      }}
    >
      Login
    </button>
  );

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onLogin = async e => {
    e.preventDefault()
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    )
    if (response.authenticated) {
      setAuthenticated(true)
    } else {
      setMessage(response.message)
      setRenderLogin(false)
    }
  }

  return (
    <>
      <InputFields onChangeHandler={onChangeHandler} />
      {login}
      <DisplayCooperResult
        distance={form.distance}
        age={form.age}
        gender={form.gender}
      />
    </>
  );
};

export default LandingPage;
