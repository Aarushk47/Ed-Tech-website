import React, { useEffect, useState } from 'react'
import axios from '../axios'

const Profile = () => {
  const [user, setUser] = useState({})
  const [bookmarks, setbookmarks] = useState([])
  const [comments, setcomments] = useState([])

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

  const token = localStorage.getItem('access_token')

  const studentProfile = async () => {
    const response = await axios.get(`/studentprofile`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    })

    console.log(response.data);
    setbookmarks(response.data.bookmarks)
    setcomments(response.data.comments)
  }

  useEffect(() => {
    UserValidation()
    studentProfile()
  }, [])
  return (
    <>
      <section class='user-profile'>
        <h1 class='heading'>your profile</h1>

        <div class='info'>
          <div class='user'>
            <img src='images/pic-1.jpg' alt='' />
            <h3>{user.name}</h3>
            <p>{user.profession || 'Student'}</p>
           
          </div>

          <div class='box-container'>
            <div class='box'>
              <div class='flex'>
                <i class='fas fa-bookmark'></i>
                <div>
                  <span>{bookmarks.length}</span>
                  <p>saved playlist</p>
                </div>
              </div>
              <a href='/courses' class='inline-btn'>
                view playlists
              </a>
            </div>

        

            <div class='box'>
              <div class='flex'>
                <i class='fas fa-comment'></i>
                <div>
                  <span>{comments.length}</span>
                  <p>videos comments</p>
                </div>
              </div>
              <a href='#' class='inline-btn'>
                comments
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
