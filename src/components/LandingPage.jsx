import React, { useState } from 'react';
import DisplayCooperResult from './DisplayCooperResult';

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
      <input
        name='distance'
        id='distance'
        placeholder='Distance'
        onChange={onChangeHandler}
      />

      <select name='gender' id='gender' onChange={onChangeHandler}>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
      </select>

      <input name='age' id='age' placeholder='Age' onChange={onChangeHandler} />

      <DisplayCooperResult 
        distance={values.distance}
        age={values.age}
        gender={gender}
      />
    </>
  );
};

export default LandingPage;
