import React, { useState } from 'react';
import DisplayCooperResult from './DisplayCooperResult';
import InputFields from './InputFields';

const LandingPage = () => {
  const [form, setForm] = useState({
    age: '',
    distance: '',
    gender: 'female'
  });

  const onChangeHandler = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <InputFields onChangeHandler={onChangeHandler} />
      <DisplayCooperResult
        distance={form.distance}
        age={form.age}
        gender={form.gender}
      />
    </>
  );
};

export default LandingPage;
