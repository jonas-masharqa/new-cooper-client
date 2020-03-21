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

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const login = renderLogin ? (
    <LoginForm />
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
