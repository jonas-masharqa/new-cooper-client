import React from 'react'

const LoginForm = ({ submitFormHandler }) => {
  return (
    <>
      <form onSubmit={submitFormHandler} id='login-form'>
        <input name='email' type='email' id='email' placeholder='Email' />
        <input name='password' type='password' id='password' placeholder='Password' />

        <button id='submit'>Submit</button>
      </form>
    </>
  )
}

export default LoginForm
