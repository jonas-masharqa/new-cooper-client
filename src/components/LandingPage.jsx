import React from 'react'

const LandingPage = () => {
  return (
    <>
      <input name='distance' id='distance' placeholder='Distance' />
      <select name='gender' id='gender'>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
      </select>
      
      <input name='age' id='age' placeholder='Age' />
    </>
  )
}

export default LandingPage