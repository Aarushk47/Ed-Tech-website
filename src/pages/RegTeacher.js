import React, { useState } from 'react'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const RegTeacher = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirm_password, setconfirm_password] = useState('')
  const navigate = useNavigate()
  const handleRegister = async e => {
    const token = localStorage.getItem('access_token')
    e.preventDefault()
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const res = await axios
      .post(
        '/registerteacher',
        {
          name,
          email,
          password,
          confirm_password
        },
        config
      )
      .then(() => {
        toast.success('Succesfull Register As Tutor')
        navigate('/tutorLogin')
      })
      .catch(err => {
        toast.error(err.response.data.message)
      })
    console.log('succ', res)
  }
  return (
    <>
      <section class='form-container'>
        <form
          action=''
          method='post'
          enctype='multipart/form-data'
          onSubmit={handleRegister}
        >
          <h3>Become a tutor</h3>
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
        </form>
      </section>
    </>
  )
}

export default RegTeacher
