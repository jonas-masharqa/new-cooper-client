import React, { useState } from 'react';
import DisplayCooperResult from './DisplayCooperResult';
import InputFields from './InputFields'

const LandingPage = () => {
  const [gender, setGender] = useState('female');
  const [values, setValues] = useState({
    distance: '',
    age: ''
  });

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    setGender({ [name]: value });
  };

  return (
    <>
      <InputFields onChangeHandler={onChangeHandler} />
      <DisplayCooperResult 
        distance={values.distance}
        age={values.age}
        gender={gender}
      />
    </>
  );
};

export default LandingPage;
