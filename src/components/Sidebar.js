import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const [user, setUser] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const UserValidation = async () => {
    const tutortoken = localStorage.getItem('teachers_access_token')

    if (!tutortoken) {
      const token = localStorage.getItem('access_token')

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      if (token) {
        try {
          const response = await axios.get('/validateUser', config)
          setUser(response.data)
        } catch (error) {
          console.log('Error from Student')
        }
      } else {
        console.log('No Token')
      }
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${tutortoken}`
        }
      }

      try {
        const response = await axios.get('/validateTeacher', config)
        setUser(response.data)
      } catch (error) {
        console.log('Error from Teacher')
      }
    }
  }

  useEffect(() => {
    UserValidation()
  }, [location])

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <>
      <div class='side-bar'>
        <div id='close-btn'>
          <i class='fas fa-times'></i>
        </div>

        <div class='profile'>
          <img src='/images/pic-1.jpg' class='image' alt='' />
          <h3 class='name'>{user.name}</h3>
          <p class='role'>{user.profession || 'Student'}</p>
          <a href={(user.profession && '/dashboard') || '/profile'} class='btn'>
            View profile
          </a>
        </div>

        <nav class='navbar'>
          <a href={(user.profession && '/dashboard') || '/'}>
            <i class='fas fa-home'></i>
            <span>home</span>
          </a>
          <a href='/about'>
            <i class='fas fa-question'></i>
            <span>about</span>
          </a>

          {user.profession ? (
            <a href='/mycourses'>
              <i class='fas fa-graduation-cap'></i>
              <span>View Playlist</span>
            </a>
          ) : (
            <a href='/courses'>
              <i class='fas fa-graduation-cap'></i>
              <span>Courses</span>
            </a>
          )}

          {user.profession ? (
            <a href='/mycontent'>
              <i class='fas fa-chalkboard-user'></i>
              <span>View Content</span>
            </a>
          ) : (
            <a href='/teachers'>
              <i class='fas fa-chalkboard-user'></i>
              <span>teachers</span>
            </a>
          )}

          <a href='/contact'>
            <i class='fas fa-headset'></i>
            <span>contact us</span>
          </a>
          {user.name && (
            <a onClick={handleLogout} href='#'>
              <i class='fas fa-sign-out'></i>
              <span>Logout</span>
            </a>
          )}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
