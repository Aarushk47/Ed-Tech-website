import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../axios'
import toast from 'react-hot-toast'


const LoginTeacher = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleLogin = async e => {
    e.preventDefault()

    const response = await axios
      .post('/loginteacher', {
        email,
        password
      })
      .catch(err => {
        toast.error(err.response.data.message)
      })

    if (response) {
      localStorage.setItem('teachers_access_token', response.data.access_token)
      navigate('/dashboard')
     
    }
  }

  return (
    <>
      <section class='form-container'>
        <form
          action=''
          method='POST'
          enctype='multipart/form-data'
          on
          onSubmit={handleLogin}
        >
          <h3>login now</h3>
          <p>
            your email <span>*</span>
          </p>
          <input
            type='email'
            name={email}
            onChange={e => setemail(e.target.value)}
            placeholder='enter your email'
            required
            class='box'
          />
          <p>
            your password <span>*</span>
          </p>
          <input
            type='password'
            name={password}
            onChange={e => setpassword(e.target.value)}
            placeholder='enter your password'
            required
            maxlength='20'
            class='box'
          />
          <input type='submit' value='login new' name='submit' class='btn' />
        </form>
      </section>
    </>
  )
}

export default LoginTeacher
