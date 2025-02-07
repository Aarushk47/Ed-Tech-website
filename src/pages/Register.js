import React, { useState } from 'react'
import axios from '../axios'
import { toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'


const Register = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirm_password, setconfirm_password] = useState('')

  const handleRegister = async e => {
    e.preventDefault()

    const res = await axios
      .post('/register', {
        name,
        email,
        password,
        confirm_password
      })
      .then(() => {
        toast.success('Succesfull Register')
      })
      .catch(err => {
        toast.error(err.response.data.message)
      })
      console.log('succ',res);
  }

  const navigate = useNavigate();


  const register = () => {
    navigate('/login')
  }
  return (
    <>
      <section class='form-container'>
        <form className='login-form'
          action=''
          method='post'
          enctype='multipart/form-data'
          onSubmit={handleRegister}
        >
          <h3>register now</h3>
          <p>
            your name <span>*</span>
          </p>
          <input
            type='text'
            name={confirm_password}
            onChange={e => setname(e.target.value)}
            placeholder='enter your name'
            required
            class='box'
          />
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
            class='box'
          />
          <p>
            confirm password <span>*</span>
          </p>
          <input
            type='password'
            name={confirm_password}
            onChange={e => setconfirm_password(e.target.value)}
            placeholder='confirm your password'
            required
            class='box'
          />

          <input type='submit' value='register new' name='submit' class='btn' />
          <button class='btn' onClick={register} >Login</button>

        </form>
      </section>
    </>
  )
}

export default Register
