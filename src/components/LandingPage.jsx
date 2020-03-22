import React, { useState } from 'react';
import DisplayCooperResult from './DisplayCooperResult';
import InputFields from './InputFields';
import LoginForm from './LoginForm';
import { authenticate } from '../modules/auth';

const LandingPage = () => {
  const [form, setForm] = useState({
    age: '',
    distance: '',
    gender: 'female'
  });
  const [renderLoginForm, setRenderLoginForm] = useState(false);
  const [message, setMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [entrySaved, setEntrySaved] = useState(false)

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      setAuthenticated(true);
    } else {
      setMessage(response.message);
      setRenderLoginForm(false);
    }
  };

  let login;

  // eslint-disable-next-line default-case
  switch (true) {
    case renderLoginForm && !authenticated:
      login = <LoginForm submitFormHandler={onLogin} />;
      break;
    case !renderLoginForm && !authenticated:
      login = (
        <>
          <button id='login' onClick={() => setRenderLoginForm(true)}>
            Login
          </button>
          <p className='message'>{message}</p>
        </>
      );
      break;
    case authenticated:
      login = (
        <p className='message'>Hi {JSON.parse(sessionStorage.getItem('credentials')).uid}</p>
      );
      break;
  }

  return (
    <>
      <InputFields onChangeHandler={onChangeHandler} />
      {login}
      <DisplayCooperResult
        distance={form.distance}
        age={form.age}
        gender={form.gender}
        entrySaved={entrySaved}
        entryHandler={() => setEntrySaved(true)}
      />
    </>
  );
};

export default LandingPage;
