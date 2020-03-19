import React from 'react'

const InputFields = ({ onChangeHandler }) => {
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
    </>
  )
}

export default InputFields