import React, { useEffect, useState } from 'react'
import axios from '../axios'

const Teachers = () => {
  const [user, setUser] = useState([])

  const tutortoken = localStorage.getItem('teachers_access_token')
  const studentToken = localStorage.getItem('access_token')

  const config = {
    headers: {
      Authorization: `Bearer ${tutortoken || studentToken}`
    }
  }
  const getAllTeachers = async () => {
    try {
      const response = await axios.get('/getAllTeachers', config)
      setUser(response.data.teachers)
      console.log(user.teachers)
    } catch (error) {
      console.log(error)
    }
  }

  const [play, setPlay] = useState([])
  const [content, setContent] = useState([])
  const [notes, setNotes] = useState([])
  const [comments, setcomments] = useState([])
  const token = localStorage.getItem('access_token')

  const fetchTeacherData = async (teacher) => {
    const response = await axios.get(`/teacherprofile/${teacher}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    })

    setPlay(response.data.playlist)
    setContent(response.data.content)
    setcomments(response.data.comments)
    setNotes(response.data.notes)
  }

  useEffect(() => {
    getAllTeachers()
  }, [])

  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  return (
    <>
      <section class='teachers'>
        <h1 class='heading'>expert teachers</h1>

        <form action='' method='post' class='search-tutor'>
          <input
            type='text'
            name='search_box'
            placeholder='search tutors...'
            required
            maxlength='100'
          />
          <button
            type='submit'
            class='fas fa-search'
            name='search_tutor'
          ></button>
        </form>

        <div class='box-container'>
          <div class='box offer'>
            <h3>become a tutor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque ipsam fuga ex et aliquam.
            </p>
            <a href='tutorRegister' class='inline-btn'>
              get started
            </a>
          </div>

          {user.length > 0
            ? user.map(i => {
                return (
                  <>
                    <div key={i._id} class='box'>
                      <div class='tutor'>
                        <img src='images/pic-2.jpg' alt='' />
                        <div>
                          <h3>{i.name}</h3>
                          <span>{i.profession}</span>
                        </div>
                      </div>
                      <p>
                        total playlists : <span>{getRandomNumber()}</span>
                      </p>
                      <p>
                        total videos : <span>{getRandomNumber()}</span>
                      </p>
                      <p>
                        total comments : <span>{getRandomNumber()}</span>
                      </p>
                      <p>
                        total notes : <span>{getRandomNumber()}</span>
                      </p>
                      <a href={`/teacher/${i._id}`} class='inline-btn'>
                        view profile
                      </a>
                    </div>
                  </>
                )
              })
            : null}
        </div>
      </section>
    </>
  )
}

export default Teachers
